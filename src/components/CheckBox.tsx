import React, { useState } from "react";

import { styled } from "../stitches.config";
interface IProps {
  label: string;
}
const CheckBox: React.FC<IProps> = ({ label }) => {
  const [checkBoxValue, setcheckBoxValue] = useState(false);
  return (
    <Group>
      <CheckBoxInput
        checked={checkBoxValue}
        onChange={() => setcheckBoxValue(!checkBoxValue)}
        type="checkbox"
      />
      <div
        onClick={() => setcheckBoxValue(!checkBoxValue)}
        style={{ color: checkBoxValue ? "black" : "gray", cursor: "pointer" }}
      >
        {label}
      </div>
    </Group>
  );
};

export default CheckBox;

const Group = styled("div", {
  display: "flex",
  fontSize: "14px",
  gap: "1rem",
});

const CheckBoxInput = styled("input", {
  color: "black",
  height: "1.2rem",
  width: "1.2rem",
});
