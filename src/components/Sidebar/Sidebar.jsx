import React from 'react';
import styles from "./Sidebar.module.css";
import adminImg from "../../assets/images/sidebar_admin.png";
import showImg from "../../assets/images/sidebar_show.png";
import classNames from 'classnames';

const Sidebar = () => {
    return (
        <div className={styles.sidebarDiv}>
            <button className={classNames(styles.sidebarBtn,'')}>
                <img src={adminImg} alt='adminImg' className='button_Image'/>
            </button>
            <button className='mt-2'>
                <img src={showImg} alt='adminImg' className='button_Image'/>
            </button>
        </div>
    );
};

export default Sidebar;