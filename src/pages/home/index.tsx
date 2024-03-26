import { useEffect, useRef } from "react";
import styles from "./home.module.scss";

const HomePage = () => {
    return <>
    <div className={styles["snap-page-scroll-container"]}>
      <section className="">Page 1</section>
      <section className="">Page 2</section>
      <section className="">Page 3</section>
      <section className="">Page 4</section>
    </div>
  </>
}

export default HomePage;