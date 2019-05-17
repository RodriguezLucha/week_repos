json.username @user.username 
json.errors do 
    json.array!  @user.errors.full_messages 
end 