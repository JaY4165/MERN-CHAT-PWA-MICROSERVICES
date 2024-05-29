import { Container, Box, Card } from "@radix-ui/themes";
import formbg from "/images/formbg.jpg";

const FormCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container size={"1"} className="mt-20 mb-20">
      <Box className="relative shadow-2xl">
        <img
          src={formbg}
          alt="Form Background Image"
          className="absolute blur-3xl opacity-25"
          loading="eager"
        />
        <Card className="backdrop-blur-sm rounded-full max-h-[32rem]">
          {children}
        </Card>
      </Box>
    </Container>
  );
};

export default FormCard;
