import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <h4>Introduction</h4>
      <h2>About</h2>
      <div className={styles.aboutContent}>
        <div className={styles.column1}>
          <Image
            src={assets.user_image}
            alt="User image"
            className={styles.userImage}
          />
        </div>
        <div className={styles.column2}>
          <p>
            I'm a passionate and creative web developer, showcasing my work,
            skills, and experience. Explore my projects, learn more about my
            background, and feel free to get in touch. Let's create something
            great together!
          </p>
          <ul className={styles.infoList}>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li key={index}>
                <Image src={icon} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>

          <h3 className={styles.toolText}>Web Tools I Use</h3>

          <ul className={styles.toolList}>
            {toolsData.map((tool, index) => (
              <li key={index}>
                <Image src={tool} alt="Web Tools" className={styles.tool} />
              </li>
            ))}
          </ul>
          <h4></h4>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
