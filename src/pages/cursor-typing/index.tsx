/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:44:50
 * @LastEditTime: 2024-07-09 11:13:48
 * @LastEditors: Yandel
 * @Description:
 * @FilePath: /program-demo/src/pages/cursor-typing/index.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import { useState } from "react";
import code from "@/assets/images/typing.png";
import styles from "./index.module.less";
import { Header } from "@/components/header";
import classNames from "classnames";

export default function IndexPage() {
  const [style, setStyle] = useState(false);

  const onChange = () => {
    setStyle(true);
  };

  return (
    <div className={styles["main"]} onClick={() => onChange()}>
      <Header title="CSS 模拟光标输入" size={23} />
      <div className={styles["content"]}>
        <p className={classNames(styles["text"], style && styles["addClass"])}>
          ANALOG CURSOR TYPING!
        </p>
        <img className={styles["img"]} src={code} alt="" />
      </div>
    </div>
  );
}
