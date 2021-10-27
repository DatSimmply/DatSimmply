import Head from "next/head";
import NavbarMenu from "../components/NavbarMenu";
const Layout = ({ children }) => (
  <div>
    <Head>
      <title>My Next App</title>
    </Head>

    <NavbarMenu />

    <main>{children}</main>
  </div>
);
export default Layout;
