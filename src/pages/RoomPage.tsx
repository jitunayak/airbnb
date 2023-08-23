import { useParams } from "@tanstack/router";

function RoomPage() {
  const { roomId } = useParams();

  return <div>RoomPage {roomId}</div>;
}

export default RoomPage;
