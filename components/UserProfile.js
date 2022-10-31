import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Button, Card } from "antd";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="follwings">
          팔로잉
          <br />0
        </div>,
        <div key="follwer">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>RM</Avatar>} title="Remon" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
