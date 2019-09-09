import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Icon, Nav } from "@alifd/next";
import { asideMenuConfig } from "@/config/menu.js";
import Logo from "../Logo";
import styles from "./index.module.scss";
import ThemeContext from "@/theme-context";

const SubNav = Nav.SubNav;
const NavItem = Nav.Item;

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      return (
        <SubNav
          key={index}
          icon={item.icon ? item.icon : null}
          label={
            <span className={styles.iceMenuCollapseHide}>{item.name}</span>
          }
        >
          {childrenItems}
        </SubNav>
      );
    }
    return null;
  }
  return (
    <NavItem key={item.path}>
      <Link to={item.path}>{item.name}</Link>
    </NavItem>
  );
}

/**
 * 获取菜单项数据
 */
function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => {
      return getSubMenuOrItem(item, index);
    });
}
/**
 * 获取默认展开菜单项
 */
function getDefaultOpenKeys(location = {}) {
  const { pathname } = location;
  const menus = getNavMenuItems(asideMenuConfig);

  let openKeys = [];
  if (Array.isArray(menus)) {
    asideMenuConfig.forEach((item, index) => {
      if (pathname.startsWith(item.path)) {
        openKeys = [`${index}`];
      }
    });
  }

  return openKeys;
}

const Aside = withRouter(props => {
  const defaultOpenKeys = getDefaultOpenKeys(props.location);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  /**
   * 响应式通过抽屉形式切换菜单
   */
  function toggleMenu() {
    setOpenDrawer(!openDrawer);
  }

  /**
   * 左侧菜单收缩切换
   */
  function onMenuClick() {
    toggleMenu();
  }

  useEffect(() => {
    //console.log(collapse);
    // if (collapse) {
    //   cacheOpenKeys.current = openKeys;
    //   setMode('popup');
    //   setOpenKeys([]);
    // } else {
    //   setMode('inline');
    //   setOpenKeys(cacheOpenKeys.current);
    // }
  }, [collapse]);

  /**
   * 当前展开的菜单项
   */
  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  const {
    location: { pathname },
    collapse
  } = props;

  const openDrawerClassName = openDrawer ? styles.openDrawer : "";

  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <div
            className={`${styles.iceDesignLayoutAside} ${styles.iceDesignLiteAside} ${openDrawerClassName}`}
          >
            <Nav
              style={{ width: collapse ? 60 : 240 }}
              direction="ver"
              activeDirection={null}
              mode={collapse ? "popup" : "inline"}
              triggerType={collapse ? "hover" : "click"}
              selectedKeys={[pathname]}
              openKeys={openKeys}
              defaultSelectedKeys={[pathname]}
              onOpen={onOpenChange}
              onClick={onMenuClick}
              iconOnly={collapse}
              hasArrow={false}
              hasTooltip={true}
              openMode="single"
            >
              {getNavMenuItems(asideMenuConfig)}
            </Nav>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
});

export default Aside;
