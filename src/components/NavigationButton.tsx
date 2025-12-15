import React from "react";
import type { NavigationButtonProps } from "../types";

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, pageId, onPageTurn }) => {
  const handleClick = () => {
    onPageTurn(pageId);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <span
      className={`nextprev-btn ${direction === "prev" ? "back" : ""}`}
      data-page={pageId}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} page`}
    >
      <i className={`bx ${direction === "prev" ? "bx-chevron-left" : "bx-chevron-right"}`} aria-hidden="true"></i>
    </span>
  );
};

export default NavigationButton;
