import  { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {Videos} from './indexes'
import { Typography,Box, } from '@mui/material'
import { feedFromAPI } from '../utils/feedFromAPI'
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} =useParams();
  return (
    useEffect(() => {
      feedFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items));
    }, [searchTerm]),
    <Box padding={2} sx={{overflowY:'auto',flex:2,height:'100%'}}>
      <Typography variant='h4'  mb={2} sx={{fontWeight:'bold'}}>
       Search results for: <span style={{color:'red'}}>{searchTerm}</span> videos
      </Typography>
      <Box flex={1}  sx={{color:'green',height:'100%',width:'100%',alignItems:'center'}}>
      <Videos videos={videos} justifyContent="center" />
      </Box>
    </Box>
  )
}

export default SearchFeed