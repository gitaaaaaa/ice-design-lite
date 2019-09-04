import React from 'react';
import { Balloon, Icon, Nav, Button } from '@alifd/next';
import IceImg from '@icedesign/img';
import { Link } from 'react-router-dom';
import { headerMenuConfig } from '@/config/menu.js';
import Logo from '../Logo';

import styles from './index.module.scss';

export default function Header(props) {
  const {className, style, collapse, setCollapse } = props;

  return (
    <div className={`${styles.iceDesignLayoutHeader} ${className}`} style={{ ...style }}>
      <div className={styles.iceDesignLayoutHeaderLogo}>
        <Button type="primary" className={styles.iceDesignLayoutAsideBtn} onClick={()=>setCollapse(!collapse)}>
          <Icon type={collapse ? 'arrow-right':'arrow-left'} />
        </Button>
        <Logo />
      </div>
      <div className={styles.iceDesignLayoutHeaderMenu}>
        {/* Header 菜单项 begin */}
        {headerMenuConfig && headerMenuConfig.length > 0 ? (
          <Nav type="normal" direction="hoz" selectedKeys={[]}>
            {headerMenuConfig.map((nav, idx) => {
              const linkProps = {};
              if (nav.newWindow) {
                linkProps.href = nav.path;
                linkProps.target = '_blank';
              } else if (nav.external) {
                linkProps.href = nav.path;
              } else {
                linkProps.to = nav.path;
              }
              return (
                <Nav.Item key={idx}>
                  {linkProps.to ? (
                    <Link {...linkProps}>
                      nav.name
                    </Link>
                  ) : (
                      <a {...linkProps}>
                        nav.name
                      </a>
                    )}
                </Nav.Item>
              );
            })}
            <Nav.Item icon="help" label="帮助文档">
              <a href="https://ice.work/component/nav" target="_blank"></a>
            </Nav.Item>
          </Nav>
        ) : null}
        {/* Header 菜单项 end */}

        {/* Header 右侧内容块 */}
        <Balloon
          trigger={
            <div className={styles.iceDesignHeaderUserpannel}>
              <IceImg
                height={40}
                width={40}
                src="https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png"
                className={styles.userAvatar}
              />
              <div className={styles.userProfile}>
                <span className={styles.userName}>admin</span>
                <br />
                <span className={styles.userDepartment}>技术部</span>
              </div>
              <Icon
                type="arrow-down"
                size="xxs"
                className={styles.iconDown}
              />
            </div>
          }
          closable={false}
          className={styles.userProfileMenu}
        >
          <ul>
            <li className={styles.userProfileMenuItem}>
              <Link to="/setting">
                <Icon type="repair" size="small" />
                设置
              </Link>
            </li>
            <li className={styles.userProfileMenuItem}>
              <Link to="/login">
                <Icon type="compass" size="small" />
                退出
              </Link>
            </li>
          </ul>
        </Balloon>
      </div>

    </div>
  );
}
