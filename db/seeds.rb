# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# puts "creating user" 
 #user =User.create(:name :email)
# puts "creating redflag"
# redflag = Redflag.create
# puts "creating intervention"
# intervention = Intervention.createUser.create (

    puts "creating ireporter database"
    5.times do
        User.create(
        name:Faker::Internet.name, 
        email:Faker::Internet.free_email,
        password:Faker::Internet.password,
        is_admin: Faker::Boolean.boolean,
        phone_number: Faker::PhoneNumber.cell_phone
        ) 

    end 

# user = User.create(name:Faker::Internet.name, 
#     email:Faker::Internet.free_email,
#      password_digest:Faker::Internet.password,
#      is_admin: true) 


     10.times do 
        Intervention.create(
            location: "Nairobi",
            image: "https://www.pexels.com/photo/milan-13379800/",
            video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
            status: ["resolved", "rejected", "under investigation"].sample, 
            description: "Lorem ipsum and etc....", 
            user_id:rand(1..5)
        )
        end

        
        10.times do 
            Redflag.create(
                location: "Nairobi",
                image: "https://www.pexels.com/photo/milan-13379800/",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: ["resolved", "rejected", "under investigation"].sample, 
                user_id:rand(1..5),
                location:"Nairobi"
            )
            end

                puts "ireporter created"