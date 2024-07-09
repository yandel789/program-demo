/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:30:08
 * @LastEditTime: 2024-07-09 10:38:51
 * @LastEditors: Yandel
 * @Description: 
 * @FilePath: /program-demo/src/pages/index.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import styles from './index.module.less';
import { ImgBg } from '@/components/background-img';

export default function IndexPage() {

  return (
    <div className={styles.app}>
      <ImgBg />
    </div>
  );
}
