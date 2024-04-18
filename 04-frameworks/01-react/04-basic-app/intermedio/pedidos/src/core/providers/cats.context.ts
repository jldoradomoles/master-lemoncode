import { createContext } from "react";
import { catEntityContext } from "./cats-list.vm";

// Crea el contexto
export const CatsContext = createContext<catEntityContext>(null);
