import React, { useState, useEffect } from "react";
import Layout from "@icedesign/layout";
import { Button } from "@alifd/next";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import styles from "./index.module.scss";

import ThemeContext from "@/theme-context";

const themes = {
  light: {
    classnames: "btn btn-primary",
    bgColor: "#3080FE",
    color: "#000"
  },
  dark: {
    classnames: "btn btn-light",
    bgColor: "#222222",
    color: "#fff"
  }
};

const BasicLayout = props => {
  /**
   * HooK 允许你在 React 函数组件中添加 state 的 Hook
   * [Hook规则](https://react.docschina.org/docs/hooks-rules.html)
   * useState 允许你在 React 函数组件中添加 state 的 Hook
   */

  const [collapse, setCollapse] = useState(false);
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  const hasFooter = true; // 页脚是否展示
  const showSettings = false; // 是否可配置

  function onOpen() {
    setVisible(true);
  }

  function onClose(reason, e) {
    console.log("onClose: ", reason, e);
    setVisible(false);
  }

  function changeTheme(theme) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <div
        className={`${styles.iceDesignLayoutDark} ${styles.iceDesignLayout}`}
      >
        <Layout fixable={true}>
          <Layout.Header>
            <Header collapse={collapse} setCollapse={setCollapse} />
          </Layout.Header>
          <Layout.Section>
            <Layout.Aside
              type={null}
              scrollable
              style={{ backgroundColor: themes[theme].bgColor }}
            >
              <Aside collapse={collapse} />
            </Layout.Aside>
            <Layout.Main scrollable>
              {props.children}
              {hasFooter ? <Footer /> : null}
            </Layout.Main>
          </Layout.Section>
          <Button type="primary" className={styles.controlThemeBtn} onClick={onOpen}>
            open
          </Button>
          <Settings
            visible={visible}
            onClose={onClose}
            changeTheme={changeTheme}
          />
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
};

export default BasicLayout;
