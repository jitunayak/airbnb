import useRoomsApi from "./useRoomsApi";
import { default as useWishlistApi } from "./useWishlistApi";

const useApi = () => {
  const wishlistApi = useWishlistApi();
  const roomsApi = useRoomsApi();

  return {
    wishlistApi,
    roomsApi,
  };
};

export default useApi;
