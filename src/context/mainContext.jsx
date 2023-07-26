import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const MainContext = React.createContext();
export default MainContext;

export const MainProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState("a1");

  useEffect(() => {
    fetchFromAPI("posts").then((response) => setPosts(response));

    fetchFromAPI("authors").then((response) => setAuthors(response));
  }, []);

  useEffect(() => {
    fetchFromAPI(`authors?id=${user}`).then((response) =>
      setUserData(response)
    );

    fetchFromAPI(`posts?author_id=${user}`).then((response) =>
      setUserPosts(response)
    );
  }, [user]);
  // console.log(userPosts);

  return (
    <MainContext.Provider
      value={{
        user,
        userData,
        userPosts,
        posts: { posts },
        authors: { authors },
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
