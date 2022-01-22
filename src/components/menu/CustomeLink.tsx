import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomeLink = ({ to, children, ...rest }: LinkProps) => {
  return <Link to={to}>{children}</Link>;
};

export default CustomeLink;
