import { createContext, useContext, useState } from "react";
import { IUserContext } from "../types";

const usercontext = createContext<IUserContext>({
  userInfo: null,
  setuserInfo: () => {},
  pages: 0,
  setPages: () => {},
  currPage: 0,
  setCurrPage: () => {},
  repourl: "",
  setRepourl: () => {},
  repoInfo: [],
  setrepoInfo: () => {},
});

export function useUserContext() {
  return useContext(usercontext);
}

export default function CheckoutProvider({
  children
}: {
  children: JSX.Element;
}) {
  const [userInfo, setuserInfo] = useState();
  const [repoInfo, setrepoInfo] = useState();
  const [currPage, setCurrPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [repourl, setRepourl] = useState<string>("");

  const val = {
    userInfo,
    setuserInfo,
    repoInfo,
    setrepoInfo,
    currPage,
    setCurrPage,
    pages,
    setPages,
    repourl,
    setRepourl
  };

  return <usercontext.Provider value={val}>{children}</usercontext.Provider>;
}
