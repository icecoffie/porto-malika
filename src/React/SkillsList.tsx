import React, { useState } from "react";

const CategoryIcons = {
  "UI/UX Design & Prototyping": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
  "Web App Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Mobile Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "UI/UX Design & Prototyping": [
      "UI design with Figma, Framer, Webflow, Wix, Canva",
      "UX research & improvements",
      "Prototyping for websites & mobile apps",
      "Tech Mentor",
    ],
    "Web App Development": [
      "Single Page Applications (SPAs) with modern frameworks",
      "Landing pages and business websites",
      "Portfolio websites",
      "E-commerce platforms",
      "Company websites app",
      "Quality assurance and testing",
    ],
    "Mobile Development": [
      "Mobile-friendly web apps",
      "React Native mobile apps",
      "Flutter mobile apps",
      "Quality assurance and testing",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
      <div className="text-left pt-3 md:pt-9">
    <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">
      My Services
    </h2>
    <h3 className="text-4xl md:text-5xl font-medium mb-6 text-[var(--white)]">
      What I do?
    </h3>


      {/* list kategori */}
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            {/* tombol kategori */}
            <button
              onClick={() => toggleItem(category)}
              aria-expanded={openItem === category}
              aria-controls={`panel-${category}`}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition border border-[var(--white-icon-tr)] flex items-center gap-3 p-4"
            >
              {CategoryIcons[category]}
              <span className="flex-grow text-[var(--white)] text-lg truncate">
                {category}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 text-[var(--white)] transform transition-transform ${
                  openItem === category ? "rotate-180" : ""
                }`}
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </button>

            {/* panel isi list */}
            {openItem === category && (
              <div
                id={`panel-${category}`}
                className="px-4 pt-2"
                role="region"
                aria-label={`${category} skills`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm mt-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {/* bullet icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-2 h-2 text-[var(--sec)] flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="6" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
