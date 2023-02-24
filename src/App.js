import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Box } from "@mui/system";
import { Feed,ChannelDetail,VideoDetail,SearchFeed, Navbar } from './components/indexes'
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'black', color:'white'}} >
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
