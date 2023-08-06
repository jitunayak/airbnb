import { styled } from "@stitches/react";
import React from "react";
interface IProps {
  label: string;
}
const CheckBox: React.FC<IProps> = ({ label }) => {
  return (
    <Group>
      <input
        type="checkbox"
        style={{ width: "1.2rem", height: "1.2rem", color: "black" }}
      />
      <div style={{ color: "gray" }}>{label}</div>
    </Group>
  );
};

export default CheckBox;

const Group = styled("div", {
  display: "flex",
  gap: "1rem",
  fontSize: "14px",
});
