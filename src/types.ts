export interface IUserContext {
  userInfo: any;
  setuserInfo: React.Dispatch<React.SetStateAction<undefined>>;
  repoInfo: any;
  setrepoInfo: React.Dispatch<React.SetStateAction<undefined>>;
  currPage: any;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  pages: any;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  repourl: any;
  setRepourl: React.Dispatch<React.SetStateAction<string>>;
}

export enum REQUESTS {
  GET_USER_INFO = "GET_USER_INFO",
  GET_REPO_INFO = "GET_REPO_INFO",
}

export interface IToasts {
  success: (message: string) => void;
  error: (message: string) => void;
}