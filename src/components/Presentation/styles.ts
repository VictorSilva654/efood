import styled from 'styled-components'
import fundo from '../../assets/images/fundo_italiana.png'
import { colors } from '../../styles'

export const BackgroundDiv = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
`

export const PresentationDiv = styled.div`
  height: 280px;
  color: ${colors.realWhite};
  font-size: 32px;
  background-color: rgba(0, 0, 0, 0.5);

  .container {
    justify-content: space-between;
  }
`

export const Title = styled.h2`
  font-weight: 900;
  padding-top: 140px;
`

export const SoftTitle = styled.h3`
  font-weight: 100;
  padding-top: 25px;
`
