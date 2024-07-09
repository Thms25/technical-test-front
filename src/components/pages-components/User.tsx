import { Box, Title } from '@mantine/core'
import { useParams } from 'react-router-dom'

export const User = () => {
  const { name } = useParams()
  return (
    <Box>
      <Title>User: {name}</Title>
    </Box>
  )
}
