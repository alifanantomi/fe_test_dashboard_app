import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import LoginView from '@/views/LoginView.vue';
import store from '@/store';
import CourseView from '@/views/CourseView.vue';
import StudentView from '@/views/StudentView.vue';
import PaymentView from '@/views/PaymentView.vue';
import ReportView from '@/views/ReportView.vue';
import SettingView from '@/views/SettingsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/course',
    name: 'DashboardCourse',
    component: CourseView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/student',
    name: 'DashboardStudent',
    component: StudentView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/payment',
    name: 'DashboardPayment',
    component: PaymentView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/report',
    name: 'DashboardReport',
    component: ReportView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/setting',
    name: 'DashboardSetting',
    component: SettingView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = store.state.auth;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.name === 'Login' && isAuthenticated) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
