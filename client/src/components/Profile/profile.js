// import React, { useState } from "react";
// import Footer from "../Footer";
// import NavBar from "../Navbar";

// function Profile() {
//   const [location, setLocation] = useState("");
//   const [mail, setMail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // fetch response
//     fetch("/raiseissue", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application",
//       },
//       body: JSON.stringify({ location, mail, phone }),
//     }).then((r) => {
//       r.json();
//     });
//   };

//   return (
//     <>
//       <NavBar />

//       <div>
//         {redflags.map((redflag) => (
//           <Card key={redflag}>
//             <h2>{title}</h2>
//             <p>{description}</p>
//           </Card>
//         ))}
//       </div>

//       <div>
//         {interventions.map((intervention) => (
//           <Card key={intervention}>
//             <h2>{title}</h2>
//             <p>{description}</p>
//           </Card>
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Profile;
