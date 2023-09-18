export const toCapitalize = (str: string) => {
  const lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}

export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
