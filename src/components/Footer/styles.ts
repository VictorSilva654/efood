import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterDiv = styled.footer`
  background-color: ${colors.white};
  display: flex;
  text-align: center;

  p {
    font-size: 10px;
    color: ${colors.salmon};
    margin-top: 80px;
    padding-bottom: 40px;
  }
`

export const Logo = styled.img`
  margin-top: 40px;
  width: 125px;
`

export const Medias = styled.div`
  margin-top: 32px;
  img {
    margin-right: 8px;
  }
`
