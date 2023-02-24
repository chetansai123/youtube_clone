import {useState,useEffect} from 'react'
import {Stack,Box,Typography} from '@mui/material'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import { feedFromAPI } from '../utils/feedFromAPI'
import { Videos } from './indexes'
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const {id}=useParams();
  console.log(videoDetail)
  useEffect(() => {
        feedFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>
          setVideoDetail(data.items[0])
        );
        feedFromAPI(`search?part=snippet&relatedToVideoId=${id}`).then((data)=>
          setVideos(data.items)
        )
  }, [id]);
  if(videoDetail?.snippet==null) return "Loading...";
  const {snippet:{title,channelId,channelTitle},
  statistics:{likeCount,viewCount}} =videoDetail;
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column',md:'row'}}>
          <Box flex={1}>
            <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls  />
            <Typography variant='h5'  sx={{fontWeight:'bold',p:2}}>
                  {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' p={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1',md:'h5'}} sx={{color:'white'}}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:14,ml:'5px',color:'gray'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center' >
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
            </Box>
          </Box>
          <Box px={2} py={{xs:1,md:2}} alignItems='center' justifyContent='center'>
            <Videos videos={videos} direction='column' />
          </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail