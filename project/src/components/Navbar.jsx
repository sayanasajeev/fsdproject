import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <br /> <br /> <br /><br /><br /><br />
        <AppBar  sx={{
       background: 'rgb(233,131,188)',
        background:' linear-gradient(90deg, rgba(233,131,188,1) 31%, rgba(125,213,28,1) 99%, rgba(118,175,41,0.958420868347339) 100%, rgba(50,247,175,1) 100%, rgba(194,105,238,1) 100%, rgba(49,153,225,1) 100%, rgba(0,255,4,0.9752275910364145) 100%);'
    }}> 
        <Toolbar >
        
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Product Oasis
          </Typography>
          <Link to='/V'>
          <Button variant="contained" color="secondary">HOME</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/o'>
          <Button variant="contained" color="secondary">ADD</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <br /> <br /> <br></br>
    </div>
  )
}

export default Navbar