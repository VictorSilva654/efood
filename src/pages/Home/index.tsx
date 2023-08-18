import { useState, useEffect } from 'react'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { RestaurantType } from '../../components/Restaurant'

const Home = () => {
  const [restaurants, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
