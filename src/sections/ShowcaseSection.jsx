import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      ref: project1Ref,
      title: "SushiShop - A Sushi Themed Website",
      description:
        "An app built with HTML and CSS for a fast, user-friendly experience.",
      imgSrc: "/images/project33.png",
      repoLink: "https://github.com/rifah07/sushi-shop",
      liveLink: "https://sushi-shop-vite.vercel.app/",
      points: [
        "Built with HTML and CSS",
        "Added custom animation",
        "Clean and responsive UI",
      ],
    },
    {
      ref: project2Ref,
      title: "Library Management Platform",
      description:
        "A full-stack web application to manage books, members, and issues efficiently.",
      imgSrc: "/images/project2.png",
      repoLink: "https://github.com/yourusername/library-platform",
      liveLink: "https://library-app.vercel.app",
      points: [
        "Built with MERN stack (MongoDB, Express, React, Node)",
        "Role-based access control for Admin and Users",
        "Search, sort, and issue tracking system",
      ],
    },
    {
      ref: project3Ref,
      title: "YC Directory - A Startup Showcase App",
      description:
        "A directory app listing Y Combinator startups with filters, search, and detailed views.",
      imgSrc: "/images/project3.png",
      repoLink: "https://github.com/yourusername/yc-directory",
      liveLink: "https://yc-directory.vercel.app",
      points: [
        "Built with Next.js and TailwindCSS",
        "Search and filter by category, status, and location",
        "Responsive design with SEO optimization",
      ],
    },
  ];

  return (
    <div
      id="work"
      ref={sectionRef}
      className="app-showcase px-4 md:px-12 py-12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={project.ref}
            className="bg-[#1f1f1f] rounded-2xl shadow-lg p-6 md:flex gap-8"
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 text-white flex flex-col gap-4 justify-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                {project.title}
              </h2>
              <p className="text-white/80">{project.description}</p>

              <ul className="list-disc list-inside text-sm md:text-base text-white/70">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex gap-4 pt-2">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};