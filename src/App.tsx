// Components
import { AppShell, Flex, Title } from '@mantine/core'

// Hooks
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useHotkeys } from '@mantine/hooks'

// Utils
import Modal from './components/spotlight/Modal'
import { User } from './components/pages-components/User'
import { navItems } from './utils/nav-items'
import NavContent from './components/NavContent'

// -------------------------------------------------

export const App = () => {
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
        <NavContent />
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
