import { IRoom } from "../types";
import { randomizeData, sleep } from "../utils";
import mockedRooms from "./mockFetchRooms.json";
const useApi = () => {
  const fetchHomePageResults = async () => {
    const response = await fetch(
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features"
    );
    return response.json();
  };

  const fetchRooms = async (
    page: number = 1
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

  const getWishLists = async (): Promise<IRoom[]> => {
    await sleep();
    return new Promise((resolve) => {
      const results: IRoom[] = [
        {
          id: "1",
          rating: 4.8,
          address: {
            country: "India",
            market: "Ooty",
            street: "",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",
          images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/724a57b5-3670-412c-8a9c-d363018880e3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/b45cb018-12a0-42d4-8f5f-594784b75790.jpeg?im_w=720",
          ],
          listingUrl: "https://a0.muscache.com/",
          name: "Wildvibes A frame Cabin ooty",
          price: 5720,
          propertyType: "Cabins",
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
          summary:
            "The A-frame cabin offers an escape from metropolitan living. The triangle-shaped homes were popular in US starting in the 50s turns out there structures are coming back to picture and this time they’re here to stay.",
        },
      ];
      resolve(results);
    });
  };

  return { fetchHomePageResults, fetchRooms, getWishLists };
};

export default useApi;
