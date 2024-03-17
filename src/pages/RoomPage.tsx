import { useState } from "react";
import { styled } from "../stitches.config";
import { IRoom } from "../types";
import mockRooms from "./../hooks/mockFetchRooms.json";
import Header from "../components/Header";
function RoomPage() {
  //   const { roomId } = useParams();
  const room = mockRooms[0] as IRoom;

  const [guestDetails, setGuestDetails] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const addChildrenGuest = () => {
    setGuestDetails((prev) => ({
      ...prev,
      children: prev.children + 1,
    }));
  };
  const removeChildrenGuest = () => {
    if (guestDetails.children === 0) return;
    setGuestDetails((prev) => ({
      ...prev,
      children: prev.children - 1,
    }));
  };
  const addAdultGuest = () => {
    setGuestDetails((prev) => ({
      ...prev,
      adults: prev.adults + 1,
    }));
  };
  const removeAdultGuest = () => {
    if (guestDetails.adults === 0) return;
    setGuestDetails((prev) => ({
      ...prev,
      adults: prev.adults - 1,
    }));
  };

  return (
    <Container>
      <Header />
      <PageContainer>
        {/* RoomPage {roomId} */}
        <Title>10BHK Villa De Boqueachi Arrady</Title>
        <SubTitle>Parra, Goa, India</SubTitle>
        <ImageContainer>
          <ImageHover
            height={540}
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=960"
            }
            style={{ borderRadius: "1rem 0rem 0rem 1rem" }}
            width={540}
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
        <HostSubTitle>
          {" "}
          16 + guests 10 bedrooms 10 beds 10 bathrooms
        </HostSubTitle>
        <BookingContainer>
          <BookingHeaderCutDownPrice>
            ₹{Number(90000).toLocaleString()}{" "}
          </BookingHeaderCutDownPrice>
          <BookingHeaderPrice>
            ₹{Number(72000).toLocaleString()}
          </BookingHeaderPrice>
          <span> night</span>

          <GuestsContainer>
            <GuestRow>
              <span>
                <GuestCategory>Adults</GuestCategory>
                <GuestDescription>Age 13+</GuestDescription>
              </span>
              <CounterContainer>
                <CircularIcon onClick={removeAdultGuest}>-</CircularIcon>
                <div style={{ width: "2rem", textAlign: "center" }}>
                  {guestDetails.adults}
                </div>
                <CircularIcon onClick={addAdultGuest}>+</CircularIcon>
              </CounterContainer>
            </GuestRow>
            <GuestRow>
              <span>
                <GuestCategory>Children</GuestCategory>
                <GuestDescription>Ages 2-12</GuestDescription>
              </span>
              <CounterContainer>
                <CircularIcon onClick={removeChildrenGuest}>-</CircularIcon>
                <div style={{ width: "2rem", textAlign: "center" }}>
                  {guestDetails.children}
                </div>
                <CircularIcon onClick={addChildrenGuest}>+</CircularIcon>
              </CounterContainer>
            </GuestRow>
          </GuestsContainer>

          <ReserveButton>Reserve</ReserveButton>
          <ReservationMessage>You won't be charged yet</ReservationMessage>
        </BookingContainer>
      </PageContainer>
    </Container>
  );
}

const Container = styled("div", {
  paddingTop: "2rem",
});

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
  height: "3rem",
  "&:hover": {
    opacity: "0.9",
  },
});

const BookingContainer = styled("div", {
  border: "1px solid #ccc",
  borderRadius: "1rem",
  boxShadow: "$l",
  marginTop: "2rem",
  padding: "2rem",
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
  objectFit: "cover",
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

const CircularIcon = styled("span", {
  borderRadius: "100%",
  display: "flex",
  padding: "0.5rem",
  height: "1rem",
  width: "1rem",
  borderColor: "$textSecondary",
  color: "$textSecondary",
  borderStyle: "solid",
  borderWidth: "1.6px",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "x-large",

  "&:hover": {
    borderColor: "$textPrimary",
    color: "$textPrimary",
  },
});

const CounterContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  alignItems: "center",
  gap: ".1rem",
});

const GuestsContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
  justifyContent: "space-between",
  my: "1rem",
});

const GuestRow = styled("div", {
  display: "flex",
  gap: "16rem",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const GuestCategory = styled("div", {
  fontSize: "1.1rem",
  fontWeight: "500",
});
const GuestDescription = styled("div", {
  color: "$textSecondary",
});
export default RoomPage;
