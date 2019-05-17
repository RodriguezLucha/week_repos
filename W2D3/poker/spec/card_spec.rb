require "card"

RSpec.describe Card do
    subject(:card1) {Card.new(2, :heart)}
    let(:card2) {Card.new(2, :diamond)}
    describe "#initialize" do
        it "takes rank and suit" do
            expect(card1.rank).to eq(2)
            expect(card1.suit).to eq(:heart)
        end
    end 

    describe "#compare" do 
      it "greater than" do 
        expect(card1.compare(card2)).to be true  
      end 
    end

end