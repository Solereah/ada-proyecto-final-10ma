import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Switch,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react'
import { ImSearch } from 'react-icons/im'
const Aside = ({
  setFilterTitle,
  setFilterCategory,
  setFilterStock,
  setFilterMaxPrice,
  setFilterMinPrice,
}) => {
  const handleChange = (e) => {
    setFilterTitle(e.target.value)
  }
  const handleOnChangeCategory = (e) => {
    setFilterCategory(e.target.value)
  }
  const handleOnChangeSwitch = (e) => {
    setFilterStock(e.target.checked ? 1 : 0)
  }

  const handleMinPrice = (e) => {
    setFilterMinPrice(e.target.value)
  }
  const handleMaxPrice = (e) => {
    setFilterMaxPrice(e.target.value)
  }
  return (
    <aside>
      <Flex flexDirection="column" ml="10" mt="35px">
        <Flex flexDirection="column">
          <Heading as="h2" size="lg" m="3">
            Productos
          </Heading>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ImSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Buscar Productos"
              onChange={handleChange}
            />
          </InputGroup>
        </Flex>
        <Heading as="h5" size="sm" mt="5" mb="5">
          Filtrar por precio
        </Heading>
        <InputGroup gap="2">
          <Input
            placeholder="mínimo"
            size="sm"
            type="number"
            onChange={handleMaxPrice}
          />
          <Input
            placeholder="máximo"
            size="sm"
            type="number"
            onChange={handleMinPrice}
          />
        </InputGroup>
        <Flex flexDirection="column">
          <Heading as="h5" size="sm" mt="10" mb="1">
            Categorías
          </Heading>
          <Select placeholder="Mates" onChange={handleOnChangeCategory}>
            <option value="mates">Mates</option>
            <option value="bombillas">Bombillas</option>
            <option value="termos">Termos</option>
          </Select>
        </Flex>
        <FormControl display="flex" alignItems="center" mt="3">
          <FormLabel htmlFor="email-alerts" mb="0" size="sm">
            Stock
          </FormLabel>
          <Switch
            id="stock"
            colorScheme="teal"
            onChange={handleOnChangeSwitch}
          />
        </FormControl>
      </Flex>
    </aside>
  )
}
export default Aside
