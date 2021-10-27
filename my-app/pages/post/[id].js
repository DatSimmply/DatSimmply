import Button from "react-bootstrap/Button";
import React from "react";
import { Card, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostIds, getPostById } from "../../lib/post";
import { useRouter } from "next/dist/client/router";
const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback){
    return(
      <Spinner animation="border" role='status' variant='dark'>
        <span className='sr-only'>LOADING </span>
      </Spinner>
    )
  }

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
  const paths = await getPostIds(5);
  console.log(paths);
  return {
    paths,
    fallback: true,
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
