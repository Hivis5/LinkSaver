import axios from 'axios';
import { ADDNEW_LINK,GETALL_LINK,TOGGLE_LINK,UPDATE_LINK,DELETE_LINK,TOGGLE_SIDEBAR} from './type';

const API_URL = 'http://localhost:8000'

export const addNewLink = (data)=> async(dispatch)=>{
  try{
    const res = await axios.post(`${API_URL}/links`,{data});

    dispatch({type:ADDNEW_LINK,payload:res.data});
  }catch(error){
    console.log("Error while calling addNewTodo API",error.message);
  }
}

export const getAllLinks = () => async(dispatch)=>{
  try{
    const res = await axios.get(`${API_URL}/links`);

    dispatch({type:GETALL_LINK,payload:res.data});
  }catch(error){
    console.log("Error while calling getAllLinks API",error.message);
  }
}

export const toggleLink = (id) => async(dispatch)=>{
  try{
    const res = await axios.get(`${API_URL}/links/${id}`);

    dispatch({ type:TOGGLE_LINK , payload:res.data});
  }catch(error){
    console.log("Error while calling toggleLinks API",error.message);
  }
}

export const updateLink = (id,data) => async(dispatch)=>{
  try{
    const res = await axios.put(`${API_URL}/links/${id}`,{data});

    dispatch({ type:UPDATE_LINK , payload:res.data});
  }catch(error){
    console.log("Error while calling updateLink API",error.message);
  }
}

export const deleteLink = (id) => async(dispatch)=>{
  try{
    const res = await axios.delete(`${API_URL}/links/${id}`);

    dispatch({ type:DELETE_LINK , payload:res.data});
  }catch(error){
    console.log("Error while calling deleteLink API",error.message);
  }
}

export const toggleSidebar = (sidebar) => async (dispatch) => {
  dispatch({ type: TOGGLE_SIDEBAR, selected: sidebar })
}