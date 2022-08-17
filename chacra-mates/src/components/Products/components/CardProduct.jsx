import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { useCart } from "../../../hooks/useCart"
const CardProduct = ({ info }) => {
  const { attributes: product, id } = info

  const { addProduct } = useCart()
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Link to={`/shop/${id}`}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={product.image.data.attributes.url}
            alt={`Picture of ${product.image.data.name}`}
            roundedTop="lg"
          />
          <Flex
            mt="2"
            p="2"
            justifyContent="space-between"
            alignContent="center"
          >
            <Box
              fontSize="2xl"
              as="h4"
              lineHeight="tight"
              isTruncated
              color="brand.700"
            >
              {product.title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a
                href={"#"}
                display={"flex"}
                onClick={() => addProduct(info)}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" p="2">
            <Box fontSize="2xl" color={useColorModeValue("brand.700", "white")}>
              <Box as="span" color={"brand.700"} fontSize="md">
                $
              </Box>
              {product.price}
            </Box>
          </Flex>
        </Box>
      </Link>
    </Flex>
  )
}

export { CardProduct }
