import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import { addNewLink } from '../redux/actions';


const Linkform = () => {

  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit =(e)=>{
    e.preventDefault();
    dispatch(addNewLink(link));
    setLink("");
  }
  const onInputChange=(e)=>{
    setLink(e.target.value)
  }

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        placeholder='Enter new Link...'
        className='input'
        onChange={onInputChange}
        value={link}
      />
    </form>
  )
}

export default Linkform