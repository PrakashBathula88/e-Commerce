
import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

import Authcontext from "../LoginProvider/Loginprovider";
const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(Authcontext); 

  const AddTocart = (listItem) => {
    setCartItems([...CartItems, listItem]);
    if (token) {
      axios.post(`https://crudcrud.com/api/262397006ad44ab8bc3649ba4c629827/cart/${token}`, listItem)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(`https://crudcrud.com/api/262397006ad44ab8bc3649ba4c629827/cart/${token}`);
          setCartItems(response.data);
          setLoad(true);
        }
      } catch (error) {
        setError("DATA ERROR");
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  const HandleRemove = (index) => {
    const newItems = [...CartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  return (
    <ProductContext.Provider value={{ AddTocart, CartItems, HandleRemove }}>
      {children}
    </ProductContext.Provider>
  );
};
