import React, { useState, useEffect } from 'react';
import Layout from '@icedesign/layout';
import { Button, Drawer } from '@alifd/next';

import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Settings from './components/Settings';
import styles from './index.module.scss';

const BasicLayout = (props) => {

  /** 
   * HooK 允许你在 React 函数组件中添加 state 的 Hook 
   * [Hook规则](https://react.docschina.org/docs/hooks-rules.html)
   * useState 允许你在 React 函数组件中添加 state 的 Hook
  */ 
  const [collapse, setCollapse] = useState(false);
  const [visible, setVisible] = useState(false);

  const hasFooter = true; // 页脚是否展示
  const showSettings = false; // 是否可配置

  function onOpen() {
    setVisible(true);
  };

  function onClose (reason, e){
    console.log('onClose: ', reason, e);
    setVisible(false);
  }

  return (
    <div className={`${styles.iceDesignLayoutDark} ${styles.iceDesignLayout}`}>
      <Layout fixable={true}>
        <Layout.Header>
          <Header collapse={collapse} setCollapse={setCollapse}/>
        </Layout.Header>
        <Layout.Section>
          <Layout.Aside type={null} scrollable style={{ 'backgroundColor': '#001529'}}>
            <Aside collapse={collapse} />
          </Layout.Aside>
          <Layout.Main scrollable>
            {props.children}
            {hasFooter ? <Footer /> : null}
          </Layout.Main>
        </Layout.Section>
        <Button type="primary" onClick={onOpen}> open </Button>
        <Settings visible={visible} onClose={onClose}/>
      </Layout>
    </div>
  );
};

export default BasicLayout;