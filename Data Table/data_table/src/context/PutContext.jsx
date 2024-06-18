import { createContext, useState } from "react";

export const PostContext=createContext()

export function PostContexProvider({children}){

    const [id,setid]=useState("")

    return <PostContext.Provider  value={{id,setid}}>{children}</PostContext.Provider>
}
