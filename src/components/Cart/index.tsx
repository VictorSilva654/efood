import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { useGetResponseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { remove, close, clear } from '../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../utils'

import * as S from './styles'

type SetRouteProps = {
  route: 'delivery' | 'payment' | 'success' | ''
}

const Cart = () => {
  const { visible, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data }] = useGetResponseMutation()
  const [{ route }, setRouteCart] = useState<SetRouteProps>({ route: '' })

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const closeContainer = () => {
    dispatch(close())
  }

  const endBuying = () => {
    dispatch(close())
    dispatch(clear())
    setRouteCart({ route: '' })
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipcode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipcode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear)
            }
          }
        }
      })
    }
  })

  const goToRoute = ({ route }: SetRouteProps) => {
    switch (route) {
      case 'delivery':
        setRouteCart({ route: 'delivery' })
        break
      case 'payment':
        setRouteCart({ route: 'payment' })
        break
      case 'success':
        setRouteCart({ route: 'success' })
        form.handleSubmit()
        break
      default:
        setRouteCart({ route: '' })
    }
  }

  if (route === '' && items.length === 0) {
    return (
      <S.CartContainer className={visible ? 'visible' : ''}>
        <S.Overlay onClick={closeContainer} />
        <S.Sidebar>
          <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>
            Carrinho vazio. Adicione um item para continuar!
          </h2>
          <S.Button onClick={closeContainer}>Fechar</S.Button>
        </S.Sidebar>
      </S.CartContainer>
    )
  } else if (route === 'delivery') {
    return (
      <S.CartContainer className={visible ? 'visible' : ''}>
        <S.Overlay onClick={closeContainer} />
        <S.Sidebar>
          <S.Form>
            <h2>Entrega</h2>
            <S.Row>
              <S.InputDiv>
                <label htmlFor="name">Quem irá receber</label>
                <input
                  value={form.values.name}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="name"
                  name="name"
                />
              </S.InputDiv>
            </S.Row>
            <S.Row>
              <S.InputDiv>
                <label htmlFor="address">Endereço</label>
                <input
                  value={form.values.address}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="address"
                  name="address"
                />
              </S.InputDiv>
            </S.Row>
            <S.Row>
              <S.InputDiv>
                <label htmlFor="city">Cidade</label>
                <input
                  value={form.values.city}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="city"
                  name="city"
                />
              </S.InputDiv>
            </S.Row>
            <S.Row>
              <S.InputDiv>
                <label htmlFor="zipcode">CEP</label>
                <input
                  type="text"
                  id="zipcode"
                  value={form.values.zipcode}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  name="zipcode"
                />
              </S.InputDiv>
              <S.InputDiv>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  value={form.values.number}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  name="number"
                />
              </S.InputDiv>
            </S.Row>
            <S.Row style={{ marginBottom: '24px' }}>
              <S.InputDiv>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  value={form.values.complement}
                  name="complement"
                />
              </S.InputDiv>
            </S.Row>
            <S.Button
              onClick={() => goToRoute({ route: 'payment' })}
              style={{ marginBottom: '8px' }}
            >
              Continuar com a compra
            </S.Button>
            <S.Button onClick={() => goToRoute({ route: '' })}>
              Voltar para o carrinho
            </S.Button>
          </S.Form>
        </S.Sidebar>
      </S.CartContainer>
    )
  } else if (route === 'payment') {
    return (
      <S.CartContainer className={visible ? 'visible' : ''}>
        <S.Overlay onClick={closeContainer} />
        <S.Sidebar>
          <S.Form>
            <h2>
              Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
            </h2>
            <S.Row>
              <S.InputDiv>
                <label htmlFor="cardName">Nome do cartão</label>
                <input
                  value={form.values.cardName}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="cardName"
                  name="cardName"
                />
              </S.InputDiv>
            </S.Row>
            <S.Row>
              <S.InputDiv>
                <label htmlFor="cardNumber">Número do Cartão</label>
                <input
                  value={form.values.cardNumber}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                />
              </S.InputDiv>
              <S.InputDiv>
                <label htmlFor="cardCode">CVV</label>
                <input
                  value={form.values.cardCode}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="cardCode"
                  name="cardCode"
                />
              </S.InputDiv>
            </S.Row>
            <S.Row style={{ marginBottom: '24px' }}>
              <S.InputDiv>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <input
                  value={form.values.cardMonth}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="cardMonth"
                  name="cardMonth"
                />
              </S.InputDiv>
              <S.InputDiv>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <input
                  value={form.values.cardYear}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  type="text"
                  id="cardYear"
                  name="cardYear"
                />
              </S.InputDiv>
            </S.Row>
            <S.Button
              onClick={() => goToRoute({ route: 'success' })}
              style={{ marginBottom: '8px' }}
            >
              Finalizar compra
            </S.Button>
            <S.Button onClick={() => goToRoute({ route: 'delivery' })}>
              Voltar para a edição de endereço
            </S.Button>
          </S.Form>
        </S.Sidebar>
      </S.CartContainer>
    )
  } else if (route === 'success') {
    return (
      <S.CartContainer className={visible ? 'visible' : ''}>
        <S.Overlay onClick={closeContainer} />
        <S.Sidebar>
          <h2>Pedido realizado - {data?.orderId}</h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Button onClick={endBuying}>Concluir</S.Button>
        </S.Sidebar>
      </S.CartContainer>
    )
  }

  return (
    <S.CartContainer className={visible ? 'visible' : ''}>
      <S.Overlay onClick={closeContainer} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} className="image-food" />
              <div>
                <h2>{item.nome}</h2>
                <h3>{formatPrice(item.preco)}</h3>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
                className="trash"
              />
            </S.CartItem>
          ))}
        </ul>
        <div className="total-price">
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice(items))}</p>
        </div>
        <S.Button onClick={() => goToRoute({ route: 'delivery' })}>
          Continuar com a entrega
        </S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
