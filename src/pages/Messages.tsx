import { Row } from '@/components';
import { Button } from '@/components/Button';
import { socket } from '@/socket';
import { SendIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Messages: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setmessages] = useState<string[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageEvent(value: string) {
      setmessages((previous) => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessageEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
    };
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <div>
        <p>Is connected: {isConnected ? 'Yes' : 'No'}</p>
        <p>Number of events: {messages.length}</p>
      </div>

      {messages.map((event) => (
        <p key={event}>{event}</p>
      ))}

      <Row style={{ gap: '.6rem' }}>
        <input
          style={{
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '16px',
            padding: '6px',
          }}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          value={inputText}
        />
        <Button
          onClick={() => {
            socket.emit('message', inputText);
            setmessages((previous) => [...previous, inputText]);
            setInputText('');
          }}
          color={'primary'}
          round={'xs'}
        >
          <SendIcon size={16} />
          Send
        </Button>
      </Row>
    </div>
  );
};

export default Messages;
