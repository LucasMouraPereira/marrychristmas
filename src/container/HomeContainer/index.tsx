'use client'
import { TreeSVG } from 'src/components/ui/SvgComponent'
import { Mountains_of_Christmas } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import * as S from './styled'

const mountainsOfChristmas = Mountains_of_Christmas({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const HomeContainer = () => (
  <S.WrapperHome className={mountainsOfChristmas.className}>
    <TreeSVG />
    <TypeAnimation sequence={['Feliz Natal!', 1000]} wrapper="p" speed={20} />
    <TypeAnimation
      sequence={[
        'Que as bênçãos de Deus façam do seu Natal reuniões em família incríveis e felizes!',
        1000,
        'De Lucas Para Fernanda',
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  </S.WrapperHome>
)
