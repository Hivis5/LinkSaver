import { useState } from "react";
import { AiFillDelete,AiFillEdit ,AiOutlineLink} from "react-icons/ai";
import { toggleLink,updateLink,deleteLink } from "../redux/actions";
import { useDispatch } from 'react-redux';

const Link = ({link}) => {

  const[editing, setEditing]=useState(false);

  const[text,setText]=useState(link.data);

  const dispatch = useDispatch();

  const onFormSubmit = (e)=>{
    e.preventDefault();
    setEditing(prevState => !prevState);
    dispatch(updateLink(link._id, text))
  }

  return (
    <li className="link">
      <span 
      onClick={()=> dispatch(toggleLink(link._id))}      
      style={{color: link.visited ? "blue" : "#fff",display: editing ? 'none' : ""}}>
        {link.data}<a href={link.data} target="_blank"><AiOutlineLink className="visitIcon"/></a>
      </span>
      <form
        style={{display:editing ? 'inline' : 'none'}}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-link"
          onChange={(e)=>setText(e.target.value)}
        />
      </form>
    
      <span className="icons" onClick={()=> dispatch(deleteLink(link._id))}>
      <AiFillDelete/>
      </span>
      <span className="icons" onClick={()=> setEditing(prevState => !prevState)}>
      <AiFillEdit/>
      </span> 
      
    </li>
  )
}

export default Link