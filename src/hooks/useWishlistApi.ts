import { IRoom } from "../types";

const wishlistApi = () => {
  const getWishLists = async (userId: string): Promise<IRoom[]> => {
    const result = await fetch(
      `https://airbnb.deno.dev/api/v1/wishlists/${userId}`,
    );
    return result.json();
  };
  const addToWishlists = async (
    userId: string,
    data: IRoom,
  ): Promise<IRoom[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const result = await fetch(
      ` https://airbnb.deno.dev/api/v1/wishlists/${userId}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: myHeaders,
      },
    );
    return result.json();
  };

  const removeFromWishlists = async (
    userId: string,
    data: IRoom,
  ): Promise<IRoom[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const result = await fetch(
      `https://airbnb.com/api/v1/wishlists/${userId}`,
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: myHeaders,
      },
    );

    return result.json();
  };
  return {
    getWishLists,
    addToWishlists,
    removeFromWishlists,
  };
};

export default wishlistApi;
