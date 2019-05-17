require_relative "question_database"
require_relative "users"
require_relative "questions"

class QuestionLike
  attr_accessor :users_id, :question_id

  def initialize(options)
    @user_id = options["user_id"]
    @question_id = options["question_id"]
  end

  def self.find_by_user_id(users_id)
    question_likes = QuestionsDBConnection.instance.execute(<<-SQL, users_id)
        SELECT
          *
        FROM
          question_likes
        WHERE
          users_id = ?
      SQL
    return [] unless question_likes.length > 0

    result = []
    question_likes.each do |like|
      result.push(User.find_by_id(like["users_id"]))
    end
    result
  end

  def self.likers_for_question_id(question_id)
    likers = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
        SELECT
          users_id
        FROM
          question_likes
        WHERE
          question_id = ?
      SQL
    return [] unless likers.length > 0
    result = []
    likers.each do |liker|
      result.push(User.find_by_id(liker["users_id"]))
    end
    result
  end

  def self.num_likes_for_question_id(question_id)
    num = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
        SELECT
          COUNT(users_id) AS num
        FROM
          question_likes
        WHERE
          question_id = ?
        GROUP BY
          question_id
      SQL
    return 0 if num.empty?
    num.first["num"]
  end

  def self.liked_questions_for_user_id(users_id)
    questions = QuestionsDBConnection.instance.execute(<<-SQL, users_id)
        SELECT
          question_id
        FROM
          question_likes
        WHERE
        users_id = ?
      SQL
    result = []
    questions.each do |question|
      result << Question.find_by_id(question["question_id"])
    end
    result
  end

  def self.most_liked_questions(n)
    question_ids = QuestionsDBConnection.instance.execute(<<-SQL, n)
      SELECT
        question_id
      FROM
        question_likes
      GROUP BY
        question_id 
      ORDER BY COUNT(users_id) DESC LIMIT ?
    SQL
    results = []
    question_ids.each do |qid|
      results << Question.find_by_id(qid["question_id"])
    end
    results
  end
end

if __FILE__ == $PROGRAM_NAME
  # likes = QuestionLike.find_by_user_id(2)
  # p likes

  # p QuestionLike.liked_questions_for_user_id(2)
  p QuestionLike.most_liked_questions(1)
end
