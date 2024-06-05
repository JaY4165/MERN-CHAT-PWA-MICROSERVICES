import { Avatar, Box, Flex, Separator } from "@radix-ui/themes";

const UserChat = () => {
  return (
    <section className="p-4">
      <div>
        <Flex gap="4" align="center">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <h1 className="text-sm">Teodros Girmay</h1>
            <p className="text-xs text-gray-500">Last seen</p>
          </Box>
        </Flex>
        <Separator my="4" size="4" className="opacity-20" />
      </div>
    </section>
  );
};

export default UserChat;
