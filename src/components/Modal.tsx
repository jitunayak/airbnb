import { styled } from "@stitches/react";
import React, { useCallback, useEffect, useState } from "react";

import { Button } from "./Button";

interface IProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  primaryActionTitle?: string;
  secondaryActionTitle?: string;
  title?: string;
}

const Modal: React.FC<IProps> = ({
  children,
  isOpen,
  onClose,
  onSubmit,
  primaryActionTitle,
  secondaryActionTitle,
  title,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
    // console.log(window.innerHeight);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      if (onClose) {
        onClose();
        setShowModal(false);
      }
    }, 1000);
  }, [onClose]);

  const handleSubmit = useCallback(() => {
    if (onSubmit) {
      onSubmit();
    }
    setTimeout(() => {
      handleClose();
    }, 1000);
  }, [handleClose, onSubmit]);

  if (!showModal) {
    return;
  }

  return (
    <ModalWrapper animate={showModal ? "slideUp" : "default"}>
      <ModalContainer>
        <HeaderWrapper>
          <Title>{title}</Title>
          <CloseButton>
            <Button
              color={"text"}
              onClick={handleClose}
              style={{ fontSize: "14px" }}
              data-test-id="close-filter-modal-button"
            >
              close
            </Button>
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
            onClick={() => handleSubmit()}
            round={"s"}
            size="l"
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
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  bottom: 0,
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
  variants: {
    animate: {
      default: {
        opacity: "0",
        transform: "translate-y-0",
      },
      slideUp: {
        opacity: "1",
        transform: "translate-y-full",
      },
    },
  },
});

const ModalContainer = styled("div", {
  WebkitOverflowScrolling: "touch",
  //   border: "1px solid #ccc",
  background: "#fff",
  borderRadius: ".8rem",
  boxShadow: "-1px 4px 10px 3px rgba(0,0,0,0.4)",
  //   bottom: "40px",
  //   bottom: "40px",
  left: "15%",
  outline: "none",
  overflow: "auto",
  padding: "20px",
  position: "absolute",
  right: "15%",
  top: "40px",
});

const Title = styled("span", {
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
});

const ActionWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: ".2rem ",
});

const ModalContent = styled("div", {
  //   width: `${window.innerWidth - window.innerWidth * 0.4}px`,
  height: `${window.innerHeight - window.innerHeight * 0.2}px`,
  maxHeight: "500px",
  overflowY: "scroll",
  padding: "2rem",
});

const Divider = styled("div", {
  backgroundColor: "#eee",
  height: "1px",
  margin: ".6rem 0rem",
  width: "100%",
});

const HeaderWrapper = styled("span", {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "1rem",
  position: "flex",
  width: "100%",
});

const CloseButton = styled("div", {
  bottom: "1rem",
  fontWeight: "bold",
  padding: "1rem",
  position: "absolute",
  right: 0,
  top: 0,
});
