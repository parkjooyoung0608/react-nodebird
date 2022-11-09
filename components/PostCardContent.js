import React from "react";
import { Link } from "next/link";
import { PropTypes } from "prop-types";

const PostCardContent = ({ postData }) => {
  const hashtag = postData.split(/(#[^\s#]+)/g);

  return <div>{hashtag}</div>;
};

PostCardContent.PropTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;
