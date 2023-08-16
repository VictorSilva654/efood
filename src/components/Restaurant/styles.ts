import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const RestaurantDiv = styled.div`
  position: relative;
  width: 472px;
  height: 398px;
  border: 1px solid ${colors.salmon};
  color: ${colors.salmon};
`

export const UpText = styled.h3`
  font-size: 18px;
  color: ${colors.salmon};
  font-weight: bold;
`

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const Avaliation = styled.div`
  display: flex;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Button = styled(Link)`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.salmon};
  border: none;
  color: ${colors.white};
  cursor: pointer;
  text-decoration: none;
`

export const Tag = styled.div`
  display: inline-block;
  margin-right: 8px;
  font-size: 12px;
  color: ${colors.white};
  background-color: ${colors.salmon};
  padding: 4px 6px;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
