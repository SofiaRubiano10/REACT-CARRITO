import { useSelector } from "react-redux"

const CartContainer = () => {
  const {cartItems} = useSelector(store =>store.cart);
    
  return (
    <div>
        {cartItems.map(item =>{
            return <h3 key={item.id}>{item.title}</h3>
        })}
    </div>
  )
}

export default CartContainer