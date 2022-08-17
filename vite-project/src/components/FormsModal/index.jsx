import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react"
import { Login } from "../Login"
import { useRecoilState } from "recoil"
import { isUserLogged } from "../../recoil/userAtom"
import { SignUp } from "../SignUp"
import { FaRegUser } from "react-icons/fa"

const FormsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [user] = useRecoilState(isUserLogged)
  if (!user) {
    return (
      <Flex>
        <Button mt={4} onClick={onOpen} bg="none">
          <FaRegUser />
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />

            <Tabs isFitted w="400px">
              <TabList mb="1em">
                <Tab>Ingresar</Tab>
                <Tab>Registrarse</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <SignUp />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalContent>
        </Modal>
      </Flex>
    )
  }
}
export { FormsModal }
