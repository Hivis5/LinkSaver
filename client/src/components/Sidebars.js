
import { SIDEBARS } from "../redux/actions/type";

import { useDispatch } from "react-redux";

import {toggleSidebar} from "../redux/actions"

const Sidebars = ({currentSidebar})=>{

  const dispatch = useDispatch();

  return(
    SIDEBARS.map(sidebar =>(
      <div>
        <button
        className={sidebar === currentSidebar ? "button selected" : "button"}
        onClick={()=> dispatch(toggleSidebar(sidebar))}

        >
        {sidebar}
        </button>
      </div>
    ))
  )
}

export default Sidebars;