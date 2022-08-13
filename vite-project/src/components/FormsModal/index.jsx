import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"
import { Login } from "../Login"
import { useRecoilState } from "recoil"
import { isUserLoggedState } from "../../recoil/userAtom"
import { SignUp } from "../SignUp"
const FormsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [user] = useRecoilState(isUserLoggedState)
  if (!user) {
    return (
      <>
        <Button mt={4} onClick={onOpen}>
          Open Modal
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Tabs isFitted variant="enclosed" w="400px" boxShadow="lg">
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
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
}
export { FormsModal }
