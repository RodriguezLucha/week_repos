require "myarray"

RSpec.describe Array do
    describe "#my_uniq" do
        it "it should take in an Array and return a new array" do
            expect([1, 2, 1, 3, 3].my_uniq).to eq([1,2,3])
            expect([4, 1, 2, 1, 3, 3].my_uniq).to eq([1,2,3,4])
        end
    end
    
    describe "#two_sum" do
        it "return positions where the elements sum to zero" do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
        end
        
        it "return empty array when no pairs sum to zero" do 
            expect([1,1].two_sum).to be_empty
        end 
    end 

    describe "#my_transpose" do 
        it "convert between the row-oriented and column-oriented" do 
            input_matrix = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
              ]
            output_matrix = [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
              ]
            expect(input_matrix.my_transpose).to eq(output_matrix) 
        end
    end

    describe "#stock_picker" do
        it "returns the most profitable pair of days" do
            example = [10, 100, 1, 10, 10, 200, 1000, 900]
            expect(example.stock_picker).to eq([2,6])
        end

        it "returns nil when there is no profitable pair of days" do
            example = [100, 99, 50, 40, 30]
            expect(example.stock_picker).to be_nil 
        end
    end
end