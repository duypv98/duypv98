import About from "../../components/home/About";
import styles from "./home.module.scss";

const HomePage = () => {
  return <>
    <div id="home" className={styles["snap-page-scroll-container"]}>
      <section id="about">
        <About />
      </section>
      <section className="">Page 2</section>
      <section className="">Page 3</section>
      <section className="">Page 4</section>
    </div>
  </>
}

export default HomePage;