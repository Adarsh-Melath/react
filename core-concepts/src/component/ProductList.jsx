export const ProductList = () => {
  const products = [
    {
      id: 1,
      productName: "Laptop",
      price: 1000,
      description: "A powerful laptop for all your needs"
    }, {
      id: 2,
      productName: "Smartphone",
      price: 500,
      description: "A sleek smartphone with advanced features"
    }, {
      id: 3,
      productName: "Headphones",
      price: 100,
      description: "High-quality headphones for immersive audio experience"
    }, {
      id: 4,
      productName: "Smartwatch",
      price: 200,
      description: "A stylish smartwatch with fitness tracking features"
    }, {
      id: 5,
      productName: "Tablet",
      price: 300,
      description: "A versatile tablet for work and entertainment"
    }
  ]
  const productElements = products.map((product) => (
    <div key={product.id}>
      <h3>{product.productName}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  ))
  return (
    <>
      <h2>Our Products</h2>
      {productElements}
    </>
  )
}