import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Create agent
export const registerAPI = createAsyncThunk(
    'registerAPI',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8080/register', formData, {
                headers: {
                    'Content-Type': 'application/json', // Ensure JSON content type
                },
            });
            return response.data; // Return the response data from the API
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Signup failed'); // Return error message if failed
        }
    }
);

// Get all users
export const fetchAllRegisters = createAsyncThunk(
    'fetchAllRegisters',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:8080/register');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error fetching users');
        }
    }
);

export const registerSlice = createSlice({
    name: 'Register',
    initialState: {
        status: '',
        loading: false,
        registers: [],

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRegisters.pending, (state) => {
                state.loading = true;
                state.status = 'loading';
            })
            .addCase(fetchAllRegisters.fulfilled, (state, action) => {
                state.loading = false;
                state.registers = action.payload;
                state.status = 'success';
            })
            .addCase(fetchAllRegisters.rejected, (state, action) => {
                state.loading = false;
                state.status = 'failed';
                state.error = action.payload || 'Signup failed';
            })

            .addCase(registerAPI.pending, (state, action) => {
                state.loading = true
            })
            .addCase(registerAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.status="Register sucessfully"
            })
            .addCase(registerAPI.rejected, (state, action) => {
                state.loading = false;
                state.status="Something went wrong"
            })


    },
});



export default registerSlice.reducer;
