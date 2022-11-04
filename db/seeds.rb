puts "...seeding users 👨‍👩‍👧"

        u1 = User.create!(
        name:"Said Hussein",  
        email:"said@gmail.com",
        phone_number:"1111111111",
        password:"12345said",
        is_admin: true) 

        u2 = User.create!(
        name:"Ken Muyesu",  
        email:"ken@gmail.com",
        phone_number:"1111111111",
        password:"12345ken",
        is_admin: true) 

        u3 = User.create!(
        name:"Damaris Nduku",  
        email:"damaris@gmail.com",
        phone_number:"1111111111",
        password:"12345damaris",
        is_admin: true) 

        u4 = User.create!(
        name:"Kelvin Malongo",  
        email:"kelvin@gmail.com",
        phone_number:"1111111111",
        password:"12345kelvin",
        is_admin: true) 

        u5 = User.create!(
        name:"Gladys Mungai",  
        email:"gladys@gmail.com",
        phone_number:"1111111111",
        password:"12345gladys",
        is_admin: true) 

        u6 = User.create!(
        name:"Amos Sifuna",  
        email:"amos@gmail.com",
        phone_number:"1111111111",
        password:"12345amos",
        is_admin: true) 
        
puts "Done seeding!"
