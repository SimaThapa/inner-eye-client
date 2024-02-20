import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  value: 0,
  name:"hello",
  age:30,
}

//create the async thunk
const fetchUserById = createAsyncThunk(
  'home/fetchServiceList',
  async (_, {rejectWithValue}) => {
    try {
      const response=await axios.get("api url");
      if(response?.status==200){
        return response?.data
      }
    } catch (error) {
      const errorMessage=err?.response?.data?.message||"could not fetch service list"
      return rejectWithValue(errorMessage)
    }
   
  },
)
export const counterSlice= createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
      
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    incrementByAge:(state)=>{
      state.age += 1                                   
    },
    decrementByAmount:(state,action)=>{
        state.value-=action.payload   
    },
    decrementAge:(state)=>{
        state.age -=1
    },
  },
  extraReducers: (builder) => {
    
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount ,decrementByAmount,decrementAge,incrementByAge} = counterSlice.actions

export default counterSlice.reducer