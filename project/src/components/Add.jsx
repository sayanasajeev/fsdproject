import { Button, TextField } from '@mui/material'
import React from 'react'
import './Add.css'

const Add = () => {
  return (
    
       
    <div className='react'>
        <h1 className='co'>ADD PRODUCT</h1>
        <br />
        <TextField id='sub' label ='Product Name' variant='outlined'/><br/><br/><br/>
        <TextField  id='sub'label ='Price' variant='outlined'/><br/><br/><br/>
        <TextField id='sub' label ='descripion' variant='outlined'/><br/><br/><br/>
        <TextField id='sub' label ='category' variant='outlined'/><br/><br/><br/>
        <Button className='b' variant='contained'>ADD PRODUCT</Button><br/><br/>
    </div>
  )
}


export default Add