require 'hand'

RSpec.describe Hand do
  subject(:hand) {Hand.new([:card1, :card2, :card3, :card4, :card5])} 
  let(:card1) {Card.new(1, :heart)}
  let(:card2) {Card.new(2, :club)}
  let(:card3) {Card.new(3, :diamond)}
  let(:card4) {Card.new(4, :heart)}
  let(:card5) {Card.new(5, :spade)}
    
  describe "#initialize" do 
    it  "contains five cards" do 
      expect(hand.cards.length).to eq(5)  
    end 
  end
  
  #The logic of calculating pair, three-of-a-kind, two-pair, etc. goes here.

end 