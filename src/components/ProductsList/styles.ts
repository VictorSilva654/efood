import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  margin-top: 56px;
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const ListItem = styled.li`
  margin: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContainer = styled.div`
position: relative;
  z-index: 1;
  width: 1024px;
  height: 344px;
  background-color: ${colors.salmon};
  color: ${colors.realWhite};
  display: flex;

  img {
    object-fit: cover;
  }

  .inner-container {
    padding: 32px;
    display: flex;
  }

  .close {
    width: 16px;
    height: 16px;
    margin: 8px;
    &:hover {
      cursor: pointer;
    }
  }

  .content-container {
    margin-left: 24px;
    h4 {
      font-size: 18px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
      margin: 16px 0;
    }
  }
  }
`

export const Button = styled.button`
  color: ${colors.salmon};
  background-color: ${colors.white};
  border: none;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`
