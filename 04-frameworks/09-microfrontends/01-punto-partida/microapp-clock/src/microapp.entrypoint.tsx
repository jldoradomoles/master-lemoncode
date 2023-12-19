import "./microapp.styles";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import { Clock } from "./components";

/**
 * Microapp component
 */
const Microapp: React.FC = () => <Clock />;

/**
 * Microapp public interface
 */
export type MicroappRenderFunction = (container: HTMLElement) => void;
export type MicroappUnmountFunction = (container?: HTMLElement) => void;

export interface MicroappInterface {
  render: MicroappRenderFunction;
  unmount: MicroappUnmountFunction;
}

let root: Root;

export const MicroappInterface: MicroappInterface = {
  render: (container) => {
    root = createRoot(container);
    root?.render(<Microapp />);
  },
  unmount: () => root?.unmount(),
};
