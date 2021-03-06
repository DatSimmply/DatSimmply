import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Body className="my-3 m-2 shadow">
            <Card.Title>
              {post.id}. {post.title}
            </Card.Title>
            <Card.Text> - {post.body}</Card.Text>
            <Link href={`/post/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

//Get static data from backend /db /api

export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
