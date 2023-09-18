import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'
import Delivery from './components/Delivery'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
        <Delivery />
      </BrowserRouter>
    </Provider>
  )
}

export default App
