import { colors } from '../../styles'
import styled from 'styled-components'

export const ProductDiv = styled.div`
  background-color: ${colors.salmon};
  width: 320px;
  height: 338px;
  color: ${colors.white};
  padding: 8px;

  .text-container {
    height: 80px;
    width: 304px;
  }
`
export const Title = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  margin: 8px 0;
  padding: 4px 8px;
  width: 304px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.white};
  border: none;
  color: ${colors.salmon};
  cursor: pointer;
  text-decoration: none;
`
