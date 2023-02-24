import React,{useState} from 'react'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// import '../index.css'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate=useNavigate();
  const submitHandler=(e)=>{
    e.preventDefault();
    if(searchTerm)
      navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  }
  return (
    <Paper
    component="form"
    onSubmit={submitHandler}
    sx={{
        borderRadius:20,
        border:'1px solid grey',
        boxShadow:'none',
        pl:2,
        mr:{sm:5}
    }}
    >
    <input className='search-bar'  value={searchTerm} placeholder='Search.. ' 
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
    <IconButton type='submit' sx={{p:'10px',color:'red'}}>
        <Search />
    </IconButton>
    </Paper>
  )
}

export default SearchBar