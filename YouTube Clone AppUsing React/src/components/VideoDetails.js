import React from "react";
import { Paper, TextField, Typography } from "@material-ui/core";

function videoDetails({ video }) {
  if (!video) return <div>Loading...Please Wait!!</div>;
  //console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Paper elevation={6} style={{ height: "60%" }}>
        <iframe
          frameBorder="0"
          allowfullscreen="allowfullscreen"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography varient="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography varient="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography varient="subtitile2">
          {video.snippet.descriptioln}
        </Typography>
      </Paper>
    </>
  );
}

export default videoDetails;
