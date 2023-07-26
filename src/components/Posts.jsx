import { Box, Stack } from "@mui/material";
import PostCard from "./PostCard";
import PostSkeleton from "./PostSkeleton";

const Posts = ({ posts }) => {
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
