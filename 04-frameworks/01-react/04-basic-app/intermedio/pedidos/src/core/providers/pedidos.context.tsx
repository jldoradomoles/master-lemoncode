import { createContext } from "react";
import { PedidoEntityContext } from "./pedidos.vm";

// Crea el contexto
export const CatsContext = createContext<PedidoEntityContext>(null);
