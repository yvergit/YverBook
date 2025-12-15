import React from "react";
import type { ServicesPageProps } from "../types";
import NavigationButton from "./NavigationButton";

const ServicesPage: React.FC<ServicesPageProps> = ({ services, pageNumber, pageId, onPageTurn }) => {
  return (
    <>
      <h1 className="title">My Services</h1>

      <div className="services-box">
        {services.map((service) => (
          <div key={service.id} className="services-content">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
          </div>
        ))}
      </div>

      <span className="number-page">{pageNumber}</span>

      <NavigationButton direction="next" pageId={pageId} onPageTurn={onPageTurn} />
    </>
  );
};

export default ServicesPage;
