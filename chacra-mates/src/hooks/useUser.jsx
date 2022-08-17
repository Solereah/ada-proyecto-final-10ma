import { useRecoilState } from "recoil"

import { authState } from "../Recoil/userAtom"

const useUser = () => {
  const [user, setUser] = useRecoilState(authState)

  const signIn = (data) => setUser(data)

  const signOut = () => setUser(null)

  return {
    user,
    signIn,
    signOut,
  }
}
export { useUser }
