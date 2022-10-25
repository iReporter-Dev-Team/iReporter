User.destroy_all
Intervention.destroy_all
Redflag.destroy_all

puts "...seeding users 👨‍👩‍👧"

    10.times do 
        User.create(
            name:Faker::Internet.username, 
            email:Faker::Internet.free_email, 
            phone_number: Faker::PhoneNumber.cell_phone_in_e164,
            password_digest: Faker::Internet.password, 
            is_admin: false
        )
        end

puts '...seeding interventions 🚧'

     50.times do 
        Intervention.create(
            location: "Nairobi",
            image: "https://www.pexels.com/photo/milan-13379800/",
            video: "https://www.youtube.com/watch?v=GOISuk0pYIY", status: 
            "Under Investigation", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
            user_id: user.id
            )

puts '...seeding redflags 🚩'

    10.times do 
        Redflag.create(
            location: "Nairobi",
            image: "https://www.pexels.com/photo/milan-13379800/",
            video: "https://www.youtube.com/watch?v=GOISuk0pYIY", status: 
            "Under Investigation", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
            user_id: user.id
            )
         end

puts "Done seeding!"
