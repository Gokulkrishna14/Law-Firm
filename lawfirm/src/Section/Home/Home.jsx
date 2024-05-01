import Header from "../../components/Header/Header";
import Hero  from "../../components/Hero/Hero";
import styles from "./Home.module.css";

export default function Home(){
    return (
        <div className={styles.section}>
            <Header />
            <Hero />
        </div>
    );
}