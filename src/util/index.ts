import toast from "react-hot-toast";
import { IToasts, REQUESTS } from "src/types";

export const toastify: IToasts = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message, {
    style: {
      background: "red",
      color: "white"
    },
    iconTheme: {
      secondary: "red",
      primary: "white"
    }
  }),
}

export async function getInfo(url: string, type: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Response Not OK");
    }

    return await response.json()
  } catch (error) {
    if(type === REQUESTS.GET_USER_INFO && error instanceof Error && error.message.localeCompare("Not Found")) {
      toastify.error("User not found");
    } else {
      toastify.error("Something wrong happened");
    }
    
    console.log(error);
  }
}