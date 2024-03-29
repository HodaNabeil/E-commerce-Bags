

import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./ProductSlice/productsSlice"

export const store =configureStore({
  reducer:{
    products:productsSlice
  }
})