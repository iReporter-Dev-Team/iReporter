import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Error } from "../styles";

function Users({ user }) {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  function handleDelete() {
    setIsLoading(true);
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        console.log(r);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <Logo>Active Reporters</Logo>
      {users.map((user) => (
        <Card key={user.id}>
          <UserName>{user.name}</UserName>
          <Email>{user.email}</Email>
          <PhoneNumber>{user.phone_number}</PhoneNumber>
          <ActionButtonMakeAdmin>
            {user.is_admin ? "Is Admin" : "Make Admin"}
          </ActionButtonMakeAdmin>
          <ActionButtonDelete onClick={handleDelete}>
            {isLoading ? "Deleting..." : "Delete User"}
          </ActionButtonDelete>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </Card>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 16px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", serif;
  font-size: 2rem;
  color: salmon;
  margin: 20px 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Card = styled.div`
  border-radius: 12px;
  background-color: papayawhip;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  padding: 16px;
  margin-bottom: 16px;
`;

const UserName = styled.h2`
  font-weight: 300;
`;

const Email = styled.h4`
  font-weight: 300;
`;

const PhoneNumber = styled.h4`
  font-weight: 300;
`;

const ActionButtonMakeAdmin = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: #1577c0;
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  border-radius: 6px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const ActionButtonDelete = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: firebrick;
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  border-radius: 6px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export default Users;
