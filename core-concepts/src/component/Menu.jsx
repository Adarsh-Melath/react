
import { MenuItem } from "./MenuItem"
export const Menu = () => {
  const handleOrder = (item, price) => {
    alert(`You ordered ${item} for ${price}!`)
  }
  return (
    <div>
      <h2>Our Menu</h2>
      <Menu name="Pizza" price={12} onOrder={handleOrder} />
      <Menu name="Burger" price={10} onOrder={handleOrder} />
      <Menu name="Salad" price={8} onOrder={handleOrder} />
    </div>
  )
}