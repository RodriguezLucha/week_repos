require 'byebug'
def my_min1(list) #O(n^2)
    list.each do |el|
        return el if list.all? { |el2| el2 >= el }
    end
end

def my_min2(list) #O(n)
    min = list.first
    list.each do |el|
        min = el if el < min
    end
    min
end

def largest_contiguous_subsum1(list) # O(n^2)
    sub_arrays = []
    count = 1
    
    (1..list.length).each do |i|
        sub_arrays += list.each_cons(i).to_a
    end
    sub_arrays.map { |sub_array| sub_array.sum }.max
end

def largest_contiguous_subsum2(list) # O(n)
    curr_sum = list.first
    global_sum = list.first
    list[1..-1].each do |num|
        curr_sum = [num, curr_sum + num].max
        global_sum = [curr_sum, global_sum].max
    end
    global_sum
end

def largest_contiguous_subsum3(list) # O(n)
    return 0 if list.empty?

    curr_sum = list.shift
    global_sum = curr_sum
    list.each_with_index do |num, i|
        if curr_sum + num > num
            curr_sum += num
        else
            curr_sum = largest_contiguous_subsum3(list[i..-1])
            break
        end
    end
    [curr_sum, global_sum].max
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min1(list) 
p my_min2(list)

list = [-5, -1, -3]
p largest_contiguous_subsum1(list)

list = [5, 3, -7]
p largest_contiguous_subsum2(list)

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum2(list)
list = [-5, -1, -3]
p largest_contiguous_subsum2(list)


list = [5, 3, -7]
p largest_contiguous_subsum3(list)

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum3(list)
list = [-5, -1, -3]
p largest_contiguous_subsum3(list)