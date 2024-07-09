import { AppShell, Flex, Title } from '@mantine/core'
import { Instructions } from './components/pages-components/Instructions'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'

export const App = () => {
  return (
    <AppShell
      padding="md"
      header={{ height: 50 }}
      navbar={{ width: 200, breakpoint: 'sm' }}
    >
      <AppShell.Header bg="dark.5" p="sm">
        <Flex justify="space-between" align="center">
          <Title order={3} c="white">
            Recovr Frontend Technical Test
          </Title>
          <Title order={3} c="white">
            Thomas Allen
          </Title>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main bg="gray.1">
        <Routes>
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}
