/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:48:49
 * @LastEditTime: 2024-07-09 16:18:44
 * @LastEditors: Yandel
 * @Description: 
 * @FilePath: /program-demo/src/pages/layout.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import { ImgBg } from '@/components/background-img';
import { Outlet } from 'ice';
import React from 'react';

const BasicLayout: React.FC<any> = (props) => {

  return (
    <div>
      <Outlet />
      <ImgBg />
    </div>
  );
};

export default BasicLayout;
