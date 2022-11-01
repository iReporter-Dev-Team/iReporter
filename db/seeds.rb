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

puts '...seeding interventions 🚧'

        Intervention.create!(
                headline: "Street Light Fallen onto Kenyatta Avenue",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -1.2891362,
                longitude: 36.8209288,
                image: "https://images.unsplash.com/photo-1590719550920-7543bd5657a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Driving across 6th street is a nightmare! Local authorities should tackle the potholes and puddle issues that are making the road unusable.", 
            user_id:rand(1..8))
        Intervention.create!(
                headline: "Street Light Fallen onto Kenyatta Avenue",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -1.2891362,
                longitude: 36.8209288,
                image: "https://images.unsplash.com/photo-1590719550920-7543bd5657a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Driving across 6th street is a nightmare! Local authorities should tackle the potholes and puddle issues that are making the road unusable.", 
                user_id:rand(1..8))    
        Intervention.create!(
                headline: "Street Light Fallen onto Kenyatta Avenue",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -1.2891362,
                longitude: 36.8209288,
                image: "https://images.unsplash.com/photo-1590719550920-7543bd5657a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Driving across 6th street is a nightmare! Local authorities should tackle the potholes and puddle issues that are making the road unusable.", 
                user_id:rand(1..8))
        Intervention.create!(
                headline: "Street Light Fallen onto Kenyatta Avenue",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -1.2891362,
                longitude: 36.8209288,
                image: "https://images.unsplash.com/photo-1590719550920-7543bd5657a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Driving across 6th street is a nightmare! Local authorities should tackle the potholes and puddle issues that are making the road unusable.", 
                user_id:rand(1..8))
        Intervention.create!(
                headline: "Street Light Fallen onto Kenyatta Avenue",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -1.2891362,
                longitude: 36.8209288,
                image: "https://images.unsplash.com/photo-1590719550920-7543bd5657a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Driving across 6th street is a nightmare! Local authorities should tackle the potholes and puddle issues that are making the road unusable.", 
                            user_id:rand(1..8))
        Intervention.create!(
                headline: "Street Light Fallen onto Kenyatta Avenue",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -1.2891362,
                longitude: 36.8209288,
                image: "https://images.unsplash.com/photo-1590719550920-7543bd5657a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Driving across 6th street is a nightmare! Local authorities should tackle the potholes and puddle issues that are making the road unusable.", 
                user_id:rand(1..8)

puts '...seeding redflags 🚩'

        Redflag.create!(
            headline: "Motorist bribed traffic police outside KICC",
            location: "Nairobi",
            address: "Nairobi", 
            latitude: -0.099518,
            longitude: 34.757851,
            image: "https://images.unsplash.com/photo-1544449566-dee13645ade8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
            status: "Under Investigation", 
            description: "Witnessed a motorist bribe a traffic police officer just outside KICC on parliament road. Incident took place at around 2PM 30/10/2022.", 
            user_id:rand(1..8))

            Redflag.create!(
                headline: "Motorist bribed traffic police outside KICC",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -0.099518,
                longitude: 34.757851,
                image: "https://images.unsplash.com/photo-1544449566-dee13645ade8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Witnessed a motorist bribe a traffic police officer just outside KICC on parliament road. Incident took place at around 2PM 30/10/2022.", 
                user_id:rand(1..8))

            Redflag.create!(
                    headline: "Motorist bribed traffic police outside KICC",
                    location: "Nairobi", 
                    address: "Nairobi",
                    latitude: -0.099518,
                    longitude: 34.757851,
                    image: "https://images.unsplash.com/photo-1544449566-dee13645ade8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
                    video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                    status: "Under Investigation", 
                    description: "Witnessed a motorist bribe a traffic police officer just outside KICC on parliament road. Incident took place at around 2PM 30/10/2022.", 
                    user_id:rand(1..8))

            Redflag.create!(
                headline: "Motorist bribed traffic police outside KICC",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -0.099518,
                longitude: 34.757851,
                image: "https://images.unsplash.com/photo-1544449566-dee13645ade8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Witnessed a motorist bribe a traffic police officer just outside KICC on parliament road. Incident took place at around 2PM 30/10/2022.", 
                user_id:rand(1..8))

            Redflag.create!(
                headline: "Motorist bribed traffic police outside KICC",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -0.099518,
                longitude: 34.757851,
                image: "https://images.unsplash.com/photo-1544449566-dee13645ade8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Witnessed a motorist bribe a traffic police officer just outside KICC on parliament road. Incident took place at around 2PM 30/10/2022.", 
                user_id:rand(1..8))

            Redflag.create!(
                headline: "Motorist bribed traffic police outside KICC",
                location: "Nairobi", 
                address: "Nairobi",
                latitude: -0.099518,
                longitude: 34.757851,
                image: "https://images.unsplash.com/photo-1544449566-dee13645ade8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
                video: "https://www.youtube.com/watch?v=GOISuk0pYIY", 
                status: "Under Investigation", 
                description: "Witnessed a motorist bribe a traffic police officer just outside KICC on parliament road. Incident took place at around 2PM 30/10/2022.", 
                user_id:rand(1..8))


puts "Done seeding!"
