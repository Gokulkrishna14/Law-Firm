import styles from "./Navbar.module.css";
import { useState  } from "react";

export default function Navbar({ elements }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className={styles.navbar}>
            {elements.map((ele) => (
                <div
                    key={ele}
                    className={styles.element}
                    onClick={() => handleItemClick(ele)}
                >
                    {ele}
                </div>
            ))}
        </div>
    );
}
