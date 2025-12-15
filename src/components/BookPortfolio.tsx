import React, { useState, useEffect, useCallback } from "react";
import type { ContactForm, PageState } from "../types";
import { LoadingWrapper } from "./Loading";
import BookCover from "./BookCover";
import BookPage from "./BookPage";
import ProfilePage from "./ProfilePage";
import WorkEducationPage from "./WorkEducationPage";
import ServicesPage from "./ServicesPage";
import SkillsPage from "./SkillsPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import { portfolioData } from "../data/portfolioData";

const BookPortfolio: React.FC = () => {
  const [pageState, setPageState] = useState<PageState>({
    currentPage: 0,
    isTurning: false,
    turnedPages: new Set([1, 2, 3]), // Start with all pages turned like vanilla HTML
  });

  const [isOpening, setIsOpening] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [indexCover, setIndexCover] = useState(1);
  const [pageZIndexes, setPageZIndexes] = useState<{ [key: number]: number }>({
    1: 1, // Correct z-index: turn-1 = 3
    2: 2, // turn-2 = 2
    3: 3, // turn-3 = 1
  });

  const handlePageTurn = useCallback(
    (pageId: string) => {
      if (pageState.isTurning) return;

      setPageState((prev) => ({ ...prev, isTurning: true }));

      const pageNumber = parseInt(pageId.split("-")[1]) || 0;
      const newTurnedPages = new Set(pageState.turnedPages);

      if (newTurnedPages.has(pageNumber)) {
        // Remove turn - page going back (matches vanilla JS removeClass('turn'))
        newTurnedPages.delete(pageNumber);

        // Update z-index after animation delay: page returns to its original stacked position
        setTimeout(() => {
          setPageZIndexes((prev) => ({
            ...prev,
            [pageNumber]: 4 - pageNumber, // turn-1=3, turn-2=2, turn-3=1
          }));
        }, 500);
      } else {
        // Add turn - page going forward (matches vanilla JS addClass('turn'))
        newTurnedPages.add(pageNumber);

        // Update z-index after animation delay: turned pages get higher z-index
        setTimeout(() => {
          setPageZIndexes((prev) => ({
            ...prev,
            [pageNumber]: 10 + pageNumber, // Ensure turned pages are on top
          }));
        }, 500);
      }

      setPageState((prev) => ({
        ...prev,
        turnedPages: newTurnedPages,
        currentPage: pageNumber,
      }));

      // Reset turning state after animation
      setTimeout(() => {
        setPageState((prev) => ({ ...prev, isTurning: false }));
      }, 1000);
    },
    [pageState.isTurning, pageState.turnedPages]
  );

  useEffect(() => {
    setTimeout(() => {
      setIndexCover(-1);
    }, 2800);
  }, []);

  // Handle loading and opening animation
  useEffect(() => {
    // Simulate loading time for assets
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const openingTimer = setTimeout(() => {
      setIsOpening(false);
    }, 2100);

    // Opening animation: gradually remove turn from pages to show them
    // But keep them in a navigable state
    setTimeout(() => {
      // Remove turn from page 3 first (last page -> first to show)
      setPageState((prev) => {
        const newTurnedPages = new Set(prev.turnedPages);
        newTurnedPages.delete(3);
        return { ...prev, turnedPages: newTurnedPages };
      });

      setTimeout(() => {
        setPageZIndexes((prev) => ({
          ...prev,
          3: 1, // turn-3 = 1
        }));
      }, 500);
    }, 2300);

    setTimeout(() => {
      // Remove turn from page 2
      setPageState((prev) => {
        const newTurnedPages = new Set(prev.turnedPages);
        newTurnedPages.delete(2);
        return { ...prev, turnedPages: newTurnedPages };
      });

      setTimeout(() => {
        setPageZIndexes((prev) => ({
          ...prev,
          2: 2, // turn-2 = 2
        }));
      }, 500);
    }, 2500);

    setTimeout(() => {
      // Remove turn from page 1 (first page -> last to show, on top)
      setPageState((prev) => {
        const newTurnedPages = new Set(prev.turnedPages);
        newTurnedPages.delete(1);
        return { ...prev, turnedPages: newTurnedPages };
      });

      setTimeout(() => {
        setPageZIndexes((prev) => ({
          ...prev,
          1: 3, // turn-1 = 3 (highest z-index)
        }));
      }, 500);
    }, 2700);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(openingTimer);
    };
  }, []);

  const handleContactMe = () => {
    // Turn all pages to reach contact page
    const pages = [1, 2, 3];

    pages.forEach((pageNumber, index) => {
      setTimeout(
        () => {
          setPageState((prev) => ({
            ...prev,
            turnedPages: new Set([...prev.turnedPages, pageNumber]),
          }));

          // Update z-index with delay
          setTimeout(() => {
            setPageZIndexes((prev) => ({
              ...prev,
              [pageNumber]: 20 + index,
            }));
          }, 500);
        },
        (index + 1) * 200 + 100
      );
    });
  };

  const handleBackToProfile = () => {
    // Turn back all pages
    const pages = [3, 2, 1]; // Reverse order

    pages.forEach((pageNumber, index) => {
      setTimeout(
        () => {
          setPageState((prev) => {
            const newTurnedPages = new Set(prev.turnedPages);
            newTurnedPages.delete(pageNumber);
            return { ...prev, turnedPages: newTurnedPages };
          });

          // Update z-index with delay
          setTimeout(() => {
            setPageZIndexes((prev) => ({
              ...prev,
              [pageNumber]: 4 - pageNumber, // turn-1=3, turn-2=2, turn-3=1
            }));
          }, 500);
        },
        (index + 1) * 200 + 100
      );
    });
  };

  const handleContactSubmit = (formData: ContactForm) => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <LoadingWrapper isLoading={isLoading} loadingText="Preparing your portfolio book...">
      <div className="wrapper">
        <BookCover side="left" isTurned={false} />
        <BookCover side="right" isTurned={!isOpening} zIndex={indexCover} />

        <div className="book">
          {/* Profile Page (Left Side) */}
          <div className="book-page page-left">
            <ProfilePage
              personalInfo={portfolioData.personalInfo}
              socialMedia={portfolioData.socialMedia}
              onContactMe={handleContactMe}
            />
          </div>

          {/* Page 1 & 2 (Work Experience & Education) */}
          <BookPage zIndex={pageZIndexes[1]} pageId="turn-1" pageNumber={1} isTurned={pageState.turnedPages.has(1)}>
            <div className="page-front">
              <WorkEducationPage
                pageId="turn-1"
                items={portfolioData.workExperience}
                title="Work Experience"
                pageNumber={1}
                onPageTurn={handlePageTurn}
              />
            </div>
            <div className="page-back">
              <WorkEducationPage
                pageId="turn-1"
                items={portfolioData.education}
                title="Education"
                pageNumber={2}
                onPageTurn={handlePageTurn}
              />
            </div>
          </BookPage>

          {/* Page 3 & 4 (Services & Skills) */}
          <BookPage zIndex={pageZIndexes[2]} pageId="turn-2" pageNumber={2} isTurned={pageState.turnedPages.has(2)}>
            <div className="page-front">
              <ServicesPage
                pageId="turn-2"
                services={portfolioData.services}
                pageNumber={3}
                onPageTurn={handlePageTurn}
              />
            </div>
            <div className="page-back">
              <SkillsPage
                pageId="turn-2"
                skillCategories={portfolioData.skills}
                pageNumber={4}
                onPageTurn={handlePageTurn}
              />
            </div>
          </BookPage>

          {/* Page 5 & 6 (Portfolio & Contact) */}
          <BookPage zIndex={pageZIndexes[3]} pageId="turn-3" pageNumber={3} isTurned={pageState.turnedPages.has(3)}>
            <div className="page-front">
              <PortfolioPage
                pageId="turn-3"
                project={portfolioData.latestProject}
                pageNumber={5}
                onPageTurn={handlePageTurn}
              />
            </div>
            <div className="page-back">
              <ContactPage onSubmit={handleContactSubmit} onBackToProfile={handleBackToProfile} pageNumber={6} />
            </div>
          </BookPage>
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default BookPortfolio;
