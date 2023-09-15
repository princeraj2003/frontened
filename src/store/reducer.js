import{ createSlice} from '@reduxjs/toolkit';

const initialState={
    categories:[],
    transaction:[]
}
export const expenseSlice=createSlice({
name:'expense',
initialState,
reducer:{
    getTransaction:(state)=>{
//get code
    }
}
})

export const {getTransaction}=expenseSlice.actions;
export default expenseSlice.reducer;