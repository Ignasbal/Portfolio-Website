import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.profileImgWrapper}>
        <Image
          src={assets.profile_img}
          className={styles.profileImg}
          alt="Profile picture"
        />
      </div>

      <div className={styles.handIconWrapper}>
        <h3>Hi! I'm a Web Developer</h3>

        <Image
          src={assets.hand_icon}
          className={styles.handIcon}
          alt="Hand icon"
        />
      </div>

      <h1>Welcome to My Portfolio Website Demo</h1>

      <p>
        I'm a passionate and creative web developer, showcasing my work, skills,
        and experience. Explore my projects, learn more about my background, and
        feel free to get in touch. Let's create something great together!
      </p>

      <div className={styles.buttonsWrapper}>
        <Link href="#contact" className={styles.contactLink}>
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            className={styles.arrowIconWhite}
            alt="Right arrow icon"
          />{" "}
        </Link>

        <Link href="/semple_resume.pdf" download className={styles.resumeLink}>
          My resume{" "}
          <Image
            src={assets.download_icon}
            className={styles.downloadIcon}
            alt="Download icon"
          />{" "}
        </Link>
      </div>

      <div className={styles.test}></div>
    </div>
  );
};

export default Main;
