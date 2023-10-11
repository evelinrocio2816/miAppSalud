import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "userLogged",
  updatedAd: Date.now().toLocaleString(),
  items: [],
  total: null,
};
export const shiftSlice = createSlice({
  name: 'shift',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const shiftRepeated = state.items.find(
        item => item.id === action.payload.id
      )
      if(shiftRepeated){
        const itemsUpdated =state.items.map(item =>{
          if(item.id ===action.payload.id ){
            item.quantity += action.payload.quantity
            return item
          }
          return
        })
        const total =itemsUpdated.reduce(
          (acc,current)=>(acc += current.price * current.quantity)
        )
        state={
          ...state,
          items:updatedAd,
          total,
          updatedAd: new Date().toLocaleString()
        }
      }else{
        state.items.push(action.payload)
        const total = state.items.reduce(
          (acc,current)=>(acc += current.price * current.quantity)
        )
        state={
          ...state,
          total,
          updatedAd: new Date().toLocaleString()
        }
      }
    },
    removeItem:(state,action)=>{}
  },
});
export const { addItem, removeItem } = shiftSlice.actions;
export default shiftSlice.reducer;
