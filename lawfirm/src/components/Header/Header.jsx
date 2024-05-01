import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { navbarElements } from "../../StaticData/StaticData"
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Header.module.css";

export default function Header(){

    const customStyle = {
        color: "white",
        backgroundColor: "black",
        fontSize: "16px",
        border: "1px solid white",
        width : "172px",
        height : "47px",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
    };

    return (
        <div className={styles.header}>
            <Logo />
            <Navbar elements={navbarElements} />
            <CustomButton customStyle={customStyle} placeholder="Contact Now" />
        </div>
    )
}