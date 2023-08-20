import { IRoom } from "../types";
import { API } from "./API";

const api = new API();
const WISHLIST_URL = "wishlists";

const wishlistApi = () => {
  const getWishLists = async (userId: string): Promise<IRoom[]> => {
    const result = await api.get(`/${WISHLIST_URL}/${userId}`);
    return result as IRoom[];
  };
  const addToWishlists = async (
    userId: string,
    data: IRoom,
  ): Promise<IRoom> => {
    const result = await api.post(`/${WISHLIST_URL}/${userId}`, data);
    return result as IRoom;
  };

  const removeFromWishlists = async (
    userId: string,
    data: IRoom,
  ): Promise<IRoom> => {
    const result = await api.delete(`/${WISHLIST_URL}/${userId}`, data);
    return result as IRoom;
  };

  return {
    addToWishlists,
    getWishLists,
    removeFromWishlists,
  };
};

export default wishlistApi;
