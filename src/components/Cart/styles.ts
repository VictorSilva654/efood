import styled from 'styled-components'
import { HashLink as RouterLink } from 'react-router-hash-link'
import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
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

export const ButtonContinue = styled(RouterLink)`
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
