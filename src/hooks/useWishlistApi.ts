import { IRoom } from "../types";
import { API } from "./API";

const api = new API();

const wishlistApi = () => {
  const getWishLists = async (userId: string): Promise<IRoom[]> => {
    const result = await api.get(`/wishlists/${userId}`);
    return result as IRoom[];
  };
  const addToWishlists = async (
    userId: string,
    data: IRoom,
  ): Promise<IRoom[]> => {
    const result = await api.post(`/wishlists/${userId}`, data);
    return result as IRoom[];
  };

  const removeFromWishlists = async (
    userId: string,
    data: IRoom,
  ): Promise<IRoom[]> => {
    const result = await api.delete(`/wishlists/${userId}`, data);
    return result as IRoom[];
  };

  return {
    addToWishlists,
    getWishLists,
    removeFromWishlists,
  };
};

export default wishlistApi;
