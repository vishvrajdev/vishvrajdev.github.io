import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import TrackBotFlow from "../../components/TrackBotFlow/TrackBotFlow";

function ProjectImageGallery({images, isDark}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (!images || images.length === 0) return null;

  return (
    <div className="project-image-gallery">
      <div 
        className="gallery-main-image" 
        onClick={() => setIsModalOpen(true)}
        title="Click to expand"
      >
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="gallery-image"
        />
        <div className="image-overlay">
          <i className="fas fa-search-plus"></i> Expand
        </div>
      </div>
      
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((img, i) => (
            <button
              key={i}
              className={`gallery-thumb ${i === activeIndex ? "gallery-thumb-active" : ""}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="lightbox-overlay" onClick={() => setIsModalOpen(false)}>
          <span className="lightbox-close" onClick={() => setIsModalOpen(false)}>
            <i className="fas fa-times"></i>
          </span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[activeIndex].src} 
              alt={images[activeIndex].alt} 
              className="lightbox-image" 
            />
            {images[activeIndex].alt && (
              <div className="lightbox-caption">{images[activeIndex].alt}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <div className="main" id="projects">
      <div>
        <Fade bottom duration={1000} distance="20px">
          <h1 className="skills-heading">
            <i className="fas fa-code section-heading-icon"></i> {bigProjects.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
        </Fade>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => {
            return (
              <Fade bottom duration={1000} distance="20px" delay={i * 200} key={i}>
                <div
                  className={
                    isDark
                      ? `dark-mode project-card project-card-dark ${project.featured ? "project-featured" : ""}`
                      : `project-card project-card-light ${project.featured ? "project-featured" : ""}`
                  }
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="featured-badge">
                      <i className="fas fa-star"></i> Featured Project
                    </div>
                  )}

                  {/* Project Image Gallery */}
                  <ProjectImageGallery images={project.images} isDark={isDark} />

                  {/* Project Title */}
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName}
                  </h5>

                  {/* Highlight Line (for featured) */}
                  {project.highlightLine && (
                    <p className={isDark ? "dark-mode highlight-line" : "highlight-line"}>
                      {project.highlightLine}
                    </p>
                  )}

                  {/* TrackBot System Flow (only for featured) */}
                  {project.featured && (
                    <TrackBotFlow isDark={isDark} />
                  )}

                  {/* Problem */}
                  {project.problem && (
                    <div className="project-section">
                      <h6 className="section-label">
                        <i className="fas fa-exclamation-circle"></i> Problem
                      </h6>
                      <p className={isDark ? "dark-mode section-text" : "section-text"}>
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {/* Approach */}
                  {project.approach && (
                    <div className="project-section">
                      <h6 className="section-label">
                        <i className="fas fa-cogs"></i> Approach
                      </h6>
                      <p className={isDark ? "dark-mode section-text" : "section-text"}>
                        {project.approach}
                      </p>
                    </div>
                  )}

                  {/* Key Features (for TrackBot) */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="project-section">
                      <h6 className="section-label">
                        <i className="fas fa-list-ul"></i> Key Features
                      </h6>
                      <ul className="key-features-list">
                        {project.keyFeatures.map((feature, j) => (
                          <li key={j} className={isDark ? "dark-mode section-text" : "section-text"}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Results */}
                  {project.results && (
                    <div className="project-section">
                      <h6 className="section-label results-label">
                        <i className="fas fa-chart-line"></i> Results
                      </h6>
                      <p className={isDark ? "dark-mode section-text" : "section-text"}>
                        {project.results}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  {project.techStack && (
                    <div className="tech-stack-section">
                      <span className={isDark ? "dark-mode tech-stack-label" : "tech-stack-label"}>
                        <i className="fas fa-wrench"></i> Tech Used
                      </span>
                      <div className="tech-stack-div">
                        {project.techStack.map((tech, j) => (
                          <span
                            key={j}
                            className={isDark ? "dark-mode tech-badge" : "tech-badge"}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer Links */}
                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, j) => {
                        if (!link.url) return null;
                        return (
                          <span
                            key={j}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            <i className="fab fa-github"></i> {link.name}
                          </span>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
