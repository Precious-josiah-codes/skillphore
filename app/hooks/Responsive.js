import { useMediaQuery } from "react-responsive";

const Responsive = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return isMobile;
};

export default Responsive;
