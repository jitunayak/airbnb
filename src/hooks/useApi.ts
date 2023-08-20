import useRoomsApi from "./useRoomsApi";
import { default as useWishlistApi } from "./useWishlistApi";

const useApi = () => {
  const wishlistApi = useWishlistApi();
  const roomsApi = useRoomsApi();

  return {
    roomsApi,
    wishlistApi,
  };
};

export default useApi;
