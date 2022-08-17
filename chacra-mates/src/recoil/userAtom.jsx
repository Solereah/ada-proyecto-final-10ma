import { atom, selector } from "recoil"

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }
const authState = atom({
  key: "user",
  default: null,
  effects: [localStorageEffect("user")],
})

const isUserLogged = selector({
  key: "userLogged",
  get: ({ get }) => {
    const user = get(authState)
    return user
  },
})
export { authState, isUserLogged }
