import { Home } from '../components/Home'
import { Analytics } from '../components/pages-components/Analytics'
import { Dashboard } from '../components/pages-components/Dashboard'
import { Help } from '../components/pages-components/Help'
import { Instructions } from '../components/pages-components/Instructions'
import { Logs } from '../components/pages-components/Logs'
import { Reports } from '../components/pages-components/Reports'
import { Settings } from '../components/pages-components/Settings'
import pages from '../pages.json'

export const navItems = [
  {
    title: 'Home',
    to: '/',
    component: Home,
    children: [],
  },
  {
    title: 'Instructions',
    to: '/instructions',
    component: Instructions,
    children: [],
  },
  {
    title: 'Analytics',
    to: '/analytics',
    component: Analytics,
    children: pages.subcategories.filter(cat => cat.category === 'Analytics'),
  },
  {
    title: 'Dashboard',
    to: '/dashboard',
    component: Dashboard,
    children: pages.subcategories.filter(cat => cat.category === 'Dashboard'),
  },
  {
    title: 'Settings',
    to: '/settings',
    component: Settings,
    children: pages.subcategories.filter(cat => cat.category === 'Settings'),
  },
  {
    title: 'Help',
    to: '/help',
    component: Help,
    children: pages.subcategories.filter(cat => cat.category === 'Help'),
  },
  {
    title: 'Logs',
    to: '/logs',
    component: Logs,
    children: pages.subcategories.filter(cat => cat.category === 'Logs'),
  },
  {
    title: 'Reports',
    to: '/reports',
    component: Reports,
    children: pages.subcategories.filter(cat => cat.category === 'Reports'),
  },
]
