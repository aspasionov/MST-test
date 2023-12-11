import { useContext } from "react";
import { StoreContext } from '../main.jsx'

export default function useStore() {
  return useContext(StoreContext)
}
