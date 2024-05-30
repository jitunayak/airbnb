import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import moment from "moment";
import { useState } from "react";

import { Column, Row } from "../components/Common";
import { Divider } from "../components/Divider";
import Header from "../components/Header";
import useApi from "../hooks/useApi";
import { styled } from "../stitches.config";

function RoomPage() {
  const { roomId } = useParams({ from: "/rooms/$roomId" });
  const { roomsApi } = useApi();

  const { data: room, isError, isLoading } = useQuery(["room", roomId],
    () => roomsApi.getRoomById(roomId),);

  const [showGuestDetails, setShowGuestDetails] = useState(false);
  const [reserveDates, setReserveDates] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0],
  });

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

  if (!roomId) return <div>Room not found</div>

  if (isLoading) return <div>Loading</div>

  if (isError) return <div>Something went wrong!</div>

  return (
    <Container>
      <Header />
      <PageContainer>
        {/* RoomPage {roomId} */}
        <Title>{room?.name}</Title>
        <SubTitle>{room?.address}</SubTitle>
        <ImageContainer>
          <ImageHover
            src={
              room.images[0]?.url}
            height={480}
            style={{ borderRadius: "1rem 0rem 0rem 1rem" }}
            width={580}
          />
          <ImageCollage>
            <ImageHover height={235} src={room.images[1]?.url} width={260} />
            <ImageHover
              height={235}
              src={room.images[2]?.url}
              style={{ borderRadius: "0rem 1rem 0rem 0rem" }}
              width={260}
            />
            <ImageHover height={235} src={room.images[3]?.url} width={260} />
            <ImageHover
              height={235}
              src={room.images[0]?.url}
              style={{ borderRadius: "0rem 0rem 1rem 0rem" }}
              width={260}
            />
          </ImageCollage>
        </ImageContainer>

        <Row>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', paddingRight: '2rem' }}>
            <HostTitle>Entire home hosted by {room?.user?.name}</HostTitle>
            <HostSubTitle>
              {" "}
              16 + guests 10 bedrooms 10 beds 10 bathrooms
            </HostSubTitle>
            <div style={{ backgroundColor: 'lightgray', height: '1px', marginBottom: '2rem', marginTop: '2rem' }} />
            <Column>
              <Row style={{ columnGap: '1rem' }}>
                <img height={50} src={room.user?.picture as string} style={{ borderRadius: '50%' }} width={50} />
                <Column>
                  <span style={{ fontSize: '16px', fontWeight: '500' }} >Hosted by {room.user.name} </span>
                  <span style={{ color: 'gray', fontSize: '15px', fontWeight: '400' }}>2 months hosting</span>
                </Column>
              </Row>
            </Column>
            <div style={{ backgroundColor: 'lightgray', height: '1px', marginBottom: '2rem', marginTop: '2rem' }} />
            <div style={{ color: 'gray', fontSize: '15px', fontWeight: '400', paddingRight: "2rem" }} >
              {room.description}.</div>
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
              {/* Check in and check out */}
              <Row style={{ gridTemplateColumns: "1fr 1fr 1fr", justifyContent: "space-between", paddingLeft: "1rem", paddingRight: "1rem" }}>
                <div style={{ paddingTop: ".6rem", width: "40%" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", paddingLeft: ".2rem" }}>CHECK IN</div>
                  <input
                    defaultValue={reserveDates.checkIn}
                    min={reserveDates.checkIn}
                    onChange={(e) => setReserveDates({ ...reserveDates, checkIn: e.target.value })}
                    style={{ border: "none", color: "gray", fontSize: "14px", fontWeight: "400" }}
                    type="date"
                  />
                </div>
                <div style={{ backgroundColor: 'lightgray', height: '60px', width: '1.4px' }} />
                <div style={{ paddingTop: ".6rem", width: "40%" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", paddingLeft: ".2rem" }}>CHECK OUT</div>
                  <input
                    defaultValue={reserveDates.checkOut}
                    min={reserveDates.checkOut}
                    onChange={(e) => setReserveDates({ ...reserveDates, checkOut: e.target.value })}
                    style={{ border: "none", color: "gray", fontSize: "14px", fontWeight: "400" }} type="date" />
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

            {/* total price based on number of days */}
            <GuestRow>
              <span style={{ fontWeight: "300", textDecoration: "underline" }}>₹{room.price.discountedPrice} x
                {moment(reserveDates.checkOut).diff(moment(reserveDates.checkIn), 'days')} nights </span>
              <span style={{ fontWeight: "300" }}>₹{Number(room.price.discountedPrice * (moment(reserveDates.checkOut).diff(moment(reserveDates.checkIn), 'days'))).toLocaleString()}</span>
            </GuestRow>

            {/* cleaning fee */}
            <GuestRow>
              <span style={{ fontWeight: "300", textDecoration: "underline" }}>Cleaning Fee</span>
              <span style={{ fontWeight: "300" }}>
                ₹500
              </span>
            </GuestRow>

            {/* service fee */}
            <GuestRow>
              <span style={{ fontWeight: "300", textDecoration: "underline" }}>Service fee</span>
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
                  room.price.discountedPrice * moment(reserveDates.checkOut).diff(moment(reserveDates.checkIn), 'days') +
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
  pt: ".6rem",
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
