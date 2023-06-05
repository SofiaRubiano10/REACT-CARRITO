import { useSelector } from "react-redux"
import CartItem from "./CartItem";

const CartContainer = () => {
  const {cartItems} = useSelector(store =>store.cart);
    
  return (
    <section className="cart-container">
        <header> Your Shopping Cart </header>
        <div>
            {cartItems.map((item) => {
                return <CartItem key ={item.id} {...item} />;
                })}
        </div>
    </section>

  )
}

export default CartContainer