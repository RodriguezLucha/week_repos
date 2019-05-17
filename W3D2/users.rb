require_relative "question_database"
require_relative "questions"
require_relative "replies"
require_relative "question_follows"
require_relative "question_likes"

class User
  attr_accessor :fname, :lname

  def initialize(options)
    @id = options["id"]
    @fname = options["fname"]
    @lname = options["lname"]
  end

  def self.find_by_id(id)
    user = QuestionsDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          users
        WHERE
          id = ?
      SQL
    return nil unless user.length > 0

    User.new(user.first)
  end

  def self.find_by_name(fname, lname)
    user = QuestionsDBConnection.instance.execute(<<-SQL, fname, lname)
          SELECT
            *
          FROM
            users
          WHERE
            fname = ?
            AND
            lname = ?
        SQL
    return nil unless user.length > 0

    User.new(user.first)
  end

  def authored_questions
    Question::find_by_author_id(@id)
  end

  def authored_replies
    Reply::find_by_user_id(@id)
  end

  def followed_questions
    QuestionFollows.followed_questions_for_user_id(@id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(@id)
  end

  def average_karma
    num = QuestionsDBConnection.instance.execute(<<-SQL, @id)
    SELECT 
      CAST(COUNT(users_id) AS FLOAT) / CAST(COUNT(DISTINCT(id)) AS FLOAT) AS avg_likes 
      FROM questions 
      LEFT OUTER JOIN question_likes 
      ON questions.id = question_likes.question_id 
      WHERE associated_author_id = ?
      SQL
    p num
    return 0 if num.empty?
    p num
    return num.first["avg_likes"]
  end
end

if __FILE__ == $PROGRAM_NAME
  # user = User.find_by_name("Rudy", "Rodriguez")

  #p User.find_by_id(1).authored_questions
  p User.find_by_id(1).average_karma
end
