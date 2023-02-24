import React, { useEffect,useState } from 'react'
import { Box } from '@mui/system'
import { feedFromAPI } from '../utils/feedFromAPI'
import { useParams } from 'react-router-dom'
import {Videos,ChannelCard} from './indexes'
const ChannelDetail = () => {
  const [channeldetails, setChanneldetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id }=useParams();
  useEffect(() => {
  feedFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChanneldetails(data?.items[0]));
  feedFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id]);
  
  return (
    <Box sx={{minHeight:'95vh'}}>
      <Box >
        <div style={{
          background:'linear-gradient(90deg, rgba(50,237,237,1) 0%, rgba(222,1,229,1) 100%, rgba(8,207,239,1) 100%)',
          zIndex:10,
          height:'200px',
        }} />
        <ChannelCard channelDetail={channeldetails} marginTop='-95px' />
      </Box>
      <Box  sx={{display:'flex',p:8}}>
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail