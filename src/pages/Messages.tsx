import { Row } from '@/components';
import { Button } from '@/components/Button';
import { getSocket } from '@/socket';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { PowerIcon, PowerOffIcon, SendIcon } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

type IMessage = { message: string; user: string };
export const Messages: React.FC = () => {
  const socket = useMemo(() => getSocket(), []);
  const { user } = useKindeAuth();
  const [inputText, setInputText] = useState('');
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setmessages] = useState<IMessage[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageEvent(value: IMessage) {
      setmessages((previous) => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessageEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
      socket.close();
    };
  }, []);

  return (
    <div style={{ width: '40rem' }}>
      <h2>Welcome {user?.given_name ?? 'Guest'}</h2>
      <div
        style={{ alignItems: 'center', display: 'inline-flex', gap: '1rem' }}
      >
        {isConnected ? (
          <PowerIcon color="green" size={18} />
        ) : (
          <PowerOffIcon color="red" size={18} />
        )}
        <p>Socket connected: {isConnected ? 'Yes' : 'No'}</p>
      </div>
      <div
        style={{
          border: '1px solid #0101',
          borderRadius: '8px',
          height: '400px',
          marginBottom: '1rem',
          overflow: 'auto',
          padding: '20px',
        }}
      >
        {messages.map((event) => (
          <div
            style={{
              alignItems: 'center',
              border: '1px solid #ccc',
              borderRadius: '24px',
              display: 'flex',
              gap: '16px',
              justifyContent: 'flex-start',
              marginBottom: '1rem',
              padding: '8px',
              paddingRight: '1rem',
              width: 'max-content',
            }}
            key={event.message}
          >
            <div>
              <span
                style={{
                  alignItems: 'center',
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  color: 'white',
                  display: 'inline-flex',
                  fontSize: '14px',
                  fontWeight: '600',
                  height: '32px',
                  justifyContent: 'center',
                  width: '32px',
                }}
              >
                {event.user}
              </span>
            </div>
            <div style={{ fontSize: '14px' }}>{event.message}</div>
          </div>
        ))}
      </div>

      <Row style={{ gap: '.6rem' }}>
        <input
          style={{
            backgroundColor: '#0101',
            border: '1px solid #0101',
            borderRadius: '12px',
            fontSize: '18px',
            opacity: '0.8',
            padding: '14px',
            width: '100%',
          }}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message"
          type="text"
          value={inputText}
        />
        <Button
          onClick={() => {
            socket.emit('message', inputText);
            setmessages((previous) => [
              ...previous,
              {
                message: inputText,
                user:
                  `${user?.given_name?.substring(0, 1).toUpperCase()}${user?.family_name?.substring(0, 1).toUpperCase()}` ||
                  'G',
              },
            ]);
            setInputText('');
          }}
          color={'primary'}
          round={'s'}
          size={'l'}
        >
          <SendIcon size={16} />
          Send
        </Button>
      </Row>
    </div>
  );
};

export default Messages;
