import { Box, Grid } from "@radix-ui/themes";
// import formbg from "/images/formbg"

const ChatSpace = () => {
  return (
    <main className="p-2">
      <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
        <Box className="bg-red-500" />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Grid>
    </main>
  );
};

export default ChatSpace;
