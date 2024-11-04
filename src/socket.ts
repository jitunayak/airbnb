import { Socket, io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_BASE_URL as string;

let socket: Socket;

export const getSocket = () => {
  if (!socket) {
    io(URL, { autoConnect: false });
  }
  return socket;
};
