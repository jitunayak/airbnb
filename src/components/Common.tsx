import { styled } from "../stitches.config";

export const Row = styled("div", {
    display: "flex",
    flexDirection: "row",
});

export const Column = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-center",
    width: "100%",
})

export const Blurred = styled("div", {
    backdropFilter: "blur(40px)",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
})