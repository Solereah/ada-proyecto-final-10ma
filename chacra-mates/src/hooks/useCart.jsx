import { useRecoilState } from "recoil"

import { cartState } from "../recoil/cartAtom"

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState)

  const addProduct = (info) => {
    const productExist = cart.some((item) => item.id === info.id)
    if (productExist === false) {
      const productoCantidad = { ...info, cantidad: 1 }
      setCart([...cart, productoCantidad])
    } else {
      setCart(
        cart.map((item) => {
          if (item.id === info.id) {
            return { ...item, cantidad: item.cantidad + 1 }
          }
          return item
        })
      )
    }
  }
  const deleteItemCart = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  }
  const emptyCart = () => {
    setCart([])
  }

  const totalCart = cart.reduce(
    (acc, product) => acc + product.attributes.price * product.cantidad,
    0
  )

  const deleteItemAmount = (info) => {
    const productExist = cart.some((item) => item.id === info.id)
    if (productExist === false) {
      const productoCantidad = { ...info, cantidad: 1 }
      setCart([...cart, productoCantidad])
    } else {
      setCart(
        cart.map((item) => {
          if (item.id === info.id) {
            return { ...item, cantidad: item.cantidad - 1 }
          }
          return item
        })
      )
    }
  }

  return {
    cart,
    addProduct,
    deleteItemCart,
    emptyCart,
    totalCart,
    deleteItemAmount,
  }
}

export { useCart }
