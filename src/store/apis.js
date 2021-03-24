import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'


export const fetchSinglePost = createAsyncThunk(
    'singlePost',
    async (data, thunkAPI)=>{
        console.log(".....",data)
        try {
            
        } catch (error) {
            
        }
        const res = await axios.get("http://localhost:5000/api/posts/" + data)
        return res.data.data
        
    }
);

export const fetchAllPosts = createAsyncThunk(
    'fetchAllPosts',
    async (data, thunkAPI)=>{
        const res = await axios.get('http://localhost:5000/api/posts/')
        console.log(",,,,,,,,,,,",res)
        return res.data
        
    }
);
