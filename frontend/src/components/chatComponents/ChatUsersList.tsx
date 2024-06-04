import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

const ChatUsersList = () => {
  return (
    <Box className="px-3 space-y-5 overflow-scroll max-h-[80vh] no-scrollbar">
      {[...Array(20)].map((index) => (
        <Box key={index} className="first:pt-4">
          <Card
            variant="ghost"
            className="hover:bg-[rgba(255,255,255,0.3)] dark:hover:bg-[rgba(0,0,0,0.2)]"
          >
            <Flex align={"start"} justify={"between"}>
              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className="w-[80%] truncate text-ellipsis overflow-hidden "
                    weight="regular"
                  >
                    Teodros Girmay
                  </Text>
                  <Text as="p" size="1" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
              <Box className="mt-1">
                <Text as="div" size="1" color="gray">
                  2:30 PM
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ChatUsersList;
