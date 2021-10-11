import { createContext, Dispatch, SetStateAction } from "react";

const BackgroundContext = createContext<Dispatch<SetStateAction<string>>>(
  () => {}
);

export default BackgroundContext;
