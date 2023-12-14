'use client'
import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: inherit;-webkit-font-smoothing: antialiased;
    ${({ theme }) => css`
      html,
      body {
        width: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-size: 16px;
        font-family: ${theme.typography.family.primary};
      }
      body {
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        background-color: darkgreen;
      }
      body.scroll-hide::-webkit-scrollbar {
        display: none;
      }
      body.scroll-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      main {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 700;
      }
      a {
        text-decoration: none;
        color: unset;
      }
      svg {
        width: 100%;
        height: 100%;
        visibility: hidden;
      }
    `}
  }
`
