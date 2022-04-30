import toast from "react-hot-toast";
import { REQUESTS } from "src/types";

export async function getInfo(url: string, type: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Response Not OK");
    }

    return await response.json()
  } catch (error) {
    if(type === REQUESTS.GET_USER_INFO && error instanceof Error && error.message.localeCompare("Not Found")) {
      toast.error("User Not Found", {
        style: {
          background: "red",
          color: "white"
        },
        iconTheme: {
          secondary: "red",
          primary: "white"
        }
      })
    } else {
      toast.error("Something wrong happened");
    }
    console.log(error);
  }
}