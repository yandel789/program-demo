/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:44:50
 * @LastEditTime: 2024-07-09 11:15:33
 * @LastEditors: Yandel
 * @Description:
 * @FilePath: /program-demo/src/pages/img-in-text/index.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import { useState } from "react";
import code from "@/assets/images/code1.png";
import styles from "./index.module.css";
import { Header } from "@/components/header";

export default function IndexPage() {
  const [style, setStyle] = useState({});

  const onChange = () => {
    setStyle({
      "-webkit-background-clip": "text",
      color: "transparent",
      transition: 'color 1s ease, -webkit-background-clip 1s ease'
    });
  };

  return (
    <div className={styles["main"]}>
      <Header title="CSS Background Clip Text" size={23} />
      <div className={styles["content"]}>
        <p className={styles["text"]} style={style} onClick={() => onChange()}>
          HELLO PROGRAM
        </p>
        <img className={styles['img']} src={code} alt="" />
      </div>
    </div>
  );
}
