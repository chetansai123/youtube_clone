import React from 'react'
import { Stack } from '@mui/system'
import { logo } from '../utils/constants'
import { Link } from 'react-router-dom'
import {SearchBar} from '../components/indexes'
const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2}  
      sx={{position:'sticky',justifyContent:'space-between',top:0}}>
        <Link to="/" style={{display:'flex', alignItems:'center'}} >
            <img src={logo } alt="logo" height={45} alignItems="center"/>
        </Link>
        <SearchBar />
    </Stack> 
  )
}

export default Navbar