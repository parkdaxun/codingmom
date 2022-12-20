import { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "../../styles/material/materialIndex.module.css";
import All from "../material/all";
import Edu from "../material/educate";

export default function Index() {
  const [education, setEducation] = useState(1);

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.margin}></div>
      <div className={styles.white}>
        <div className={styles.menu}>
          <span className={styles.left} onClick={() => setEducation(1)}>
            교구
          </span>
          <span className={styles.left} onClick={() => setEducation(2)}>
            교육
          </span>
        </div>
        {education === 1 && <All />}
        {education === 2 && <Edu />}
        <Footer />
      </div>
    </div>
  );
}
