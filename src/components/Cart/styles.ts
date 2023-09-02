import styled from 'styled-components'
import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Sidebar = styled.aside`
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

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

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

  &.visible {
    display: flex;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  width: 344px;
  height: 100px;
  padding: 8px 0 12px 8px;
  background-color: ${colors.white};
  color: ${colors.salmon};
  margin-bottom: 16px;

  .image-food {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .trash {
    width: 16px;
    height: 16px;
    bottom: 8px;
    right: 8px;
    position: absolute;
    background-color: transparent;
    border: none;
    background-image: url(${lixeira});
    cursor: pointer;
  }

  div {
    margin-left: 8px;

    h2 {
      font-size: 18px;
      font-weight: 900px;
    }

    h3 {
      font-size: 14px;
      font-weight: normal;
      margin-top: 16px;
    }
  }
`

export const ButtonContinue = styled.button`
  background-color: ${colors.white};
  color: ${colors.salmon};
  width: 100%;
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`
