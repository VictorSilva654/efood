import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { Container, Overlay, Content } from './styles'
import { close } from '../../store/reducers/cart'

type Props = {
  children: JSX.Element
  id: string
}

const Sidebar = ({ children, id }: Props) => {
  const { visible } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeContainer = () => {
    dispatch(close())
  }

  return (
    <Container id={id} className={visible ? 'visible' : ''}>
      <Overlay onClick={closeContainer} />
      <Content>{children}</Content>
    </Container>
  )
}

export default Sidebar
