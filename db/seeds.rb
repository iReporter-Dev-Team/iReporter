puts "creating ireporter database"

#   50.times do
# User.create(name:Faker::FunnyName.name, 
#     email:Faker::Internet.free_email,
#      password:Faker::Internet.password,
#      is_admin: true) 

# end

user = User.create(name:Faker::FunnyName.name,  
    email:Faker::Internet.free_email,
     password:Faker::Internet.password,
     is_admin: true) 


     50.times do 
        Intervention.create!(location: "Nairobi",
             image: "https://www.pexels.com/photo/milan-13379800/",
              video: "https://www.youtube.com/watch?v=GOISuk0pYIY", status: 
              "Resolved", description: "Lorem ipsum and etc....", 
              user_id:user.id)
        end

        
            10.times do 
                Redflag.create!(location: "Nairobi",
                     image: "https://www.pexels.com/photo/milan-13379800/",
                      video: "https://www.youtube.com/watch?v=GOISuk0pYIY", status: 
                      "Resolved", description: "Lorem ipsum and etc....", 
                      user_id: user.id)
                end

                puts "ireporter created"