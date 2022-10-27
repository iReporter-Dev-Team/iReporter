import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminNavbar from "./AdminNavbar";
import User from "./User";

function UsersList({ user }) {
  const [errors, setErrors] = useState([]);
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <AdminNavbar/>
      <Logo>Active Reporters</Logo>
      <Wrapper>
        {users.map((user) => (
          <User key={user.id} user={user} onDeleteUser={handleUserDelete} />
        ))}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 40px auto;
  padding: 16px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", serif;
  font-size: 2rem;
  color: salmon;
  margin: 40px 0;
  padding-top: 20px;
  padding-left: 280px;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default UsersList;
