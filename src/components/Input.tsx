import React, { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getInfo } from "../util";
import { TextInput, Button, Group } from "@mantine/core";
import { useLocation } from "wouter";
import { useUserContext } from "../contexts/user";
import { REQUESTS } from "../types";
import "../styles/input.css";

export default function Input() {
  const { setuserInfo, setPages, currPage, setRepourl, setrepoInfo, repoInfo, userInfo } = useUserContext();
  const [formInput, setFormInput] = useState("");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if(repoInfo) {
      setLocation(`/userinfo/${formInput}`)
    }
  }, [repoInfo])

  useEffect(() => {
    if(userInfo) { 
      const repourl = userInfo.repos_url;

      getInfo(
        `${repourl}?page=${currPage}&per_page=${6}`, 
        REQUESTS.GET_REPO_INFO).then(repoinfo => setrepoInfo(repoinfo));
      
      setRepourl(repourl);
    }
  }, [userInfo])

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const info = await getInfo(`https://api.github.com/users/${formInput}`, REQUESTS.GET_USER_INFO);
    setuserInfo(info);

    const totalpages = Math.round(info.public_repos / 6);
    setPages(totalpages);
  }

  return (
    <div className="wrapper">
      <h2>Enter Username</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          required
          label="Username"
          placeholder="Enter User Name"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}
