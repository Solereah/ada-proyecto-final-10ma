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
export const authState = atom({
  key: "authState",
  default: null,
  effects: [localStorageEffect("user")],
})

export const isUserLoggedState = selector({
  key: "isUserLoggedState",
  get: ({ get }) => {
    const user = get(authState)
    return user
  },
})
