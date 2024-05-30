// import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

import { IRoom } from '../types';
import { sleep } from '../utils';
// import mockedRooms from './mockFetchRooms.json';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useRoomsApi = () => {
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
    const rooms: IRoom[] = await (
      await fetch(`${BASE_URL}/api/v1/rooms?page=${page}`)
    ).json();

    const data = rooms
      .map((item) => ({
        ...item,
        id: item.id,
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

  // const fetchRooms = async () => {
  //   return fetch(`${BASE_URL}/api/v1/rooms`).then((res) => res.json());
  // };

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
    fetchRooms,
    getRoomById,
    sendBookingEmail,
  };
};

export default useRoomsApi;
