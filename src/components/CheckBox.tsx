import { styled } from "@stitches/react";
import React, { useState } from "react";
interface IProps {
  label: string;
}
const CheckBox: React.FC<IProps> = ({ label }) => {
  const [checkBoxValue, setcheckBoxValue] = useState(false);
  return (
    <Group>
      <input
        checked={checkBoxValue}
        onChange={() => setcheckBoxValue(!checkBoxValue)}
        style={{ color: "black", height: "1.2rem", width: "1.2rem" }}
        type="checkbox"
      />
      <div style={{ color: checkBoxValue ? "black" : "gray" }}>{label}</div>
    </Group>
  );
};

export default CheckBox;

const Group = styled("div", {
  display: "flex",
  fontSize: "14px",
  gap: "1rem",
});
