import React from "react";

interface BookCoverProps {
  side: "left" | "right";
  isTurned: boolean;
  zIndex?: number;
}

const BookCover: React.FC<BookCoverProps> = ({ side, isTurned, zIndex }) => {
  return (
    <div className={`cover cover-${side} ${isTurned && side === "right" ? "turn" : ""}`} style={{ zIndex: zIndex }} />
  );
};

export default BookCover;
