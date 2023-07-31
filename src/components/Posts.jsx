import { Box, Stack } from "@mui/material";
import PostCard from "./PostCard";
import PostSkeleton from "./PostSkeleton";
import { useContext } from "react";
import MainContext from "../context/mainContext";

const Posts = () => {
  const { posts } = useContext(MainContext);

  return !posts?.length ? (
    <PostSkeleton />
  ) : (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={10}
      my={5}
    >
      {posts.map((item, id) => (
        <Box key={id}>
          <PostCard post={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default Posts;
