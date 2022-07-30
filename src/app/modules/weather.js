import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const axios = require('axios');

export const fetchWeather = createAsyncThunk(
       'weather'/'fetch',
       async (payload,{rejectWithValue,getState,dispatch}) => {
        try{
         const data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=ca59ec658bf54f84bb7135602222007&q=${payload}`)
         return data
        }catch(error){
          if(!error?.response){
            throw error
          }
          return rejectWithValue()
        }
       }
     )
    //  ?key=${process.env.REACT_APP_API_KEY}&q=${action.payload}


const weather = createSlice({
  name: 'weather',
  initialState:{},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.loading=true
    })
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action?.payload
      state.loading=false
      state.error=undefined
    })
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.error = action?.payload
      state.weather = undefined
      state.loading=true
    })
  },
});

export default weather.reducer