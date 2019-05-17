require_relative "question_database"
require_relative "users"
require_relative "replies"
require_relative "question_follows"
require_relative "question_likes"

class Question
  attr_accessor :title, :body, :associated_author_id

  def initialize(options)
    @id = options["id"]
    @title = options["title"]
    @body = options["body"]
    @associated_author_id = options["associated_author_id"]
  end

  def self.find_by_id(id)
    question = QuestionsDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          questions
        WHERE
          id = ?
      SQL
    return nil unless question.length > 0

    Question.new(question.first)
  end

  def self.find_by_author_id(author_id)
    questions = QuestionsDBConnection.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
      WHERE
        associated_author_id = ?
    SQL
    return [] unless questions.length > 0

    result = []
    questions.each do |question|
      result.push(Question.new(question))
    end

    result
  end

  def author
    User.find_by_id(@associated_author_id)
  end

  def replies
    Reply.find_by_question_id(@id)
  end

  def followers
    QuestionFollows.followers_for_question_id(@id)
  end

  def self.most_followed(n)
    QuestionFollows.most_followed_questions(n)
  end

  def likers
    QuestionLike.likers_for_question_id(@id)
  end

  def num_likes
    QuestionLike.num_likes_for_question_id(@id)
  end

  def self.most_liked(n)
    QuestionLike.most_liked_questions(n) 
  end
end

if __FILE__ == $PROGRAM_NAME
  # question = Question.find_by_id(1)
  # p question

  # questions = Question.find_by_author_id(2)
  # p questions

  #p Question.find_by_id(1).author

  # p Question.find_by_id(1).replies
  # p Question.find_by_id(1).num_likes

  # p Question.most_followed(2)
  p Question.most_liked(1)
end
