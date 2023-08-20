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
        body: JSON.stringify(data),
        headers: myHeaders,
        method: "POST",
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
        body: JSON.stringify(data),
        headers: myHeaders,
        method: "DELETE",
      },
    );

    return result.json();
  };
  return {
    addToWishlists,
    getWishLists,
    removeFromWishlists,
  };
};

export default wishlistApi;
