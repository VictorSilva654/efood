import styled from 'styled-components'
import { colors } from '../../styles'

export const Content = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .total-price {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 16px;

    p {
      font-weight: bold;
      font-size: 14px;
      color: ${colors.white};
    }
  }
`
