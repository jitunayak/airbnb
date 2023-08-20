import { styled } from "@stitches/react";

import CheckBox from "./CheckBox";
import InputText from "./InputText";

function FilterContent() {
  return (
    <Wrapper>
      <SubCard>
        <Title>Price range</Title>
        <Description>The average nightly price is 4,900</Description>
        <Group>
          <InputText label="min price" plceholder="$ 41" />
          <InputText label="max-price" plceholder="$ 70" />
        </Group>
      </SubCard>
      <Divider />
      <SubCard>
        <Title>Amenities</Title>
        <Description>Host should be familiar</Description>
        <WrapBox>
          <CheckBox label="Wifi" />
          <CheckBox label="Kitchen" />
          <CheckBox label="Washing machine" />
          <CheckBox label="Air Conditioning" />
          <CheckBox label="Heating" />
        </WrapBox>
      </SubCard>
      <SubCard>
        <Title>Types Of Place</Title>
        <Description>Most people prefer own room plus shared space</Description>
      </SubCard>
      <Divider />
      <SubCard>
        <Title>Host Language</Title>
        <Description>Host should be familiar</Description>
        <WrapBox>
          <CheckBox label="English" />
          <CheckBox label="Hindi" />
          <CheckBox label="German" />
          <CheckBox label="French" />
          <CheckBox label="Odia" />
        </WrapBox>
      </SubCard>
    </Wrapper>
  );
}

const Wrapper = styled("div", {});
const SubCard = styled("div", {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  padding: "3rem 1rem",
  //   backgroundColor: "red",
});

const Divider = styled("div", {
  backgroundColor: "#ccc",
  height: "1px",
  width: "100%",
});
const Title = styled("span", {
  fontSize: "22px",
  fontWeight: "bold",
});
const Description = styled("span", {
  color: "Gray",
  fontSize: "14px",
  fontWeight: "400",
  marginTop: ".6rem",
});

const Group = styled("div", {
  display: "flex",
  gap: "3rem",
  marginTop: "2rem",
});
const WrapBox = styled("div", {
  display: "grid",
  flexWrap: "wrap",
  gap: "2rem",
  marginTop: "2rem",
  width: "60%",
});
export default FilterContent;
