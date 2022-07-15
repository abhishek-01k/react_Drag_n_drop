import React from 'react';
import dropdown from "../../../assets/logo/dropdown_logo.png";
import styles from "../Navbar.module.css";

const NavMenuItems = ({title}) => {
    return (
        <div className={styles.menuItemsDiv}>
            <span>{title}</span>
            <img src={dropdown} alt='Dropdown' className={styles.dropdown_img}/>
        </div>
    );
};

export default NavMenuItems;