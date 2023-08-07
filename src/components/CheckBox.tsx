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
        type="checkbox"
        checked={checkBoxValue}
        onChange={() => setcheckBoxValue(!checkBoxValue)}
        style={{ width: "1.2rem", height: "1.2rem", color: "black" }}
      />
      <div style={{ color: checkBoxValue ? "black" : "gray" }}>{label}</div>
    </Group>
  );
};

export default CheckBox;

const Group = styled("div", {
  display: "flex",
  gap: "1rem",
  fontSize: "14px",
});
