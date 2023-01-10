import styles from "../styles/Home.module.css";
import { Layout } from "../src/components/Layout/Layout";
import { Header } from "../src/components/Header/Header";

export default function Home() {
  return (
      <div>
        <Header />
        <Layout />
      </div>
  );
}
