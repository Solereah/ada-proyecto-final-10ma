import { CheckIcon } from "@chakra-ui/icons"
import {
  Box,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react"

const OrderCard = ({ order }) => {
  return (
    <Box>
      <Box
        maxW={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            Pedidos
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text color={"gray.500"}>Orden</Text>
            <Text fontSize={"3xl"} fontWeight={800}>
              #{order.id}
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            {order.attributes.Item.map((item) => (
              <>
                <ListItem key={item.id} fontSize="sm">
                  <ListIcon as={CheckIcon} color="green.400" />

                  {item.attributes.title}
                </ListItem>
              </>
            ))}

            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Fecha de compra :
              {new Date(order.attributes.createdAt).toLocaleDateString()}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}
export { OrderCard }
