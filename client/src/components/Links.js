import React,{useEffect} from 'react'

import { getAllLinks } from '../redux/actions/index'
import { ALL_LINKS,UNVISITED_LINKS,VISITED_LINKS } from '../redux/actions/type';
import { useDispatch,useSelector } from 'react-redux'

import Link from './Link'

import Sidebars from './Sidebars'

export const Links = () => {

  const dispatch = useDispatch();

  const links = useSelector(state => state.links);
  const currentSidebar = useSelector(state=>state.currentSidebar);

  useEffect(()=>{
    dispatch(getAllLinks());
  }, [])

  const getLinks =()=>{
    if (currentSidebar === ALL_LINKS) {
      return links;
  } else if (currentSidebar === UNVISITED_LINKS) {
      return links.filter(link => !link.visited)
  } else if (currentSidebar === VISITED_LINKS) {
      return links.filter(link => link.visited)
  }
}

  return (
    <article>
      <div className='article-sidebar'>
        <Sidebars currentSidebar={currentSidebar}/>
      </div>
      <ul className='article-links'>
        {
          getLinks().map(link=>(
            <Link 
              key={link._id}  
              link={link}/>
          ))
        }
      </ul>

    </article>
  )
}

export default Links;