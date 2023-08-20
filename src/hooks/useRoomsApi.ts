import { IRoom } from "../types";
import { randomizeData, sleep } from "../utils";
import mockedRooms from "./mockFetchRooms.json";

const useRoomsApi = () => {
  const fetchHomePageResults = async () => {
    const response = await fetch(
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features",
    );
    return response.json();
  };

  const fetchRooms = async (
    page: number = 1,
  ): Promise<{
    data: IRoom[];
    nextCursor?: number;
    prevCursor?: number;
    allPages: number;
  }> => {
    console.log("API fetching rooms for page:", page);
    await sleep(100);
    const data: IRoom[] = randomizeData(mockedRooms).map((item) => ({
      ...item,
      id: String(parseInt(item.id) + page * 10),
      images: item.images,
    }));
    return new Promise((resolve) => {
      resolve({
        nextCursor: page === 5 ? undefined : page + 1,
        prevCursor: page === 1 ? 1 : page - 1,
        allPages: 5,
        data,
      });
    });
  };

  return {
    fetchHomePageResults,
    fetchRooms,
  };
};

export default useRoomsApi;
