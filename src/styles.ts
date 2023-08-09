import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  background: '#FFF8F2',
  white: '#FFEBD9',
  realWhite: '#fff'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
