import { configureStore } from "@reduxjs/toolkit";
import loginStoreSlice from "./login/loginStoreSlice";
import { useStore } from 'react-redux';
import HomeStoreSlice from "./home/HomeStoreSlice";
import UserStoreSlice from "./user/UserStoreSlice";

export const Store = configureStore({
    reducer: {
        logIn: loginStoreSlice,
        Home: HomeStoreSlice,
        User: UserStoreSlice
    }
});

//  TypeScript store types
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppStore = () => useStore<RootState>();