import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    themeMode: "light",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        light: (state) => {
            state.themeMode = "light";
            document.querySelector("html").classList.remove("light", "dark");
            document.querySelector("html").classList.add("light");
        },
        dark: (state) => {
            state.themeMode = "dark";
            document.querySelector("html").classList.remove("light", "dark");
            document.querySelector("html").classList.add("dark");
        }
    }
})

export const { login, logout, light, dark } = authSlice.actions;

export default authSlice.reducer;