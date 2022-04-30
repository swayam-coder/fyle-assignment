import { useUserContext } from "../contexts/user";
import { Image } from "@mantine/core";
import { Redirect } from "wouter";
import UserDetails from "./UserDetails";
import PaginatedComponent from "./PaginatedComponent";

export default function Profile() {
  const usercontext = useUserContext();

  return (
    <>
      {usercontext?.userInfo ? 
        <>
          <UserDetails usercontext={usercontext} />
          <PaginatedComponent usercontext={usercontext} />
        </>
        : 
        <Redirect to="/" />
      }
    </>
  );
}
