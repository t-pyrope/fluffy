import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    name: string | null,
    email: string | null,
    token: string | null,
}

const initialState: UserState = {
    name: null,
    email: null,
    token: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer;
