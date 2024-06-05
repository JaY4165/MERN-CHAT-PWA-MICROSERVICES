import {
  Avatar,
  Box,
  Card,
  Flex,
  Separator,
  TextField,
} from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { cn } from "../../lib/utils";

const UserChat = () => {
  const { theme } = useTheme();
  return (
    <section className="p-4 relative h-full">
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
        <Box className="w-full space-y-6 overflow-y-scroll max-h-[70vh] no-scrollbar p-2">
          <div className="flex justify-end gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-2"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">Hi</p>
              </Card>
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-0"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error ratione laboriosam porro omnis nam dicta qui incidunt
                  odio, vel similique ipsum officiis quae voluptatum labore
                  architecto perferendis repellendus earum. Dolores.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-2"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">Hi</p>
              </Card>
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-0"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error ratione laboriosam porro omnis nam dicta qui incidunt
                  odio, vel similique ipsum officiis quae voluptatum labore
                  architecto perferendis repellendus earum. Dolores.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-2"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">Hi</p>
              </Card>
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-0"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error ratione laboriosam porro omnis nam dicta qui incidunt
                  odio, vel similique ipsum officiis quae voluptatum labore
                  architecto perferendis repellendus earum. Dolores.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-2"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">Hi</p>
              </Card>
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-0"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error ratione laboriosam porro omnis nam dicta qui incidunt
                  odio, vel similique ipsum officiis quae voluptatum labore
                  architecto perferendis repellendus earum. Dolores.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-2"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">Hi</p>
              </Card>
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <Avatar
              size="1"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="order-0"
            />
            <div className=" p-2 rounded-lg">
              <Card
                className={cn(
                  theme === "light"
                    ? "bg-[rgba(255,255,255,0.3)] text-black"
                    : "bg-[rgba(21,27,30,0.5)] text-white"
                )}
                variant="ghost"
              >
                <p className="text-sm break-all text-pretty">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error ratione laboriosam porro omnis nam dicta qui incidunt
                  odio, vel similique ipsum officiis quae voluptatum labore
                  architecto perferendis repellendus earum. Dolores.
                </p>
              </Card>
            </div>
          </div>
        </Box>
      </div>
      <Box className="mt-2 pl-2 absolute top-[89%] w-11/12 max-w-[94%]">
        {/* <input
          type="text"
          placeholder="Type a message"
          className="w-full p-2 rounded-lg border-none bg-[rgba(21,27,30,0.5)] text-white"
        /> */}
        <TextField.Root
          placeholder="Search for chats"
          className=""
          variant="soft"
          radius="medium"
          color={theme === "dark" ? "gray" : "mint"}
        ></TextField.Root>
      </Box>
    </section>
  );
};

export default UserChat;
