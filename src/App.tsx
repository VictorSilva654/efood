import Footer from './components/Footer'
import Hero from './components/Hero'
import RestaurantList from './components/RestaurantList'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <RestaurantList />
      <Footer />
    </>
  )
}

export default App
