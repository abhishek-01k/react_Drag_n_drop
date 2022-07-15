import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo/navbar_Logo.svg";
import dangerLogo from "../../assets/logo/danger_logo.png";
import bellLogo from "../../assets/logo/bell_logo.png";
import NavMenuItems from "./NavMenuItems/NavMenuItems";
import {FaSearch} from 'react-icons/fa';
import {CgDanger} from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className={styles.header}>
        <div className={styles.leftHeader}>
            <button className={styles.btnDiv}>
                <img  src={logo} alt="navbar_logo" className='button_Image'/>
            </button>
            <div className={styles.logoDiv}>
                <p className={styles.logo}></p>
            </div>
            <NavMenuItems title={"Workspace"} />
            <NavMenuItems title={"Recent"} />
            <NavMenuItems title={"Starred"} />
            <NavMenuItems title={"Templates"} />
            <button className={styles.createBtn}>
                <span>Create</span>
            </button>
        </div>
        <div className='flex'> 
            <div className={styles.searchBar}>
                <input type='search' placeholder='Search'/>
                <span><FaSearch/></span>
            </div>
            <button className={styles.dangerBtn}>
                <img src={dangerLogo} alt='danger' className='button_Image'/>
            </button>
            <button className={styles.dangerBtn}>
                <img src={bellLogo} alt='bell' className='button_Image'/>
            </button>
            <span className='Avatar'>
                QK
            </span>
        </div>
    </div>
  );
};

export default Navbar;
