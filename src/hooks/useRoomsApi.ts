import axios from 'axios';

import { IBookingConfirmationPayload, IRoom } from '../types';
import { sleep } from '../utils';
import { getLocalStorage } from '../utils/LocalStorage';

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
    const rooms: IRoom[] = (
      await axios.get(`${BASE_URL}/api/v1/rooms?page=${page}`)
    ).data;

    const data = rooms
      .map((item) => ({
        ...item,
        id: item.id,
        images: item.images,
      }))
      .sort((a, b) => a.id.localeCompare(b.id)) as unknown as IRoom[];
    return {
      allPages: 20,
      data,
      nextCursor: page === 20 ? undefined : page + 1,
      prevCursor: page === 1 ? 1 : page - 1,
    };
  };

  const getRoomById = async (roomId: string) => {
    return axios
      .get(`${BASE_URL}/api/v1/rooms/${roomId}`)
      .then((res) => res.data as Promise<IRoom>);
  };

  const sendBookingEmail = async (
    payload: Pick<IBookingConfirmationPayload, 'checkInDate' | 'checkOutDate'>
  ) => {
    return axios.post(
      `${BASE_URL}/api/v1/emails?action=bookingConfirmation`,
      {
        ...payload,
        email: JSON.parse(localStorage.getItem('user') || '')?.email,
        name: JSON.parse(localStorage.getItem('user') || '')?.given_name,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
      }
    );
  };

  const addRoom = async (payload: unknown) => {
    return axios.post(`${BASE_URL}/api/v1/rooms`, payload, {
      headers: {
        Authorization: 'Bearer ' + getLocalStorage('accessToken'),
        'Content-Type': 'application/json',
      },
    });
  };

  return {
    addRoom,
    fetchRooms,
    getRoomById,
    sendBookingEmail,
  };
};

export default useRoomsApi;
