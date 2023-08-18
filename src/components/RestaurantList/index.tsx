import { useEffect, useState } from 'react'
import Restaurant from '../Restaurant'
import { RestaurantType } from '../Restaurant'
import { List, ListItem } from './styles'
import { useParams } from 'react-router-dom'

export type Props = {
  restaurants: RestaurantType[]
}

const RestaurantList = ({ restaurants }: Props) => {
  if (!restaurants) <h3>Carregando...</h3>

  return (
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <ListItem key={restaurant?.id}>
            <Restaurant
              tags={[restaurant?.tipo]}
              image={restaurant?.capa}
              avaliation={restaurant?.avaliacao}
              description={restaurant?.descricao}
              name={restaurant?.titulo}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
