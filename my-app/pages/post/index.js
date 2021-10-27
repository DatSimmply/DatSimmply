import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";

const Posts = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card>
      ))}
    </Layout>
  );
};

//Get static data from backend /db /api

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts
    },
  };
};

export default Posts;
