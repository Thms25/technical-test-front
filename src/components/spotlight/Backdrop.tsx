import { Overlay, Stack, useMantineTheme } from '@mantine/core'

export default function Backdrop({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()
  return (
    <Overlay
      color={theme.colors.myColor[2]}
      backgroundOpacity={0.25}
      zIndex={999}
      blur={2}
      fixed
    >
      <Stack h="100vh">{children}</Stack>
    </Overlay>
  )
}
