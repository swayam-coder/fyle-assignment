import React from "react"
import { Route } from "wouter";
import ContextProvider from "../contexts/user";
const Input = React.lazy(() => import("./Input")) 
const Profile = React.lazy(() => import("./Profile"))

export default function App() {
  return (
    <>
      <ContextProvider>
        <React.Suspense fallback>
          <Route path="/" component={Input} />
          <Route path="/userinfo/:name" component={Profile} />
        </React.Suspense>
      </ContextProvider>
    </>
  );
}
