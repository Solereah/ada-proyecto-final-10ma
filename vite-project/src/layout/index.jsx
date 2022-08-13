import { Stack } from "@chakra-ui/react"

import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = ({ children }) => {
  return (
    <Stack>
      <Header />

      <main>{children}</main>

      <Footer />
    </Stack>
  )
}
export { Layout }
