class Card
    
    attr_reader :rank, :suit
    SUITS = [:club, :diamond, :heart, :spade].freeze

    def initialize(rank, suit)
        @rank = rank
        @suit = suit
    end
    
    def compare(other)
      if self.rank != other.rank
        return self.rank <=> other.rank
      else
        self.suit <=> other.suit
      end
    end 
    #to_s
    #card1 < card2
    #card1 <=> card2 
    #card1.compare(card2)
    # clubs, diamonds, hearts, spades
end