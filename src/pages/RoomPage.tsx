import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { Column, Row } from "../components/Common";
import { Divider } from "../components/Divider";
import Header from "../components/Header";
import { styled } from "../stitches.config";
import { IRoom } from "../types";
import mockRooms from "./../hooks/mockFetchRooms.json";
function RoomPage() {
  //   const { roomId } = useParams();
  const room = mockRooms[0] as IRoom;

  const { user } = useKindeAuth();

  const [showGuestDetails, setShowGuestDetails] = useState(false);

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
    if (guestDetails.adults === 0 || guestDetails.adults === 1) return;
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
            height={480}
            style={{ borderRadius: "1rem 0rem 0rem 1rem" }}
            width={580}
          />
          <ImageCollage>
            <ImageHover height={235} src={room.images[1]} width={260} />
            <ImageHover
              height={235}
              src={room.images[2]}
              style={{ borderRadius: "0rem 1rem 0rem 0rem" }}
              width={260}
            />
            <ImageHover height={235} src={room.images[2]} width={260} />
            <ImageHover
              height={235}
              src={room.images[0]}
              style={{ borderRadius: "0rem 0rem 1rem 0rem" }}
              width={260}
            />
          </ImageCollage>
        </ImageContainer>

        <Row>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', paddingRight: '2rem' }}>
            <HostTitle>Entire home hosted by {user?.given_name}</HostTitle>
            <HostSubTitle>
              {" "}
              16 + guests 10 bedrooms 10 beds 10 bathrooms
            </HostSubTitle>
            <div style={{ backgroundColor: 'lightgray', height: '1px', marginBottom: '2rem', marginTop: '2rem' }} />
            <Column>
              <Row style={{ columnGap: '1rem' }}>
                <img height={50} src={user?.picture as string} style={{ borderRadius: '50%' }} width={50} />
                <Column>
                  <span style={{ fontSize: '16px', fontWeight: '500' }} >Hosted by {user?.given_name} {user?.family_name}</span>
                  <span style={{ color: 'gray', fontSize: '15px', fontWeight: '400' }}>2 months hosting</span>
                </Column>
              </Row>
            </Column>
            <div style={{ backgroundColor: 'lightgray', height: '1px', marginBottom: '2rem', marginTop: '2rem' }} />
            <div style={{ color: 'gray', fontSize: '15px', fontWeight: '400', paddingRight: "2rem" }} >Set on the North Western coast of Sicily, close to Castellammare del Golfo, this breathtaking villa enjoys mountain and sea views from its bright, eclectic interior. After your morning tea in the garden, sit for an alfresco breakfast while gazing out over the countryside. In the afternoon, keep cool in the pool or head to a nearby beach in Scopello, where you’ll also find great restaurants.
              Copyright © Luxury Retreats. All rights reserved.</div>
            <div style={{ backgroundColor: 'lightgray', height: '1px', marginBottom: '2rem', marginTop: '2rem' }} />
          </div>
          <BookingContainer>
            <BookingHeaderCutDownPrice>
              ₹{Number(room.price.originalPrice).toLocaleString()}{" "}
            </BookingHeaderCutDownPrice>
            <BookingHeaderPrice>
              ₹{Number(room.price.discountedPrice).toLocaleString()}
            </BookingHeaderPrice>
            <span> night</span>

            <div style={{
              border: "1.4px solid #ccc",
              borderRadius: ".6rem", display: "flex", flexDirection: "column",
              marginBottom: "1rem", marginTop: "1rem", userSelect: "none",
              width: "22rem"
            }}>
              <Row style={{ gridTemplateColumns: "1fr 1fr 1fr", justifyContent: "space-between", paddingLeft: "1rem", paddingRight: "1rem" }}>
                <div style={{ paddingTop: ".6rem", width: "40%" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", paddingLeft: ".2rem" }}>CHECK IN</div>
                  <input defaultValue={new Date().toISOString().split('T')[0]} style={{ border: "none", color: "gray", fontSize: "14px", fontWeight: "400" }} type="date" />
                </div>
                <div style={{ backgroundColor: 'lightgray', height: '60px', width: '1.4px' }} />
                <div style={{ paddingTop: ".6rem", width: "40%" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", paddingLeft: ".2rem" }}>CHECK OUT</div>
                  <input defaultValue={new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0]} style={{ border: "none", color: "gray", fontSize: "14px", fontWeight: "400" }} type="date" />
                </div>
                <div style={{ backgroundColor: 'lightgray', height: '1.4px' }} />

              </Row>
              <div style={{ backgroundColor: 'lightgray', height: '1.4px' }} />
              <div style={{ paddingBottom: ".6rem", paddingLeft: "1rem", paddingTop: ".6rem", userSelect: 'none' }}>
                <Row style={{ justifyContent: "space-between", paddingRight: "1rem", userSelect: 'none' }}>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "600", paddingLeft: ".2rem" }}>GUESTS</div>
                    <div style={{ color: "gray", fontSize: "14px", fontWeight: "400", paddingLeft: ".2rem" }}>{guestDetails.adults + guestDetails.children} guests</div>
                  </div>
                  {
                    showGuestDetails ?
                      <ChevronUp color="gray" height={20} onClick={() => setShowGuestDetails(!showGuestDetails)} strokeWidth={2.2}
                        style={{ cursor: "pointer", marginTop: ".6rem", userSelect: 'none' }} width={20} />
                      : <ChevronDown color="gray" height={20} onClick={() => setShowGuestDetails(!showGuestDetails)} strokeWidth={2.2}
                        style={{ cursor: "pointer", marginTop: ".6rem", userSelect: 'none' }} width={20} />
                  }
                </Row>

              </div>
              {
                showGuestDetails &&
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
              }
            </div>

            <ReserveButton>Reserve</ReserveButton>
            <ReservationMessage>You won't be charged yet</ReservationMessage>
            <GuestRow>
              <span style={{ fontWeight: "300", }}>Service fee</span>
              <span style={{ fontWeight: "300" }}>₹{Number(room.price.serviceCharge).toLocaleString()}</span>
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
              <span style={{ fontWeight: "500", width: "100%" }}>Total before taxes</span>
              <span style={{ fontWeight: "500" }}>
                {`₹${(
                  room.price.discountedPrice * guestDetails.adults +
                  (room.price.discountedPrice / 2) * guestDetails.children +
                  room.price.serviceCharge
                ).toLocaleString()}`}
              </span>
            </GuestRow>
          </BookingContainer>
        </Row>

      </PageContainer >
    </Container >
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
  alignItems: "center",
  display: "inline-flex",
  gap: ".5rem",
  marginTop: "1rem",
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
  borderColor: "#ccc",
  borderRadius: "100%",
  borderStyle: "solid",
  borderWidth: "1.6px",
  color: "$textSecondary",
  cursor: "pointer",
  display: "flex",
  fontSize: "large",
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

const GuestsContainer = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "space-between", my: "1rem",
  paddingLeft: "1.6rem",
  paddingRight: "1.6rem",
  width: '20rem'
});

const GuestRow = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const GuestCategory = styled("div", {
  fontSize: "14px",
  fontWeight: "500",
});
const GuestDescription = styled("div", {
  color: "$textSecondary",
  fontSize: "14px",
  fontWeight: "400",
});
export default RoomPage;
