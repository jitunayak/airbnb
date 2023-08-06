import { styled } from "@stitches/react";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./Button";

interface IProps {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  primaryActionTitle?: string;
  secondaryActionTitle?: string;
  onClose?: () => void;
  onSubmit?: () => void;
}

const Modal: React.FC<IProps> = ({
  isOpen,
  onClose,
  title,
  onSubmit,
  children,
  primaryActionTitle,
  secondaryActionTitle,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      if (onClose) {
        onClose();
        setShowModal(false);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleSubmit = useCallback(() => {
    if (onSubmit) {
      onSubmit();
    }
    setTimeout(() => {
      handleClose();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!showModal) {
    return;
  }

  return (
    <ModalWrapper>
      <ModalContainer>
        <HeaderWrapper>
          <Title>{title}</Title>
          <CloseButton>
            <Button color={"text"}>close</Button>
          </CloseButton>
        </HeaderWrapper>
        <Divider />
        <ModalContent>{children}</ModalContent>
        <Divider />
        <ActionWrapper>
          <Button color={"text"} onClick={() => handleClose()}>
            {secondaryActionTitle ?? "Cancel"}
          </Button>
          <Button
            color={"primaryDark"}
            round={"s"}
            size="l"
            onClick={() => handleSubmit()}
          >
            {primaryActionTitle ?? "Submit"}
          </Button>
        </ActionWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled("div", {
  //   backgroundColor: "#ccc",
  //   opacity: ".6",
  position: "fixed",
  width: "100%",
  //   height: "100vh",
});

const ModalContainer = styled("div", {
  backgroundColor: "White",
  width: "50%",
  position: "absolute",
  margin: "2rem",
  //   padding: "1rem",
  borderRadius: ".8rem",
  boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.4);",
});

const Title = styled("span", {
  fontSize: "16px",
  textAlign: "center",
  fontWeight: "bold",
});

const ActionWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "1rem ",
});

const ModalContent = styled("div", {
  padding: "2rem",
  overflowY: "scroll",
  height: "30rem",
});

const Divider = styled("div", {
  width: "100%",
  height: "1px",
  backgroundColor: "#eee",
  margin: ".2rem 0rem",
});

const HeaderWrapper = styled("div", {
  padding: "1rem",
});

const CloseButton = styled("div", {
  position: "absolute",
  left: 0,
  top: 0,
  fontWeight: "bold",
  padding: "1rem",
});
