import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollwList";

const Profile = () => {
  const followerList = [
    { nickname: "Remon" },
    { nickname: "제로초" },
    { nickname: "노드버드오피셜" },
  ];
  const followingList = [
    { nickname: "Remon" },
    { nickname: "제로초" },
    { nickname: "노드버드오피셜" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowList header="팔로우 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
