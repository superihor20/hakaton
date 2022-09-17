import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/user";

interface UserState {
    isAuth: boolean
    user: IUser
}

const initialState: UserState = {
    isAuth: false,
    user: {} as IUser
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.isAuth = true
            state.user = action.payload
        },
        logout(state) {
            state.isAuth = false
            state.user = {} as IUser
        }
    }
})

export const {login, logout} = userSlice.actions
export const userReducer = userSlice.reducer