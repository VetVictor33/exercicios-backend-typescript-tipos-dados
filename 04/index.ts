type productData = {
  product: string,
  batch: number,
  year: number,
  amount: number
}

const toTag = (product: productData) => {
  const tagList: string[] = []
  for (let i = 0; i < product.amount; i++) {
    tagList.push(`${product.batch}-${product.year}-${String(i + 1).padStart(3, '0')}`)
  }
  return console.log(tagList)
}

toTag({
  product: 'CPU Dual Core 3.0GHZ',
  batch: 321,
  year: 2022,
  amount: 5
})