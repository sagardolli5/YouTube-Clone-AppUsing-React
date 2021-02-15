import React, { Component } from "react";
import { Grid } from "@material-ui/core"; //this is not a default export that's why we use the {} ex-{Grid}
import youtube from "./api/youtube"; //this is a default export that's why we didit use the {} ex-{youtube}
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("PS5 (India Unit): My Experience! - Beebom Beebom");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet", //it means that it can return our videos
        maxResults: 5, //featch max 5 videos
        key: "AIzaSyBtdACm0uE52dHdNMGyQRpoXMkfv0Q3CUU",
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    //console.log(response.data.items);
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
