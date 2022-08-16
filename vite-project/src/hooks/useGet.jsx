import { useEffect, useState } from "react"

import axios from "axios"

import { useUser } from "./useUser"
const populate = "?populate[0]=image"
const URLBASE = "https://chacra-mates-production.up.railway.app/api/"

const useGet = (id = "") => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useUser()
  const header = user ? { Authorization: `Bearer ${user.jwt}` } : {}
  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      const response = await axios.get(`${URLBASE}${id}${populate}`, header)
      setData(response.data.data)
      setIsLoading(false)
    }
    getData()
  }, [])
  console.log(data)
  return { data, isLoading }
}
export { useGet }
