import { assets } from "@/assets/assets";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
        <Link href="#" className={styles.contactLink}>
          {" "}
          <h1>Contact</h1>{" "}
          <Image
            src={assets.arrow_icon}
            className={styles.arrowIcon}
            alt="Arrow icon"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
