class Array
    def my_uniq
        hash = {}
        self.each { |el| hash[el] = true }
        hash.keys.sort
    end
    
    def two_sum
        result = []
        (0...self.length-1).each do |i|
            (i+1...self.length).each do |j|
                result.push([i,j]) if self[i] + self[j] == 0  
            end
        end  
        result
    end 

    def my_transpose
        new_arr = Array.new(self.size){Array.new(self.size)}

        self.each_index do |i|
            self.each_index do |j|
                new_arr[i][j] = self[j][i]
            end
        end

        new_arr
    end 

    def stock_picker
        most_profitable_pair = nil
        biggest_diff = 0

        (0...self.length-1).each do  |i|
          (i+1...self.length).each do |j|
            diff = self[j] - self[i]
            if diff > biggest_diff 
               biggest_diff = diff  
               most_profitable_pair = [i,j]
            end 
          end
        end

        most_profitable_pair 
    end
end