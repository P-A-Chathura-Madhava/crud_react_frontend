import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

export const getUsers = createAsyncThunk(
    "users/getAllusers",
    async()=>{
        try {
            return await userService.getUsers();
        } catch (error) {
            console.log("Error fetching data");
        }
    }
)

export const createAUser = createAsyncThunk(
    "user/createAUser",
    async(data)=>{
        try {
            return await userService.createAUser(data);
        } catch (error) {
            console.log("Error creating user");
        }
    }
)

export const updateAUser = createAsyncThunk(
    "user/updateAUser",
    async(data) => {
        try {
            return await userService.updateAUser(data);
        } catch (error) {
            console.log("Error updating the user");
        }
    }
)

export const deleteAUser = createAsyncThunk(
    "user/deleteAUser",
    async(id) => {
        try {
            return await userService.deleteAUser(id);
        } catch (error) {
            console.log("Error deleting the user");
        }
    }
)

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getUsers.pending, (state, action) => {
            state.users = null;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.users = null;
        })
        .addCase(createAUser.pending, (state, action) => {
            state.users = null;
        })
        .addCase(createAUser.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(createAUser.rejected, (state, action) => {
            state.users = null;
        })
        .addCase(updateAUser.pending, (state, action) => {
            state.users = null;
        })
        .addCase(updateAUser.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(updateAUser.rejected, (state, action) => {
            state.users = null;
        });
    }
});

export default userSlice.reducer;