import styled from 'styled-components'
import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  color: ${colors.white};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;

  h2 {
    font-size: 18px;
    font-weight: 900px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 24px 0;
  }
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

    h3 {
      font-size: 14px;
      font-weight: normal;
      margin-top: 16px;
    }
  }
`

export const Form = styled.form`
  h2 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 16px;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  margin-top: 8px;
  align-items: flex-end;
`

export const InputDiv = styled.div`
  flex: auto;

  input {
    width: 100%;
    background-color: ${colors.white};
    border: none;
    color: ${colors.black};
    height: 32px;
    font-size: 14px;
    font-weight: bold;
    padding: 0 8px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
  }
`
export const Button = styled.button`
  background-color: ${colors.white};
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: ${colors.salmon};
  width: 100%;
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`
