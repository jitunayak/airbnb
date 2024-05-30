// import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

import { IRoom } from '../types';
import { sleep } from '../utils';
import mockedRooms from './mockFetchRooms.json';

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);

const useRoomsApi = () => {
  const fetchHomePageResults = async () => {
    const response = await fetch(
      'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features'
    );
    return response.json();
  };

  const fetchRooms = async (
    page: number = 1
  ): Promise<{
    allPages: number;
    data: IRoom[];
    nextCursor?: number;
    prevCursor?: number;
  }> => {
    // console.log("API fetching rooms for page:", page);
    await sleep(100);
    const data = mockedRooms
      .map((item) => ({
        ...item,
        id: String(parseInt(item.id) + page * 10),
        images: item.images,
      }))
      .sort((a, b) => a.id.localeCompare(b.id)) as unknown as IRoom[];
    return new Promise((resolve) => {
      resolve({
        allPages: 20,
        data,
        nextCursor: page === 20 ? undefined : page + 1,
        prevCursor: page === 1 ? 1 : page - 1,
      });
    });
  };

  const getRoomById = async (roomId: string) => {
    return fetch(`${BASE_URL}/api/v1/rooms/${roomId}`).then(
      (res) => res.json() as Promise<IRoom>
    );
  };

  const sendBookingEmail = async () => {
    return fetch(`${BASE_URL}/api/v1/emails?action=bookingConfirmation`).then(
      (res) => res.json()
    );
  };
  return {
    fetchHomePageResults,
    fetchRooms,
    getRoomById,
    sendBookingEmail,
  };
};

export default useRoomsApi;
