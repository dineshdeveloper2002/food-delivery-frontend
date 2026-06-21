import { createSlice } from "@reduxjs/toolkit";

export const loginStore: any = {
    username: "",
    password: "",
    status: false
}

const loginStoreSlice = createSlice({
    name: 'loginStore',
    initialState: loginStore,
    reducers: {
        setUserName(state, action) {
            state.username = action.payload;
        },
        setUserPassword(state, action) {
            state.password = action.payload
        },
        setLoginStatus(state, action) {
            state.status = action.payload;
        }
    }
})

export default loginStoreSlice.reducer;

export const { setUserName, setUserPassword, setLoginStatus } = loginStoreSlice.actions;