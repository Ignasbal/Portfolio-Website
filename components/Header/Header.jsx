"";

import { assets } from "@/assets/assets";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Header = () => {
  const sideMenuRef = useRef();

  const openSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <div>
      <nav className={styles.header}>
        <Image src={assets.logo} alt="Website Logo" className={styles.logo} />

        <div className={styles.navWrapper}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="#top">Home</Link>
            </li>
            <li>
              <Link href="#about">About me</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#work">My Work</Link>
            </li>
          </ul>
        </div>
        <div className={styles.moon_icon_and_contactLink}>
          <button>
            {" "}
            <Image
              src={assets.moon_icon}
              alt="Moon Icon"
              className={styles.moon_icon}
            />
          </button>
          <Link href="#" className={styles.contactLink}>
            {" "}
            <h1>Contact</h1>{" "}
            <Image
              src={assets.arrow_icon}
              className={styles.arrowIcon}
              alt="Arrow icon"
            />
          </Link>

          <button onClick={openSideMenu} className={styles.menuButton}>
            <Image
              src={assets.menu_black}
              alt="Menu Icon"
              className={styles.menu_icon}
            />
          </button>
        </div>

        {/*------Mobile menu------ */}

        <ul ref={sideMenuRef} className={styles.mobileMenu}>
          <div className={styles.closeIconWrapper} onClick={closeSideMenu}>
            <Image
              src={assets.close_black}
              alt="Close icon"
              className={styles.closeIcon}
            />
          </div>

          <li>
            <Link href="#top" onClick={closeSideMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={closeSideMenu}>
              About me
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={closeSideMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" onClick={closeSideMenu}>
              My Work
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
