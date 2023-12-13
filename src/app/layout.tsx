import { Providers } from 'src/Providers'
import { StyledComponentsRegistry } from 'src/app/registry'
import Script from 'next/script'

import type { ChildrenProps } from 'src/utils/types/global.types'

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="pt-br">
      <head>
        <title>Marry Christmas</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
        <Script src="/gsap.min.js" async />
        <Script
          src="/MorphSVGPlugin3.min.js"
          async
        />
        <Script
          src="/DrawSVGPlugin3.min.js"
          async
        />
        <Script
          src="/MotionPathPlugin.min.js"
          async
        />
        <Script
          src="/Physics2DPlugin3.min.js"
          async
        />
        <Script
          src="/EasePack3.min.js"
          async
        />
        <Script src="/gsap.js" async />
      </body>
    </html>
  )
}

export default RootLayout
