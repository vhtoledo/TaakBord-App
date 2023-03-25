import { createContext } from 'react';

interface ContextProps {
   sidemenuOpen: boolean;

   // methods
   closeSideMenu: () => void;
   openSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps );