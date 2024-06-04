import { IRoom } from '@/types';
import client from '@/utils/AxiosClient';
import { QueryFunction } from '@tanstack/react-query';

export const roomByQueryOptions = (roomId: string) => {
  return {
    queryFn: getRoomById,
    queryKey: ['room', roomId],
  };
};

const getRoomById: QueryFunction<IRoom> = async ({ queryKey }) => {
  const [, roomId] = queryKey;
  const response = await client.get<IRoom>(`/api/v1/rooms/${roomId}`);
  return response.data;
};
