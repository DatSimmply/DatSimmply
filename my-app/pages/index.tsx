import Layout from "../components/Layout";
import Link from "next/link";
import Button from "react-bootstrap/Button";
export default function Home() {
  return (
    <div>
      <Layout>
        <h1>My Next App</h1>
        <p>This is my Next.JS App</p>
        <p>
          <Button variant="primary"  href="/post">Posts</Button>
        </p>
      </Layout>
    </div>
  );
}
