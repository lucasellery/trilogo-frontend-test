import { createContext } from "react";
import { loadLists } from "../services/api";

const data = loadLists()

export default createContext({
  lists: [],
  move: () => {},
  listHead: data.title
})
