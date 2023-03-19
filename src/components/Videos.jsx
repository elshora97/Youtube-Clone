import React from "react";
import { Stack, Box } from "@mui/system";
import { Video } from "./";
import { ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <Video video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
