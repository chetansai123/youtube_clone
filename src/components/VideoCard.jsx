import { Stack,Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { Card,CardMedia,CardContent,Typography } from '@mui/material'
import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoVideoTitle,demoVideoUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:0}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl} >
      <CardMedia image={snippet?.thumbnails?.high.url}
      alt={snippet?.title}
      sx={{width:350,height:180}} 
      />
      </Link>
      <CardContent sx={{height:'108px',background:'#1e1e1e'}}>
      <Link underline='none'   to={videoId?`/video/${videoId}`:demoVideoUrl} >
        <Typography variant='subtitle1' sx={{color:'white',fontWeight:'bold'}}>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
      </Link>
      <Link underline='none' to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl} >
        <Typography variant='subtitle2'  sx={{color:'gray'}}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ml:'5px',mt:'12px',color:'gray'}}></CheckCircle>
          </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard