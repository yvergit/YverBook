import React from "react";
import type { BookPageProps } from "../types";

const BookPage: React.FC<BookPageProps> = ({ pageId, pageNumber, isTurned, zIndex, children, className = "" }) => {
  return (
    <div
      className={`book-page page-right ${isTurned ? "turn" : ""} ${className}`}
      style={{ zIndex: zIndex }}
      id={pageId}
    >
      {children}
      
      {/* Page number */}
      <span className="number-page">{pageNumber}</span>
    </div>
  );
};

export default BookPage;
