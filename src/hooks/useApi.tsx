import { IRoom } from "../types/IRoom";

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
    nextCursor: number;
    prevCursor: number;
    allPages: number;
  }> => {
    console.log("API fetching rooms for page:", page);
    await sleep(100);
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
        {
          id: "2",
          rating: 5.0,
          address: {
            country: "Sri Lanka",
            market: "Hemmathagama",
            street: "Sabaragamuwa Province",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",
          price: 14311,
          images: [
            "https://a0.muscache.com/im/pictures/d3b2b902-6143-46e1-90fc-f6eee6f66e42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32368483/311c7115_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36344e78-9c3c-4f9b-adca-c3d0327ed2d9.jpg?im_w=720",
          ],
          listingUrl: "https://a0.muscache.com/",
          name: "Wildvibes A frame Cabin ooty",
          propertyType: "Cabins",
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
          summary:
            "The A-frame cabin offers an escape from metropolitan living. The triangle-shaped homes were popular in US starting in the 50s turns out there structures are coming back to picture and this time they’re here to stay.",
        },
        {
          id: "3",
          rating: 4.9,
          address: {
            country: "India",
            market: "Igatpuri",
            street: "",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",

          images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-31049657/original/37d0a827-358b-4551-859b-e6a64c8e7f1d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-31049657/original/5b2f9870-23bc-4cc4-b93d-cf8946b8b929.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-31049657/original/f7cf2a5e-1ef3-4f46-b3bd-8b9afaec2b71.jpeg?im_w=720",
          ],
          listingUrl: "https://a0.muscache.com/",
          name: "Wildvibes A frame Cabin ooty",
          price: 15990,
          propertyType: "Cabins",
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
          summary:
            "The A-frame cabin offers an escape from metropolitan living. The triangle-shaped homes were popular in US starting in the 50s turns out there structures are coming back to picture and this time they’re here to stay.",
        },
        {
          id: "4",
          rating: 4.9,
          address: {
            country: "India",
            market: "Kainakary South",
            street: "",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",

          images: [
            "https://a0.muscache.com/im/pictures/27013fec-93f9-4250-b9b6-0004a3f6aefb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8c90a719-1eff-46b9-837f-d4d024ea30eb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c8933f07-86d9-4b61-83e8-302bec6987e8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26d1a52d-3db5-40a7-9009-2a34fa307f28.jpg?im_w=720",
          ],
          listingUrl: "https://a0.muscache.com/",
          name: "Wildvibes A frame Cabin ooty",
          price: 5400,
          propertyType: "Cabins",
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
          summary:
            "The A-frame cabin offers an escape from metropolitan living. The triangle-shaped homes were popular in US starting in the 50s turns out there structures are coming back to picture and this time they’re here to stay.",
        },
        {
          id: "7",
          rating: 4.8,
          address: {
            country: "India",
            market: "Ooty",
            street: "",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",

          images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/b45cb018-12a0-42d4-8f5f-594784b75790.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/724a57b5-3670-412c-8a9c-d363018880e3.jpeg?im_w=720",
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
        {
          id: "8",
          rating: 4.9,
          address: {
            country: "India",
            market: "Kainakary South",
            street: "",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",

          images: [
            "https://a0.muscache.com/im/pictures/26d1a52d-3db5-40a7-9009-2a34fa307f28.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/27013fec-93f9-4250-b9b6-0004a3f6aefb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8c90a719-1eff-46b9-837f-d4d024ea30eb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c8933f07-86d9-4b61-83e8-302bec6987e8.jpg?im_w=720",
          ],
          listingUrl: "https://a0.muscache.com/",
          name: "Wildvibes A frame Cabin ooty",
          price: 5400,
          propertyType: "Cabins",
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
          summary:
            "The A-frame cabin offers an escape from metropolitan living. The triangle-shaped homes were popular in US starting in the 50s turns out there structures are coming back to picture and this time they’re here to stay.",
        },
        {
          id: "5",
          rating: 5.0,
          address: {
            country: "Sri Lanka",
            market: "Hemmathagama",
            street: "Sabaragamuwa Province",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",
          price: 14311,
          images: [
            "https://a0.muscache.com/im/pictures/36344e78-9c3c-4f9b-adca-c3d0327ed2d9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d3b2b902-6143-46e1-90fc-f6eee6f66e42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32368483/311c7115_original.jpg?im_w=720",
          ],
          listingUrl: "https://a0.muscache.com/",
          name: "Wildvibes A frame Cabin ooty",
          propertyType: "Cabins",
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
          summary:
            "The A-frame cabin offers an escape from metropolitan living. The triangle-shaped homes were popular in US starting in the 50s turns out there structures are coming back to picture and this time they’re here to stay.",
        },
        {
          id: "6",
          rating: 4.9,
          address: {
            country: "India",
            market: "Igatpuri",
            street: "",
          },
          amenities: ["TV", "Geyser", "Wifi"],
          currency: "INR",

          images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-31049657/original/f7cf2a5e-1ef3-4f46-b3bd-8b9afaec2b71.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-31049657/original/37d0a827-358b-4551-859b-e6a64c8e7f1d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-31049657/original/5b2f9870-23bc-4cc4-b93d-cf8946b8b929.jpeg?im_w=720",
          ],
          listingUrl: "https://a0.muscache.com/",
          name: "Wildvibes A frame Cabin ooty",
          price: 15990,
          propertyType: "Cabins",
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=720",
          summary:
            "The A-frame cabin offers an escape from metropolitan living. The triangle-shaped homes were popular in US starting in the 50s turns out there structures are coming back to picture and this time they’re here to stay.",
        },
      ];
      resolve({
        nextCursor: page + 1,
        prevCursor: page - 1,
        allPages: 20,
        data: results.sort(() => Math.random() - 0.5),
      });
    });
  };

  const sleep = async (time = 1000) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        resolve("");
      }, time)
    );
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
