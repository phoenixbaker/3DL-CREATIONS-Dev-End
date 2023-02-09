import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type UserType = {
  __v: number;
  _id: string;
  dateCreated: string;
  dev: boolean;
  email: string;
  lastEdited: string;
  name: string;
  password: string;
};

type UserContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type UserContextProviderType = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<UserType>({} as UserType);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
