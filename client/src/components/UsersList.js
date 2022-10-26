import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import User from "./User";
import "../styles/SearchBar.css";

function UsersList({ user }) {
  const [errors, setErrors] = useState([]);
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => setErrors(err.errors));
  }, []);

  function handleUserDelete(deletedUser) {
    const updatedUsersList = users.filter((user) => user.id !== deletedUser.id);
    setUsers(updatedUsersList);
  }

  //SEARCH USER
  //============
  const usersToDisplay = users.filter((user) =>
    user.name.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Logo>Active Reporters</Logo>

      {/* SEARCH INPUT */}
      <div class="search-container">
        <form action="">
          <input
            type="text"
            name="userSearch"
            value={userSearch}
            placeholder="Search Reporter's Name"
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </form>
      </div>

      <Wrapper>
        {usersToDisplay.map((user) => (
          <User key={user.id} user={user} onDeleteUser={handleUserDelete} />
        ))}
      </Wrapper>
      <Footer />
    </>
  );
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  max-width: 900px;
  margin: 40px auto;
  padding-bottom: 120px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", serif;
  font-size: 2.5rem;
  color: salmon;
  margin: 20px 0;
  padding-top: 80px;
  padding-left: 540px;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default UsersList;
