import { Paper, Stack, Transition } from '@mantine/core'
import Backdrop from './Backdrop'
import { useClickOutside, useHotkeys } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { loadUsers } from '../../api'

import { User } from '../../utils/types'

export default function Modal({ hadnleClose }: { hadnleClose: () => void }) {
  const [opened, setOpened] = useState(false)
  useHotkeys([
    [
      'escape',
      () => {
        setOpened(false)
        hadnleClose()
      },
    ],
  ])

  const ref = useClickOutside(() => {
    setOpened(false)
    hadnleClose()
  })
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function getUsers() {
      const usersData = (await loadUsers()) as User[]
      setUsers(usersData)
    }
    setOpened(true)
    getUsers()
  }, [])

  return (
    <Transition
      mounted={opened}
      transition={{
        in: { opacity: 1 },
        out: { opacity: 0 },
        transitionProperty: 'trasnform, opacity',
      }}
      duration={400}
      timingFunction="ease"
    >
      {styles => (
        <div style={styles}>
          <Backdrop>
            <Paper
              shadow="md"
              p="xl"
              radius={'md'}
              ref={ref}
              bg="myColor.4"
              pos={'fixed'}
              top={'20%'}
              left={{ base: '5%', sm: '25%' }}
              w={{ base: '90%', sm: '50%' }}
            >
              <Stack ref={ref} align="center" justify="center" gap="md">
                <h1>Modal</h1>
              </Stack>
            </Paper>
          </Backdrop>
        </div>
      )}
    </Transition>
  )
}
