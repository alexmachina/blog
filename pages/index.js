import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Banner from "../components/banner";
import Alex from "../components/alex";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <Nav />
      </div>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <Alex />
      </div>
    </div>
  );
}
