def bad_two_sum?(arr, target_sum) #O(n^2)
    arr.each_index do |i|
        (i+1...arr.length).each do |j|
            if arr[i]+arr[j] == target_sum
                return true
            end
        end
    end
    false
end

def okay_two_sum?(arr, target_sum)
    sorted_arr = arr.sort

    sorted_arr.each_with_index do |el, i|
        search_val = target_sum - el
        paired_val = bsearch(sorted_arr[i+1..-1], search_val)
        if paired_val.nil?
            next
        else
            return true
        end
    end
    false
    #for each element
    #   looking for = target - element
    #   binary_search looking for
    #   if found, true else false
end

def bsearch(array, target)

    left = 0
    right = array.length - 1

    until left > right
        middle = (left + right) / 2
        if array[middle] < target
            left = middle + 1
        elsif array[middle] > target
            right = middle - 1
        else
            return array[middle]
        end
    end

    nil
end

def two_sum?(arr, target_sum)
    hash = Hash.new

end
    

arr = [0, 1, 5, 7]
p bad_two_sum?(arr, 6) # => should be true
p bad_two_sum?(arr, 10) # => should be false
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false
