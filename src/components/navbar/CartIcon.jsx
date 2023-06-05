import { useSelector } from "react-redux"
import { BsCart2 } from "react-icons/bs"

const CartIcon = () => {
    //Obtiene acceso al store
    const {amount} = useSelector((store) => store.cart);
    
    return (
        <div className="amount-container">
            <BsCart2 className="cart-icon"/>
            <span className="badge">{amount}</span>
        </div>
  )
}

export default CartIcon