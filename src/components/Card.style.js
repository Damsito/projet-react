import { createUseStyles } from "react-jss";

const useCardStyles = createUseStyles((theme) => ({
  root: {
    position: "relative",
  },
  link: {
    padding: 0,
    margin: 0,
  },
  flex_center: {
    display: "flex",
    justifyContent: "center",
  },
  h3: {
    textAlign: "center",
  },
}));

export default useCardStyles;
