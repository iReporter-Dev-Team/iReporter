User.destroy_all
Intervention.destroy_all
Redflag.destroy_all

puts "...seeding users 👨‍👩‍👧"

     user = User.create!(
     name:"Said Hussein",  
     email:"said@gmail.com",
     phone_number:"1111111111",
     password:"12345said",
     is_admin: true) 

     user = User.create!(
     name:"Ken Muyesu",  
     email:"ken@gmail.com",
     phone_number:"1111111111",
     password:"12345ken",
     is_admin: true) 

     user = User.create!(
     name:"Damaris Nduku",  
     email:"damaris@gmail.com",
     phone_number:"1111111111",
     password:"12345damaris",
     is_admin: true) 

     user = User.create!(
     name:"Kelvin Malongo",  
     email:"kelvin@gmail.com",
     phone_number:"1111111111",
     password:"12345kelvin",
     is_admin: true) 

     user = User.create!(
     name:"Gladys Mungai",  
     email:"gladys@gmail.com",
     phone_number:"1111111111",
     password:"12345gladys",
     is_admin: true) 

     user = User.create!(
     name:"Amos Sifuna",  
     email:"amos@gmail.com",
     phone_number:"1111111111",
     password:"12345amos",
     is_admin: true) 

puts '...seeding interventions 🚧'

     8.times do 
        Intervention.create!(location: "Nairobi",title: "Poor Road",
            image: "https://images.unsplash.com/photo-1590719550920-7543bd5657a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            video: "https://www.youtube.com/watch?v=GOISuk0pYIY", status: 
            "Under Investigation", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
            user_id:rand(1..6))
     end

puts '...seeding redflags 🚩'

    8.times do 
        Redflag.create!(location: "Nairobi",title: "Bribe",
            image: "https://images.unsplash.com/photo-1544449566-dee13645ade8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            video: "https://www.youtube.com/watch?v=GOISuk0pYIY", status: 
            "Under Investigation", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
            user_id:rand(1..6))
    end

puts "Done seeding!"