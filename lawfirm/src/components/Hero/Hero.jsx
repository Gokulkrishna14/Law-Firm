import styles from "./Hero.module.css";
import Image from "../ImageComponenet/Image";
import HeroImage  from "../../assets/HeroImage.png";
import Button from "../CustomButton/CustomButton";

export default function Hero(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.herotext}>
                <div>You don't have to <b>Fight them Alone.</b></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit animi, tempora officiis 
                    magnam quasi doloremque maiores dignissimos ab? Minus rem incidunt doloremque temporibus nobis odio, 
                    neque quia iste earum.
                </p>
                <div className={styles.textInput}>
                    <input type="text" placeholder="Enter your email address" />
                    <Button />
                </div>
            </div>
            <div className={styles.heroImage}>
                <Image src={HeroImage} />
            </div>
        </div>
    );
};