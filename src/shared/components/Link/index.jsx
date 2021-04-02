import React from "react";
import PropTypes from "prop-types";
import Styled from "./styled";

const Link = ({ active, to, children }) => {
  return (
    <Styled.Link to={to} active={active}>
      {children}
    </Styled.Link>
  );
};

Link.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string.isRequired
};

Link.defaultProps = {
  active: false
};

export default Link;
