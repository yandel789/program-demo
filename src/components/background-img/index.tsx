/*
 * @Author: Yandel progranyan@gmail.com
 * @Date: 2024-03-12 17:30:38
 * @LastEditors: Yandel
 * @LastEditTime: 2024-07-09 10:56:14
 * @FilePath: /program-demo/src/components/background-img/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DotLoading, InfiniteScroll } from "antd-mobile";
import classnames from "classnames";
import React, { useMemo } from "react";
import styles from "./index.module.less";
import bg from "@/assets/images/bg.png";
console.log("🚀 ~ bg:", bg);

interface IHeaderProps {
  classNames?: any;
  url?: any;
}


export function ImgBg(props: IHeaderProps) {
  const { classNames, url } = props;

  const bgUrl = useMemo(() => {
    if (url) {
      return url;
    }
    return bg;
  }, [url]);

  return (
    <div className={styles['main']}>
      <div
      className={classnames([styles["bg-img"], classNames])}
      style={{ background: `url(${bgUrl})`, backgroundSize: "cover" }}
    ></div>
    </div>
  );
}
