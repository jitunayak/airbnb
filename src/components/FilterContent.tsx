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
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "3rem 1rem",
  //   backgroundColor: "red",
});

const Divider = styled("div", {
  width: "100%",
  height: "1px",
  backgroundColor: "#ccc",
});
const Title = styled("span", {
  fontWeight: "bold",
  fontSize: "22px",
});
const Description = styled("span", {
  fontWeight: "400",
  fontSize: "14px",
  marginTop: ".6rem",
  color: "Gray",
});

const Group = styled("div", {
  display: "flex",
  gap: "3rem",
  marginTop: "2rem",
});
const WrapBox = styled("div", {
  gap: "2rem",
  display: "grid",
  flexWrap: "wrap",
  width: "60%",
  marginTop: "2rem",
});
export default FilterContent;
