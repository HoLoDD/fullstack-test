import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../routes';
import styles from './navbar.module.scss'

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to={RouteNames.USERS}
          className={({ isActive }) => {
            return styles.nav_item + " "+(isActive ? styles.active : "");
          }}>
          USERS
        </NavLink>,
        <div className={styles.nav_line} ></div>
        <NavLink
          to={RouteNames.GROUPS}
          className={({ isActive }) => {
            return styles.nav_item + " "+(isActive ? styles.active : "");
          }}
        >
          GROUPS
        </NavLink>,
      </nav>
      <div className={styles.line}></div>
    </>
  )
}

export default NavBar;