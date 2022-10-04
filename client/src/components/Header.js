import React from 'react'
import {AppBar,Toolbar, Typography,styled} from '@mui/material'
import { Link } from 'react-router-dom'
const Component = styled(AppBar)`
  background:#2c3e50;
`
const Container = styled(Toolbar)`
  justify-content: space-between;
  & > a{
    color:#fff;
    text-decoration:none;
  }
`

const Header = () => {
  return (
    <Component>
      <Container>
        <Typography>LinkSaver</Typography>
        <Link to='/login'>Logout</Link>
      </Container>
    </Component>
  )
}

export default Header