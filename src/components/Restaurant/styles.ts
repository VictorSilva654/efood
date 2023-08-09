import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const RestaurantDiv = styled.div`
  position: relative;
  width: 472px;
  border: 1px solid ${colors.salmon};
  color: ${colors.salmon};

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const UpText = styled.h3`
  font-size: 18px;
  color: ${colors.salmon};
  font-weight: bold;
`

export const Text = styled.p`
  font-size: 14px;
`

export const Avaliation = styled.div`
  display: flex;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Button = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.salmon};
  border: none;
  color: ${colors.white};
  margin-top: 16px;
`
