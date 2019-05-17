require_relative "card"

class Deck
    

    #shuffle
    #deal
    #receive cards
    attr_reader :cards 
    def initialize
        @cards = []
        populate        
    end

    def populate
        Card::SUITS.each do |suit|
            (1..13).each do |rank|
                self.cards << Card.new(rank, suit)
            end
        end 
    end
end