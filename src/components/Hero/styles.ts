import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { colors } from '../../styles'

export const HeroDiv = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 384px;

  .container {
    text-align: center;
  }
`
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${colors.salmon};
  margin-top: 138px;
`

export const Logo = styled.img`
  margin-top: 40px;
  width: 125px;
`
