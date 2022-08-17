import { useUser } from "../../hooks/useUser"

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const LoggedMenu = () => {
  const { signOut, user } = useUser()
  return (
    <Menu>
      {" "}
      <MenuButton as={Button} bg="none">
        <FaUserAlt mx="10px" />
      </MenuButton>
      <MenuList>
        <Link to="/account">
          <MenuItem>{user.username}</MenuItem>
        </Link>
        <Link to="/orders">
          <MenuItem>Mis pedidos</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={() => signOut(null)}>Salir</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
export { LoggedMenu }
