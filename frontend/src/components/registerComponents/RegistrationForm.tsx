import { Button, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useTheme } from "next-themes";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import FormCard from "../shared/FormCard";
import { useNavigate } from "@tanstack/react-router";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RegistrationFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters." })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        }
      ),
    confirmPassword: z.string().min(8, {
      message: "Confirm Password must contain at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type RegistrationFormType = z.infer<typeof RegistrationFormSchema>;

const RegistrationForm = () => {
  const { theme } = useTheme();
  const navigate = useNavigate({ from: "/register" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const registerUser: SubmitHandler<RegistrationFormType> = async (data) => {
    console.log(data);
    axios
      .post(
        "http://localhost:8080/api/auth/signup",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        if (data.status !== 201) {
          toast.error("User Registration Failed");
          return;
        } else {
          toast.success("User Registered Successfully");
          toast.info("Login to your account");
          navigate({
            to: "/login",
          });
          console.log(data);
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data);
        console.log(err?.response?.data);
      });
  };

  return (
    <FormCard>
      <Form.Root
        className="flex space-y-10 flex-col"
        onSubmit={handleSubmit(registerUser)}
      >
        <Form.Field name="email" className="space-y-2">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control asChild {...register("email")}>
            <TextField.Root
              id="email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </Form.Control>
          {errors?.email && (
            <Form.Message className="text-red-500 text-sm">
              {errors?.email?.message}
            </Form.Message>
          )}
        </Form.Field>
        <Form.Field name="password" className="space-y-2">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control asChild {...register("password")}>
            <TextField.Root
              id="password"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </Form.Control>
          {errors?.password && (
            <Form.Message className="text-red-500 text-sm">
              {errors?.password?.message}
            </Form.Message>
          )}
        </Form.Field>
        <Form.Field name="confirmPassword" className="space-y-2">
          <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
          <Form.FormControl asChild {...register("confirmPassword")}>
            <TextField.Root
              id="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              required
            />
          </Form.FormControl>
          {errors?.confirmPassword && (
            <Form.Message className="text-red-500 text-sm">
              {errors?.confirmPassword?.message}
            </Form.Message>
          )}
        </Form.Field>
        <Form.Submit type="submit" asChild>
          <Button type="submit" variant={theme === "dark" ? "soft" : "solid"}>
            Create account
          </Button>
        </Form.Submit>
      </Form.Root>
    </FormCard>
  );
};

export default RegistrationForm;
