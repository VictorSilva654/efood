import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const HeaderDiv = styled.header`
  height: 186px;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Logo = styled.img`
  width: 125px;
`

export const TitleLink = styled(HashLink)`
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
  line-height: 21px;
  color: ${colors.salmon};
  cursor: pointer;
`

export const Title = styled.h2`
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
  line-height: 21px;
  color: ${colors.salmon};
  cursor: pointer;
`
