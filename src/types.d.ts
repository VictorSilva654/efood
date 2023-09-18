declare type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

declare type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: number
}
