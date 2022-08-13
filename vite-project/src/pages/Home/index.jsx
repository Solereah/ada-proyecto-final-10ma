import { Stack } from "@chakra-ui/react"

import { Products } from "../../components/Products"
import { Carousel } from "./components/Carousel"
const Home = () => {
  return (
    <Stack>
      <Carousel />
      <Products />
    </Stack>
  )
}

export { Home }
