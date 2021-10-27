import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostIds, getPostById } from "../../lib/post";

const Post = ({ post }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button href="/post">Back</Button>
        </Card.Body>
      </Card>
    </Layout>
  );
};
//Lay du lieu kieu tinh, nhung du lieu tinh nao thi con phu thuoc vao params
export const getStaticPaths = async () => {
  const paths = await getPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
};

export default Post;