/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:44:50
 * @LastEditTime: 2024-07-09 11:12:40
 * @LastEditors: Yandel
 * @Description:
 * @FilePath: /program-demo/src/pages/flex-hover/index.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import styles from "./index.module.less";
import { Header } from "@/components/header";
import img from "@/assets/images/flex-hover.png";

export default function IndexPage() {

  const arr = [1, 2, 3, 4, 5];

  return (
    <div className={styles["main"]}>
      <Header title="CSS Flex Grow Hover" size={24} />
      <div className={styles["content"]}>
        {arr?.map((item) => (
          <div className={styles["item"]}>{item}</div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <img className={styles["img"]} src={img} alt="" />
      </div>
    </div>
  );
}
