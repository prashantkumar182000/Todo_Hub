import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";


const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer, //redux slice for board management
  }
})

export default store
