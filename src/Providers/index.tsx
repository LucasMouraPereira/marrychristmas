'use client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'src/utils/styles/GlobalStyles'
import { theme } from 'src/utils/styles/theme'

import type { ChildrenProps } from 'src/utils/types/global.types'

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
