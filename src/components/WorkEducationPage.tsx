import React from "react";
import type { WorkEducationPageProps } from "../types";
import NavigationButton from "./NavigationButton";

const WorkEducationPage: React.FC<WorkEducationPageProps> = ({ pageId, items, title, onPageTurn, pageNumber }) => {
  return (
    <>
      <h1 className="title">{title}</h1>

      <div className="workeduc-box">
        {items.map((item) => (
          <div key={item.id} className="workeduc-content">
            <span className="year">
              <i className="bx bxs-calendar"></i>
              {item.period}
            </span>
            <h3>
              {"position" in item ? item.position : item.degree}
              {" - "}
              {"company" in item ? item.company : item.institution}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <span className="number-page">{pageNumber}</span>

      {/* Navigation buttons */}
      {pageNumber > 1 ? (
        <NavigationButton direction="prev" pageId={pageId} onPageTurn={onPageTurn} />
      ) : (
        <NavigationButton direction="next" pageId={pageId} onPageTurn={onPageTurn} />
      )}
    </>
  );
};

export default WorkEducationPage;
