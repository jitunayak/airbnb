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
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {label && (
        <label
          style={{
            fontSize: "13px",
            marginBottom: "0rem",
            marginLeft: ".6rem",
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
  "&:focus": {
    outlineColor: "black",
  },
  border: "1px solid #ccc",
  borderRadius: ".6rem",
  fontSize: "16px",
  margin: "0rem 0.6rem .6rem 0.4rem",
  padding: "1rem",
  width: "100%",
});
