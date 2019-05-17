require "towersofhanoi"

RSpec.describe TowersOfHanoi do
    subject(:hanoi) { TowersOfHanoi.new }
    describe "#initialize" do
        it "starts with 2D array" do
            expect(hanoi.towers).to eq([[3,2,1],[],[]])
        end
    end
end