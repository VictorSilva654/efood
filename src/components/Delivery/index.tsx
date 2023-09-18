import Sidebar from '../Sidebar'
import { InputDiv, Form, Row, Button } from './styles'

const Delivery = () => {
  return (
    <Sidebar id="delivery">
      <Form>
        <h2>Entrega</h2>
        <Row>
          <InputDiv>
            <label htmlFor="name">Quem irá receber</label>
            <input type="text" id="name" />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label htmlFor="adress">Endereço</label>
            <input type="text" id="adress" />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label htmlFor="zipcode">CEP</label>
            <input type="text" id="zipcode" />
          </InputDiv>
          <InputDiv>
            <label htmlFor="number">Número</label>
            <input type="text" id="number" />
          </InputDiv>
        </Row>
        <Row style={{ marginBottom: '24px' }}>
          <InputDiv>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" />
          </InputDiv>
        </Row>
        <Button style={{ marginBottom: '8px' }} to="">
          Continuar com a compra
        </Button>
        <Button to="/#cart">Voltar para o carrinho</Button>
      </Form>
    </Sidebar>
  )
}

export default Delivery
