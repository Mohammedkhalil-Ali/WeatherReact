import { configureStore } from '@reduxjs/toolkit';
import Weather from './modules/weather';

export const store = configureStore({
  reducer: {
    weather:Weather
  },
});
