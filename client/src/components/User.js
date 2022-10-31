import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { BsPhoneVibrate } from "react-icons/bs";
import Error from "../styles/Error";

function User({ user, onDeleteUser }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("password");
  const [isAdminButton, setIsAdminButton] = useState(false);
  const navigate = useNavigate();

  function handleUserDelete() {
    setIsLoading(true);
    fetch(`/users/${user.id}`, { method: "DELETE" })
      .then((res) => {
        res.json();
        setIsLoading(false);
      })
      .then(() => onDeleteUser(user))
      .catch((err) => console.error(err));
  }

  function handleAdminState() {
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_admin: isAdmin,
        password,
      }),
    }).then((r) => {
      setIsAdmin((isAdmin) => !isAdmin);
      setPassword(password);
      if (r.ok) {
        navigate("/users");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setIsAdminButton((isAdminButton) => !isAdminButton);
  }

  return (
    <Card key={user.id}>
      <UserName>
        <CiFaceSmile style={{ fontSize: "60px" }} /> {user.name}
      </UserName>
      <Email>
        <MdEmail /> : {user.email}
      </Email>
      <PhoneNumber>
        <BsPhoneVibrate /> : {user.phone_number}
      </PhoneNumber>
      <ActionButtonMakeAdmin onClick={handleAdminState}>
        {user.is_admin == isAdminButton ? "Make Admin" : "Is Admin"}
      </ActionButtonMakeAdmin>
      <ActionButtonDelete onClick={handleUserDelete}>
        {isLoading ? "Deleting..." : "Delete User"}
      </ActionButtonDelete>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 12px;
  background-color: papayawhip;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  padding: 16px;
  margin-bottom: 16px;
`;

const UserName = styled.h2`
  font-size: 36px;
  font-weight: 200;
  color: teal;
`;

const Email = styled.h4`
  font-size: 24px;
  font-weight: 200;
  color: darkblue;
  padding-left: 20px;
  padding-top: 20px;
`;

const PhoneNumber = styled.h4`
  font-size: 24px;
  font-weight: 200;
  color: black;
  padding-left: 20px;
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
  i &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export default User;
