require_relative "question_database"
require_relative "users"
require_relative "questions"

class Reply
  attr_accessor :question_id, :parent_id, :users_id, :body

  def initialize(options)
    @id = options["id"]
    @question_id = options["question_id"]
    @parent_id = options["parent_id"]
    @users_id = options["users_id"]
    @body = options["body"]
  end

  def self.find_by_id(id)
    reply = QuestionsDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          replies
        WHERE
          id = ?
      SQL
    return nil unless reply.length > 0

    Reply.new(reply.first)
  end
  def self.find_by_user_id(users_id)
    replies = QuestionsDBConnection.instance.execute(<<-SQL, users_id)
      SELECT
        *
      FROM
        replies
      WHERE
      users_id = ?
    SQL
    return [] unless replies.length > 0

    result = []
    replies.each do |reply|
      result.push(Reply.new(reply))
    end
    result
  end

  def self.find_by_question_id(question_id)
    replies = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        replies
      WHERE
      question_id = ?
    SQL
    return [] unless replies.length > 0

    result = []
    replies.each do |reply|
      result.push(Reply.new(reply))
    end
    result
  end

  def author
    User.find_by_id(@users_id)
  end

  def question
    Question.find_by_id(@question_id)
  end

  def parent_reply
    Reply.find_by_id(@parent_id)
  end

  def child_replies
    Reply.find_by_parent_id(@id)
  end

  def self.find_by_parent_id(parent_id)
    replies = QuestionsDBConnection.instance.execute(<<-SQL, parent_id)
      SELECT
        *
      FROM
        replies
      WHERE
      parent_id = ?
    SQL
    return [] unless replies.length > 0

    result = []
    replies.each do |reply|
      result.push(Reply.new(reply))
    end
    result
  end
end

if __FILE__ == $PROGRAM_NAME
  # reply = Reply.find_by_user_id(4)
  # p reply

  # reply = Reply.find_by_question_id(1)
  # p reply

  # p Reply.find_by_id(1).author

  # p Reply.find_by_id(1).question

  p Reply.find_by_id(3).child_replies
  #p Reply.find_by_id(1).child_replies
end
