// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '模块1',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
  },

  {
    name: '模块2',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
  },

  {
    name: '模块3',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'atm',
    children: [
      { name: '监控页', path: '/dashboard/monitor', id: 'Menu_sfm7u' },
    ],
    id: 'Menu_osevu',
  },
  {
    name: '图表页',
    path: '/chart',
    icon: 'picture',
    children: [
      { name: '基础图表', path: '/chart/basic', id: 'Menu_ii7dq' },
      { name: '通用图表', path: '/chart/general', id: 'Menu_gr928' },
    ],
    id: 'Menu_db2tv',
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'calendar',
    children: [
      { name: '基础表格', path: '/table/basic', id: 'Menu_ocska' },
      { name: '通用表格', path: '/table/general', id: 'Menu_o6gpc' },
    ],
    id: 'Menu_uta8c',
  },
  { name: '留言板', 
    path: '/comment',
    icon: 'calendar',
    id: 'Menu_my2xd' 
  }
];

export { headerMenuConfig, asideMenuConfig };
