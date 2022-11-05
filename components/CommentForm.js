import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import { PropTypes } from "prop-types";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  // 댓글 달 때는 내 id도 필요하다.
  const id = useSelector((state) => state.user.me?.id);

  // 만들어놨던 useIput hook
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
    // post를 받아온 이유가 게시글 id가 있으면 그 id 아래에 댓글을 달 것이기 때문에
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          row={4}
        />
        <Button
          style={{ position: "absolute", right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.PropTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
