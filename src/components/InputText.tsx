import { styled } from "@stitches/react";
import React from "react";

interface IProps {
  label?: string;
  plceholder?: string;
}

const InputText: React.FC<IProps> = ({ label, plceholder }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {label && (
        <label
          style={{
            marginLeft: ".6rem",
            marginBottom: "0rem",
            fontSize: "13px",
          }}
        >
          {label}
        </label>
      )}
      <InputBox placeholder={plceholder} />
    </div>
  );
};

export default InputText;

const InputBox = styled("input", {
  padding: "1rem",
  borderRadius: ".6rem",
  border: "1px solid #ccc",
  margin: "0rem 0.6rem .6rem 0.4rem",
  width: "100%",
  fontSize: "16px",
  "&:focus": {
    outlineColor: "black",
  },
});
