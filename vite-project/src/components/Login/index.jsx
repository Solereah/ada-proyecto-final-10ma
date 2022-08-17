import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useUser } from "../../hooks/useUser"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const userSchema = yup
  .object({
    email: yup
      .string()
      .email("No cumple con el formato de email")
      .required("Debe ingresar un email"),
    password: yup.string().required().min(8),
  })
  .required()
const Login = () => {
  const { signIn, user } = useUser()
  const [showPassword, setShowPassword] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  })
  const onSubmit = ({ email, password }) => {
    axios
      .post("https://chacra-mates-production.up.railway.app/api/auth/local", {
        identifier: email,
        password,
      })
      .then((response) => {
        signIn({ ...response.data.user, jwt: response.data.jwt })
      })
      .catch((error) => {
        console.log("An error occurred:", error.response)
      })
    console.log(user, signIn)
  }

  return (
    <Flex>
      <Stack>
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.mail} isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                id="email-login"
                name="email"
                {...register("email", {
                  required: "Debe ingresar un mail",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password} isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password-login"
                  name="password"
                  {...register("password", {
                    required: "Debe ingresar una contraseña",
                    minLength: {
                      value: 8,
                      message:
                        "La contraseña debe tener 8 caracteres como mínimo ",
                    },
                  })}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"green.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "brand.700",
                }}
                isLoading={isSubmitting}
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Flex>
  )
}

export { Login }
