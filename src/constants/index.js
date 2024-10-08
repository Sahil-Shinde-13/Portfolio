import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, Redux-Toolkit and Tailwind CSS as well as back-end technologies like Node.js, MySQL, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React.js, Express.js, FireBase, Tailwind CSS and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "NetflixGPT App",
    image: project1,
    description:
      "An Online Netflix clone App with Sign In and Sign UP authentication and integration of GPT for Movie Recommendations and Suggestions.",
    technologies: ["HTML", " Tailwind CSS", "React", "FireBase", "Redux-Toolkit"],
    link: 'https://netflix-gpt-mu-six.vercel.app/'
  },
  {
    title: "Food Ordering App",
    image: project2,
    description:
      "An Front-end UI Application Which takes live API calls from Swiggy to display data for UI with Cart functionality",
    technologies: ["HTML", "CSS", "React", "Reduc-Toolkit"],
    link: 'https://www.youtube.com/watch?v=io2Mkij620M'
  },
  {
    title: "University Portal",
    image: project3,
    description:
      "A College university website",
    technologies: ["HTML", "CSS", "React"],
    link: 'https://edu-tech-fawn.vercel.app/'
  },
  {
    title: "IMDB Clone",
    image: project4,
    description:
      "A movie rating APP like IMDB",
    technologies: ["HTML", "CSS", "React"],
    link: 'https://imdb-clone-two-iota.vercel.app/'
  },
];

export const CONTACT = {
  address: "Pali, Raigad, Maharashtra",
  phoneNo: "+91 8182044040",
  email: "sahil13gs@gmail.com",
};
