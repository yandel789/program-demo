/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:44:50
 * @LastEditTime: 2024-07-09 11:14:15
 * @LastEditors: Yandel
 * @Description:
 * @FilePath: /program-demo/src/pages/filter-drop-shadow/index.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import styles from "./index.module.less";
import { Header } from "@/components/header";
import code from "@/assets/images/filter-drop-code.png";
import img from "@/assets/images/filter-drop-shadow.png";

export default function IndexPage() {

  return (
    <div className={styles["main"]}>
      <Header title="Filter Drop Shadow" size={16} />
      <div className={styles["content"]}>
        <div>
          <p>Box</p>
          <img className={styles['box']} src={img} />
          </div>
        <div><p>Drop</p><img className={styles['drop']} src={img} /></div>
      </div>
      <div style={{ textAlign: "center" }}><img className={styles["img"]} src={code} alt="" /></div>
      
    </div>
  );
}
