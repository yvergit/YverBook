import React from "react";
import type { PortfolioPageProps } from "../types";
import NavigationButton from "./NavigationButton";

const PortfolioPage: React.FC<PortfolioPageProps> = ({ project, pageNumber, pageId, onPageTurn }) => {
  return (
    <>
      <h1 className="title">Latest Project</h1>

      <div className="portfolio-box">
        <div className="img-box">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="info-box">
          <div className="info-title">
            <h3>{project.title}</h3>
            {project.liveUrl && (
              <a href={project.liveUrl}>
                Live Preview <i className="bx bx-link-external"></i>
              </a>
            )}
          </div>
          <p>Tech Used:</p>
          <p>{project.techUsed}</p>
          <p>{project.description}</p>
        </div>

        <div className="btn-box">
          {project.sourceUrl && (
            <a href={project.sourceUrl} className="btn">
              Github
            </a>
          )}
        </div>
      </div>

      <span className="number-page">{pageNumber}</span>
      <NavigationButton direction="next" pageId={pageId} onPageTurn={onPageTurn} />
    </>
  );
};

export default PortfolioPage;
