import { useEffect, useState } from "react"

import axios from "axios"

import { useUser } from "./useUser"
const populate = "?populate[0]=image"
const URLBASE = "https://chacra-mates-production.up.railway.app/api/"

const useGet = (id = "") => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState("")

  const { user } = useUser()
  const header = user ? { Authorization: `Bearer ${user.jwt}` } : {}
  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      const response = await axios.get(
        `${URLBASE}${id}${populate}${filters}`,
        header
      )
      setData(response.data.data)
      setIsLoading(false)
    }
    getData()
  }, [filters])
  console.log(data)
  return { data, isLoading, setFilters }
}
export { useGet }
