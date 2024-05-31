import { Button, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/thunk";
import { useForm } from "antd/es/form/Form";

export const CreatePost = ({ posts }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [form] = useForm();
  const createPostApiStatus = useSelector(
    (state) => state.post.createApiStatus
  );

  const onSubmitForm = (postInfo) => {
    postInfo.imageUrls = [postInfo.image];
    delete postInfo.image;
    dispatch(createPost(postInfo));
  };

  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (createPostApiStatus === "success") {
      form.resetFields();
      setOpen(false);
    }
  }, [createPostApiStatus]);

  // [success] , [success]
  return (
    <>
      <div>
        <button className="create" onClick={openModal}>
          <span className="material-icons">add</span>
        </button>
        <b>{posts} posts</b>
      </div>

      <Modal
        open={open}
        footer={null}
        closable
        onCancel={() => {
          console.log("clicked on close");
          setOpen(false);
        }}
      >
        <Form onFinish={onSubmitForm} form={form}>
          <Form.Item
            label="Title"
            rules={[
              { required: true, message: "Title of the post is required" },
            ]}
            name="title"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            rules={[
              { required: true, message: "Content of the post is required" },
            ]}
            name="content"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Image Url"
            rules={[{ type: "url", message: "Image url is invalid" }]}
            name="image"
          >
            <Input />
          </Form.Item>
          <Button
            htmlType="submit"
            loading={createPostApiStatus === "pending"}
            type="primary"
            block
          >
            CREATE POST
          </Button>
        </Form>
      </Modal>
    </>
  );
};
