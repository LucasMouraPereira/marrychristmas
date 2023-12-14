'use client'
import styled, { css } from 'styled-components'

export const WrapperHome = styled.div`
  ${({ theme }) => css`
    height: 45vh;
    color: #cb9866;
    display; flex;
    justify-content: center;
    align-items: center;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      margin: 10px 32px;
      text-align: center;
    }
    ${theme.breakpoints.minWidth('md')} {
      height: 80vh;
    }
  `}
`
