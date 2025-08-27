import { configureStore } from "@reduxjs/toolkit";
import DoctorSlice from "./DoctorSlice"

const store=configureStore({
   reducer:{
     Doctors:DoctorSlice
   },
});

export default store;