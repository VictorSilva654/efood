import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Index'
import Presentation from '../../components/Presentation'
import ProductList from '../../components/ProductsList'
import { RestaurantType } from '../../components/Restaurant'

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) return <h3>Carregando...</h3>

  return (
    <>
      <Header />
      <Presentation restaurant={restaurant} />
      <ProductList cardapio={restaurant.cardapio} />
    </>
  )
}
export default Perfil
