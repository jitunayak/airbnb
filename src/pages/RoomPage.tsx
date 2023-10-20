import { styled } from "../stitches.config";
import { IRoom } from "../types";
import mockRooms from "./../hooks/mockFetchRooms.json";
function RoomPage() {
  //   const { roomId } = useParams();
  const room = mockRooms[0] as IRoom;

  return (
    <PageContainer>
      {/* RoomPage {roomId} */}
      <Title>10BHK Villa De Boqueachi Arrady</Title>
      <SubTitle>Parra, Goa, India</SubTitle>
      <ImageContainer>
        <ImageHover
          height={540}
          src={room.images[0]}
          style={{ borderRadius: "1rem 0rem 0rem 1rem" }}
          width={"100%"}
        />
        <ImageCollage>
          <ImageHover height={265} src={room.images[1]} width={260} />
          <ImageHover
            height={265}
            src={room.images[2]}
            style={{ borderRadius: "0rem 1rem 0rem 0rem" }}
            width={260}
          />
          <ImageHover height={265} src={room.images[2]} width={260} />
          <ImageHover
            height={265}
            src={room.images[0]}
            style={{ borderRadius: "0rem 0rem 1rem 0rem" }}
            width={260}
          />
        </ImageCollage>
      </ImageContainer>
      <HostTitle>Entire home hosted by Keagan</HostTitle>
      <HostSubTitle> 16 + guests 10 bedrooms 10 beds 10 bathrooms</HostSubTitle>
      <BookingContainer>
        <BookingHeaderCutDownPrice>
          ₹{Number(90000).toLocaleString()}{" "}
        </BookingHeaderCutDownPrice>
        <BookingHeaderPrice>
          ₹{Number(72000).toLocaleString()}
        </BookingHeaderPrice>
        <span> night</span>

        <ReserveButton>Reserve</ReserveButton>
        <ReservationMessage>You won't be charged yet</ReservationMessage>
      </BookingContainer>
    </PageContainer>
  );
}

const ReservationMessage = styled("div", {
  fontSize: "small",
  my: ".6rem",
  textAlign: "center",
});
const ReserveButton = styled("button", {
  backgroundColor: "$primary",
  color: "white",
  my: "0.2rem",
  width: "100%",
});

const BookingContainer = styled("div", {
  border: "1px solid #ccc",
  borderRadius: ".4rem",
  boxShadow: "$l",
  marginTop: "2rem",
  padding: "1.2rem",
  width: "fit-content",
});
const BookingHeaderPrice = styled("span", {
  fontSize: "1.4rem",
  fontWeight: "600",
});

const BookingHeaderCutDownPrice = styled("span", {
  color: "$textSecondary",
  fontSize: "1.4rem",
  fontWeight: "600",
  textDecoration: "line-through",
});
const ImageCollage = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: ".5rem",
});

const ImageContainer = styled("div", {
  display: "inline-flex",
  gap: ".5rem",
  marginTop: "2rem",
});

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "2rem",
  maxWidth: "70rem",
  width: "100%",
});

const Title = styled("span", {
  fontSize: "1.6rem",
  fontWeight: "500",
});

const SubTitle = styled("div", {
  fontSize: "1rem",
  fontWeight: "400",
});

const ImageHover = styled("img", {
  "&:hover": {
    filter: "brightness(80%) saturate(120%)",
  },
});

const HostTitle = styled("div", {
  fontSize: "1.2rem",
  fontWeight: "500",
});

const HostSubTitle = styled("div", {
  color: "$textSecondary",
});

export default RoomPage;
