import { useState } from "react";

import { Divider } from "../components/Divider";
import Header from "../components/Header";
import { styled } from "../stitches.config";
import { IRoom } from "../types";
import mockRooms from "./../hooks/mockFetchRooms.json";
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
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=960"
            }
            height={540}
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
                <div style={{ textAlign: "center", userSelect: 'none', width: "2rem" }}>
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
                <div style={{ textAlign: "center", width: "2rem" }}>
                  {guestDetails.children}
                </div>
                <CircularIcon onClick={addChildrenGuest}>+</CircularIcon>
              </CounterContainer>
            </GuestRow>
          </GuestsContainer>

          <ReserveButton>Reserve</ReserveButton>
          <ReservationMessage>You won't be charged yet</ReservationMessage>
          <GuestRow>
            <span style={{ fontWeight: "300", }}>Service fee</span>
            <span style={{ fontWeight: "300" }}>₹{Number(12999).toLocaleString()}</span>
          </GuestRow>
          <Divider
            style={{
              borderColor: "$textSecondary",
              height: "1px",
              marginBottom: "1.6rem",
              marginTop: "1.2rem",
              width: "100%",
            }}
          />
          <GuestRow>
            <span style={{ fontWeight: "500" }}>Total before taxes</span>
            <span style={{ fontWeight: "500" }}>₹{Number(72000).toLocaleString()}</span>
          </GuestRow>
        </BookingContainer>
      </PageContainer>
    </Container>
  );
}

const Container = styled("div", {
  paddingTop: "2rem",
});

const ReservationMessage = styled("div", {
  // color: "$textSecondary",
  fontSize: "small",
  my: ".6rem",
  textAlign: "center",

});
const ReserveButton = styled("button", {
  "&:hover": {
    opacity: "0.9",

  },
  backgroundColor: "$primary",
  backgroundImage: "linear-gradient(346deg, hsl(346,91%,51%) 0%, hsl(340,81%,58%) 100%)",
  color: "white",
  height: "3rem",
  my: "0.2rem",
  transition: "boxShadow 0.2s",
  width: "100%",

});

const BookingContainer = styled("div", {
  border: "1px solid #eee",
  borderRadius: ".6rem",
  boxShadow: "$m",
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
  "&:hover": {
    filter: "brightness(80%) saturate(120%)",
  },
  objectFit: "cover",
});

const HostTitle = styled("div", {
  fontSize: "1.4rem",
  fontWeight: "500",
  mt: "1.2rem",
});

const HostSubTitle = styled("div", {
  color: "$textSecondary",
});

const CircularIcon = styled("span", {
  "&:hover": {
    borderColor: "$textPrimary",
    color: "$textPrimary",
  },
  alignItems: "center",
  borderColor: "$textSecondary",
  borderRadius: "100%",
  borderStyle: "solid",
  borderWidth: "1.6px",
  color: "$textSecondary",
  cursor: "pointer",
  display: "flex",
  fontSize: "x-large",
  height: ".8rem",
  justifyContent: "center",
  padding: "0.5rem",
  userSelect: 'none',
  width: ".8rem",
});

const CounterContainer = styled("div", {
  alignItems: "center",
  display: "grid",
  gap: ".1rem",
  gridTemplateColumns: "repeat(3, 1fr)",
});

const GuestsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "space-between",
  my: "1rem",
});

const GuestRow = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "12rem",
  justifyContent: "space-between",
  width: "100%",
});

const GuestCategory = styled("div", {
  fontSize: "16px",
  fontWeight: "500",
});
const GuestDescription = styled("div", {
  color: "$textSecondary",
  fontSize: "14px",
  fontWeight: "400",
});
export default RoomPage;
