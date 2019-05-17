
def first_anagram?(string1, string2) #O(n!)
    arr = string1.chars.permutation.to_a
    arr.map!{|subarr| subarr.join}
    arr.include?(string2)
end

def second_anagram?(string1, string2) #O(n^2)
    str1_chars = string1.chars
    str2_chars = string2.chars

    str1_chars.each do |char|
        str2_index = str2_chars.find_index(char)
        return false unless str2_index
        str2_chars.delete_at(str2_index)
    end
    str2_chars.empty?

end

def third_anagram?(string1, string2) #O(n log n)
    str1_chars = string1.chars.sort.join
    str2_chars = string2.chars.sort.join
    str1_chars == str2_chars
end

def fourth_anagram?(string1, string2) #O(n) O(n + m) => Linear
    letter_hash = Hash.new(0)

    string1.chars.each do |ch|
        letter_hash[ch] += 1
    end
    string2.chars.each do |ch|
        letter_hash[ch] -= 1
    end

    letter_hash.values.all? { |val| val == 0 }
end

p first_anagram?("abc", "cba") # true
p first_anagram?("abcd", "cbda") # true
p first_anagram?("01234567", "7654321") # false

p second_anagram?("abc", "cba") # true
p second_anagram?("abcd", "cbda") # true
p second_anagram?("01234567", "7654321") # false


p third_anagram?("abc", "cba") # true
p third_anagram?("abcd", "cbda") # true
p third_anagram?("01234567", "7654321") # false


p fourth_anagram?("abc", "cba") # true
p fourth_anagram?("abcd", "cbda") # true
p fourth_anagram?("01234567", "76543021") # false