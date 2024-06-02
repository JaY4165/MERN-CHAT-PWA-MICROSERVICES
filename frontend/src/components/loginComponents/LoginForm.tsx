import { Button, TextField } from "@radix-ui/themes";
import FormCard from "../shared/FormCard";
import * as Form from "@radix-ui/react-form";
import { useTheme } from "next-themes";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

export const LoginFormSchema = z.object({
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
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

const LoginForm = () => {
  const navigate = useNavigate({ from: "/login" });
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginUser: SubmitHandler<LoginFormType> = async (data) => {
    console.log(data);
    axios
      .post(
        "http://localhost:8080/api/auth/login",
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
        if (data.status !== 200) {
          toast.error("User Login Failed");
          return;
        } else {
          console.log(data);
          const { accessToken, refreshToken } = data.data;
          toast.success("User Logged in Successfully");
          Cookies.set("accessToken", accessToken, {
            expires: 3 * 60 * 1000,
            // sameSite: "Lax",
            // secure: true,
            // domain: "http://localhost:5173/",
            // path: "/",
          });
          Cookies.set("refreshToken", refreshToken, {
            expires: 5 * 60 * 1000,
            // sameSite: "Lax",
            // secure: true,
            // domain: "http://localhost:5173/",
            // path: "/",
          });
          navigate({
            to: "/chat",
            replace: true,
          });
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
        onSubmit={handleSubmit(loginUser)}
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
              {/* {errors?.email?.message} */}
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
              {/* {errors?.password?.message} */}
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

export default LoginForm;
