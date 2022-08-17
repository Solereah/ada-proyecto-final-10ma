import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useUser } from "../../hooks/useUser"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const userSchema = yup
  .object({
    username: yup.string().required("Debe ingresar su nombre completo"),
    email: yup
      .string()
      .email("No cumple con el formato de email")
      .required("Debe ingresar un email"),
    password: yup
      .string()
      .required("La contraseña debe un mínimo de 8 caracteres")
      .min(8),
  })
  .required()
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { signIn } = useUser()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  })

  const onSubmit = ({ name, email, password }) => {
    axios
      .post(
        "https://chacra-mates-production.up.railway.app/api/auth/local/register",
        {
          username: name,
          email,
          password,
        }
      )
      .then((response) => {
        signIn(response.data.user)
      })
      .catch((error) => {
        console.log("An error occurred:", error.response)
      })
  }

  return (
    <Flex>
      <Stack>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Registrate
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            para disfrutar de unos buenos mates ✌️
          </Text>
        </Stack>

        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                {...register("name", {
                  required: "Ingrese su nombre completo",
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.mail} isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                id="email-signUp"
                name="email"
                {...register("email", {
                  required: "Debe ingresar un formato de mail",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
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
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "brand.700",
                }}
                isLoading={isSubmitting}
                type="submit"
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"green.400"}>Login</Link>
              </Text>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Flex>
  )
}
export { SignUp }
