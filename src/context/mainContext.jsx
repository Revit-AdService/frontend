import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const MainContext = React.createContext();
export default MainContext;

export const MainProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState("a2");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchFromAPI("posts").then((response) => setPosts(response));

    fetchFromAPI("authors").then((response) => setAuthors(response));
  }, []);

  useEffect(() => {
    fetchFromAPI(`authors/${user}`).then((response) => setUserData(response));

    fetchFromAPI(`posts?author.id=${user}`).then((response) =>
      setUserPosts(response)
    );

    fetchFromAPI(`catalogs/${user}`).then((response) =>
      setProducts(response.products)
    );
  }, [user]);
  return (
    <MainContext.Provider
      value={{
        products,
        user,
        userData,
        userPosts,
        posts,
        authors: { authors },
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
