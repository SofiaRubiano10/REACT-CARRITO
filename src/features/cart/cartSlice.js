import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Estado inicial
const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  isLoading: true,
};

const url = "http://localhost:3000/items";
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);
//Creación del slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      //obtiene el id del articulo a eliminar
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItemAmount: (state, action) => {
      //obtiene el id del articulo al incrementar
      const itemId = action.payload;
      // Busca el artículo en el carrito
      const item = state.cartItems.find((item) => item.id === itemId);
      // incrementa la cantidad
      item.amount++;
    },
    decreaseItemAmount: (state, action) => {
      //obtiene el id del articulo al decrementar
      const itemId = action.payload;
      // Busca el artículo en el carrito
      const item = state.cartItems.find((item) => item.id === itemId);
      // decrementa la cantidad
      item.amount--;
    },
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      // Recorre los items del cart
      state.cartItems.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
      });
      // Modifica el estado
      state.amount = totalAmount;
      state.total = totalPrice;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        //Código cuando la promesa está pendiente. Indica que la info está cargando
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        //Código al completar exitosamente la promesa. Indica que la info ya no se está cargando
        state.isLoading = false;
        //Obtiene los datos del backend
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        //Código al completar la promesa de forma no exitosa. Indica que la información ya no se está cargando
        state.isLoading = false;
        state.cartItems = [];
        console.warn("Hubo un error");
      });
  },
});

export const {
  clearCart,
  removeItem,
  increaseItemAmount,
  decreaseItemAmount,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
