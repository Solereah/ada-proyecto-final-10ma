import { Routes, Route } from "react-router-dom"

import { Layout } from "./layout"

import { Home } from "./pages/Home/"
import { NotFound } from "./pages/NotFound/"
import { Shop } from "./pages/Shop"
import { ProductDetail } from "./pages/ProductDetail"
import { Cart } from "./pages/Cart"
import { Account } from "./pages/Account"
import { AboutUs } from "./pages/AboutUs"
import { CheckoutCart } from "./pages/CheckoutCart"
import { Orders } from "./pages/Orders"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDetail />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account" element={<Account />} />
        <Route path="checkoutCart" element={<CheckoutCart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
