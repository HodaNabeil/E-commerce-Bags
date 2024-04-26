

import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./ProductSlice/productsSlice";
import cartSlice from "./ProductSlice/Cart"

export const store =configureStore({
  reducer:{
    products:productsSlice,
    cart:cartSlice
  }
})