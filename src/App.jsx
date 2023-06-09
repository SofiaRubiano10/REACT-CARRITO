//components
import NavBar from "./components/navbar/NavBar";
import Modal from "./components/Modal";
import CartContainer from "./components/cart/CartContainer";
//redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
// Reducers
import { calculateTotals } from "./features/cart/cartSlice";

const App = () => {
  // obtiene acceso a los items del cart
  const { cartItems } = useSelector(store => store.cart)
  const dispatch = useDispatch();
  
  //Recalcula los totales cada vez que camvia cartItems
  useEffect(() =>{
    dispatch(calculateTotals());
    // Recalcula totales
  }, [cartItems, dispatch])
  return (
    <> 
      <Modal/>
      <NavBar/>
      <CartContainer />
    </>
  )
}

export default App
