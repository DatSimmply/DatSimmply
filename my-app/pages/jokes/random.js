import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import  getRandomJoke from "../../lib/joke";
import Button from "react-bootstrap/Button";
const Random = ({ joke }) => {
  return (
    <div>
      <Layout>
        <Card className="my-3 shadow">
          <Card.Body>
            <Card.Title>Here's your random for today</Card.Title>
            <Card.Text>{joke}</Card.Text>
            <Button href="/">Back</Button>
          </Card.Body>
        </Card>
      </Layout>
    </div>
  );
};
export const getSeverSideProps = async () => {
  const joke = await getRandomJoke();
  return {
    props: {
      joke,
    },
  };
};
export default Random;
