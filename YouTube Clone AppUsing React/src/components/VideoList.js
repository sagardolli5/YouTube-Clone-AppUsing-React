import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect }) {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />
  ));
  return (
    <Grid container spacing={2}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;
