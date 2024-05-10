const experiences = [
  {
    title: "Senior Frontend Engineer, Accessability ",
    designation: "Senior Software engineer",
    timeline: "2024 - Present",
    description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
    skills: ["HTML", "CSS", "Javscript", "Hacking", "Java"],
  },
  {
    title: "Senior Frontend Engineer, Accessability ",
    designation: "Senior Software engineer",
    timeline: "2024 - Present",
    description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
    skills: ["HTML", "CSS", "Javscript", "Hacking", "Java"],
  },
  {
    title: "Senior Frontend Engineer, Accessability ",
    designation: "Senior Software engineer",
    timeline: "2024 - Present",
    description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
    skills: ["HTML", "CSS", "Javscript", "Hacking", "Java"],
  },
  {
    title: "Senior Frontend Engineer, Accessability ",
    designation: "Senior Software engineer",
    timeline: "2024 - Present",
    description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
    skills: ["HTML", "CSS", "Javscript", "Hacking", "Java"],
  },
];

export const Experiences = () => {
  return (
    <div>
      {experiences.map((experience) => {
        return (
          <div className="experience-card">
            <span>{experience.timeline}</span>
            <div className="right">
              <b>{experience.title}</b>
              <span className="designation">{experience.designation}</span>
              <p>{experience.description}</p>
              <div className="chips">
                {experience.skills.map((skill, index) => {
                  return (
                    <span key={index} className="chip">
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
