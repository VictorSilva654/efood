import styled from 'styled-components'
import { HashLink as RouterLink } from 'react-router-hash-link'
import { colors } from '../../styles'

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
export const Button = styled(RouterLink)`
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
