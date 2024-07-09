/*
 * @Author: Yandel progranyan@gmail.com
 * @Date: 2024-03-12 17:30:38
 * @LastEditors: Yandel
 * @LastEditTime: 2024-07-09 11:07:26
 * @FilePath: /program-demo/src/components/header/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Image } from "antd-mobile";
import classnames from "classnames";
import React from "react";
import styles from "./index.module.less";
import headerIcon from "@/assets/images/header-icon.png";

interface IHeaderProps {
  classNames?: any;
  title?: string;
  size?: string | number;
  style?: any;
}
export function Header(props: IHeaderProps) {
  const { classNames, title = "", size = 30, style } = props;

  return (
    <div className={classnames([styles["header"], classNames])}>
      <div className={styles["icon"]}>
        <Image src={headerIcon} />
      </div>
      <p className={styles["title"]} style={{ fontSize: size, ...style }}>
        {title}
      </p>
    </div>
  );
}
