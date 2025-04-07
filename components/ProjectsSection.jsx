"use client"; // Client Component

import React from "react";

const ProjectsSection = () => {
  return (
    <div className="mt-4">
      <h3 className="text-2xl font-bold text-white mb-4">Featured Projects</h3>
      <div className="flex flex-col gap-4">
        {/* Proyek Baru: StackOverflow-like Website */}
        <div className="flex flex-col bg-gray-800 p-4 gap-4 rounded-lg card-project">
          <div className="flex justify-between items-center">
            <span className="text-white font-bold">DevFlow</span>
            <button
              className="px-4 py-2 bg-badge text-white rounded-lg cursor-pointer hover:bg-primary-dark transition-colors"
              onClick={() =>
                window.open("https://project-jsm.onrender.com", "_blank")
              }
            >
              View Project
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white font-bold">Creative Frontend Demo</span>
            <button
              className="px-4 py-2 bg-badge text-white rounded-lg cursor-pointer hover:bg-primary-dark transition-colors"
              onClick={() =>
                window.open("https://ui-project-jxx4.onrender.com/", "_blank")
              }
            >
              View Project
            </button>
          </div>
        </div>

        {/* Contact Me */}
        <div className="flex justify-between items-center card-project p-4 rounded-lg">
          <span className="text-white">Contact Me</span>
          <button
            className="px-4 py-2 bg-badge text-white rounded-lg cursor-pointer transition-colors"
            onClick={() => window.open("mailto:delvinzhu7@gmail.com", "_blank")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
