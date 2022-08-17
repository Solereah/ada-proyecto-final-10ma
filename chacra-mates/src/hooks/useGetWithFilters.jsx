import { useEffect, useState } from "react"

import axios from "axios"
import { useRecoilValue } from "recoil"

import { authState } from "../recoil/userAtom"
const populate = "?populate[0]=image"
const URLBASE = "https://chacra-mates-production.up.railway.app/api/products/"

const getFilterTitle = (filterTitle) => {
  return filterTitle ? `&filters[title][$containsi]=${filterTitle}` : ""
}
const getFilterCategory = (filterCategory) => {
  return filterCategory ? `&filters[categories][name]=${filterCategory}` : ""
}
const getFilterStock = (filterStock) => {
  return filterStock ? `&filters[stock][$gte]=${filterStock}` : ""
}

const getFilterMinPrice = (filterMinPrice) => {
  return filterMinPrice ? `&filters[price][$lte]=${filterMinPrice}` : ""
}
const getFilterMaxPrice = (filterMaxPrice) => {
  return filterMaxPrice ? `&filters[price][$gte]=${filterMaxPrice}` : ""
}
const useGetWithFilters = () => {
  const [data, setData] = useState(null)
  const user = useRecoilValue(authState)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [filterTitle, setFilterTitle] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterStock, setFilterStock] = useState()
  const [filterMinPrice, setFilterMinPrice] = useState()
  const [filterMaxPrice, setFilterMaxPrice] = useState()

  const [page, setPage] = useState(1)
  const [metaPagination, setMetaPagination] = useState(null)
  const header = user ? { Authorization: `Bearer ${user.jwt}` } : {}
  const prevPage = () => setPage(page - 1)
  const nextPage = () => setPage(page + 1)
  const disablePrevPage = page === 1
  const disableNextPage = page === metaPagination

  const getProducts = () => {
    axios
      .get(
        `${URLBASE}${populate}&pagination[page]=${page}&pagination[pageSize]=6${getFilterCategory(
          filterCategory
        )}${getFilterTitle(filterTitle)}${getFilterStock(
          filterStock
        )}${getFilterMinPrice(filterMinPrice)}${getFilterMaxPrice(
          filterMaxPrice
        )}`,
        header
      )
      .then((resp) => {
        setData(resp.data.data)
        setMetaPagination(resp.data.meta.pagination.pageCount)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getProducts()
  }, [
    page,
    metaPagination,
    filterCategory,
    filterTitle,
    filterStock,
    filterMinPrice,
    filterMaxPrice,
  ])
  return {
    data,
    isLoading,
    filterCategory,
    filterTitle,
    setFilterTitle,
    error,
    setFilterCategory,
    setFilterStock,
    setFilterMinPrice,
    prevPage,
    nextPage,
    disablePrevPage,
    disableNextPage,
    setFilterMaxPrice,
    filterMinPrice,
    filterMaxPrice,
  }
}
export { useGetWithFilters }
