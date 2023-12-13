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
        <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js" async />
        <Script
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js"
          async
        />
        <Script
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js"
          async
        />
        <Script
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathPlugin.min.js"
          async
        />
        <Script
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/Physics2DPlugin3.min.js"
          async
        />
        <Script
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/EasePack3.min.js"
          async
        />
        <Script src="/gsap.js" async />
      </body>
    </html>
  )
}

export default RootLayout
