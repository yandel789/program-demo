/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:44:50
 * @LastEditTime: 2024-07-09 16:38:44
 * @LastEditors: Yandel
 * @Description:
 * @FilePath: /program-demo/src/pages/3d-wave/index.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import styles from "./index.module.less";
import { Header } from "@/components/header";
import img from "@/assets/images/flex-hover.png";
import img1 from "@/assets/images/animation/01.png";
import img2 from "@/assets/images/animation/02.png";
import img3 from "@/assets/images/animation/03.png";
import img4 from "@/assets/images/animation/04.png";
import img5 from "@/assets/images/animation/05.png";
import img6 from "@/assets/images/animation/06.png";
import img7 from "@/assets/images/animation/07.png";
import img8 from "@/assets/images/animation/08.png";
import img9 from "@/assets/images/animation/09.png";
import img10 from "@/assets/images/animation/10.png";

export default function IndexPage() {
  const arr = [img2, img3, img1, img4, img10, img9, img5, img6,img8, img7];

  return (
    <div className={styles["main"]}>
      <Header title="CSS 3D Wave" size={35} />
      <div className={styles["wrapper"]}>
        <div className={styles["items"]}>
          {arr?.map((item) => (
            <div
              className={styles["item"]}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
      </div>
      {/* <div style={{ textAlign: "center" }}>
        <img className={styles["img"]} src={img} alt="" />
      </div> */}
    </div>
  );
}
