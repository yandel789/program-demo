/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:44:50
 * @LastEditTime: 2024-07-09 11:13:19
 * @LastEditors: Yandel
 * @Description:
 * @FilePath: /program-demo/src/pages/filter-grayscale/index.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import { useState } from "react";
import code from "@/assets/images/filter-grayscale-code.png";
import img from "@/assets/images/filter-grayscale.jpeg";
import styles from "./index.module.css";
import { Header } from "@/components/header";
import { useBoolean } from "ahooks";

export default function IndexPage() {
  const [css, { setFalse, setTrue }] = useBoolean(false);
  const [style, setStyle] = useState<any>({});

  const Change = () => {
    if (css) {
      setStyle({
        filter: "grayscale(100%)",
        transition: "grayscale(100%) 1s ease",
      });
      setFalse();
    } else {
      setTrue();
      setStyle({
        filter: "grayscale(0%)",
        transition: "grayscale(0%) 1s ease",
      });
    }
  };

  return (
    <div className={styles["main"]}>
      <Header title="CSS Filter Grayscale" size={23} />
      <div className={styles["content"]} onClick={() => Change()}>
        <img
          className={styles["click-img"]}
          src={img}
          style={style}
          
        />
        <img className={styles["img"]} src={code} alt="" />
      </div>
    </div>
  );
}
