import { Link } from "react-router-dom"
import { CardMedia,Box,CardContent, Typography} from "@mui/material"
import {demoProfilePicture} from '../utils/constants'
import { CheckCircle } from "@mui/icons-material"
const ChannelCard = ({channelDetail,marginTop})=>{
  return(
    <Box 
    sx={{
      boxShadow:'none',
      borderRadius:'0',
      display:'flex',
      justifyContent:'center',
      width:{md:'320px',xs:'250px'},
      height:'180px',
      margin:'auto',
      marginTop,
        }} >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
        sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',alignItems:'center',color:'white'}}
        >
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          sx={{borderRadius:'50%',width:'120px',height:'120px',mb:2,border:'2px solid grey',
        }}

          />
          <Typography variant="subtitle1">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ml:'5px',fontSize:14,color:'gray'}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{color:'gray'}}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}  Subscribers
            </Typography>)}
        </CardContent>
      </Link>
    </Box>
  )
}


export default ChannelCard