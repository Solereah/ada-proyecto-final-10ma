import { Divider, Stack } from "@chakra-ui/react"

import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = ({ children }) => {
  return (
    <Stack>
      <Header />
      <Divider />

      <main>{children}</main>

      <Footer />
    </Stack>
  )
}
export { Layout }
