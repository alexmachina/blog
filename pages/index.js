import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Banner from "../components/banner";
import Alex from "../components/alex";

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <Alex />
    </div>
  );
}
