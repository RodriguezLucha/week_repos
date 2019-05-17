require_relative "question_database"
require_relative "users"

class QuestionFollows
  attr_accessor :questions_id, :users_id

  def initialize(options)
    @questions_id = options["questions_id"]
    @users_id = options["users_id"]
  end

  def self.followers_for_question_id(questions_id)
    followers = QuestionsDBConnection.instance.execute(<<-SQL, questions_id)
        SELECT
          users_id
        FROM
          question_follows
        WHERE
          questions_id = ?
      SQL
    return [] unless followers.length > 0
    result = []
    followers.each do |follower|
      result.push(User.find_by_id(follower["users_id"]))
    end
    result
  end

  def self.followed_questions_for_user_id(users_id)
    followed = QuestionsDBConnection.instance.execute(<<-SQL, users_id)
        SELECT
          questions_id
        FROM
          question_follows
        WHERE
          users_id = ?
      SQL
    return [] unless followed.length > 0
    result = []
    followed.each do |follower|
      result.push(Question.find_by_id(follower["questions_id"]))
    end
    result
  end

  def self.most_followed_questions(n)
    question_ids = QuestionsDBConnection.instance.execute(<<-SQL, n)
        SELECT
          questions_id
        FROM
          question_follows
        GROUP BY
          questions_id 
        ORDER BY COUNT(users_id) DESC LIMIT ?
      SQL
    results = []
    question_ids.each do |qid|
      results << Question.find_by_id(qid["questions_id"])
    end
    results
  end
end

if __FILE__ == $PROGRAM_NAME
  # followed = QuestionFollows.followed_questions_for_user_id(1)
  # p followed

  p QuestionFollows.most_followed_questions(-1)
end
