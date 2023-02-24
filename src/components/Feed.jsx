import React, { useEffect,useState } from 'react'
import { Stack,Box } from '@mui/system'
import {SideBar,Videos} from './indexes'
import { Typography } from '@mui/material'
import { feedFromAPI } from '../utils/feedFromAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  return (
    useEffect(() => {
      setVideos([]);
      feedFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items));
    }, [selectedCategory]),
    <Stack
    sx={{flexDirection:{sx:'column', md:'row'},width:'95%'} }
    >
    <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid gray',px:{sx:0,md:2}}} >
    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <Typography className='typography' variant='body2' >
      Copyright Issued 2002
    </Typography>
    </Box>
    <Box padding={2}>
      <Typography variant='h4'  mb={2} sx={{fontWeight:'bold'}}>
        {selectedCategory} <span style={{color:'red'}}>videos</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>

    </Stack>
  )
}

export default Feed