import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import Comment from '@/pages/Comment';
import NotFound from '@/pages/NotFound';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/comment', component: Comment },
      { path: '/', redirect: '/dashboard' },
      { component: NotFound },
    ],
  },
];

export default routerConfig;
