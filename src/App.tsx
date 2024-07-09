// Components
import { AppShell, Flex, Title } from '@mantine/core'
import { Instructions } from './components/pages-components/Instructions'
import { Home } from './components/Home'
import { Analytics } from './components/pages-components/Analytics'
import { Dashboard } from './components/pages-components/Dashboard'
import { Help } from './components/pages-components/Help'
import { Logs } from './components/pages-components/Logs'
import { Reports } from './components/pages-components/Reports'
import { Settings } from './components/pages-components/Settings'

// Hooks
import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useHotkeys } from '@mantine/hooks'

// Utils
import pages from './pages.json'
import Modal from './components/spotlight/Modal'
import { User } from './components/pages-components/User'

// -------------------------------------------------

export const App = () => {
  const navItems = [
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
  const [modalOpen, setModalOpen] = useState(false)
  useHotkeys([
    ['ctrl+P', () => setModalOpen(true)],
    ['mod+P', () => setModalOpen(true)],
    ['/', () => setModalOpen(true)],
  ])

  const close = () => {
    // wait for animation to end to close
    setTimeout(() => {
      setModalOpen(false)
    }, 300)
  }

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: 'sm' }}
    >
      {modalOpen && <Modal hadnleClose={close} />}
      <AppShell.Header bg="myColor.3" p="md" withBorder={false}>
        <Flex justify="space-between" align="center">
          <Title order={3} c="myColor.0">
            Recovr Frontend Technical Test
          </Title>
          <Title order={3} c="myColor.0">
            Thomas Allen
          </Title>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md" bg="myColor.3" withBorder={false}>
        {navItems.map(item => (
          <Link
            key={item.to}
            to={item.to}
            style={{
              textDecoration: 'none',
            }}
          >
            <Title c="myColor.0" order={4}>
              {item.title}
            </Title>
          </Link>
        ))}
      </AppShell.Navbar>
      <AppShell.Main bg="myColor.2">
        <Routes>
          {navItems.map(item => (
            <>
              {item.children.length ? (
                <Route
                  key={item.to}
                  path={item.to}
                  element={<item.component></item.component>}
                >
                  {item.children.map((child, index) => (
                    <Route
                      key={index}
                      path={`/${item.title.toLowerCase()}/${child.name.toLowerCase()}`}
                    />
                  ))}
                </Route>
              ) : (
                <Route
                  key={item.to}
                  path={item.to}
                  element={<item.component />}
                />
              )}
            </>
          ))}
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}
