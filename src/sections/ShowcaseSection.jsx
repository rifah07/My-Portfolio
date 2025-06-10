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
        "A visually engaging and responsive landing page for a sushi restaurant, built using semantic HTML5 and modern CSS3. The project emphasizes animation, layout precision, and mobile-first design principles.",
      imgSrc: "/images/project33.png",
      repoLink: "https://github.com/rifah07/sushi-shop",
      liveLink: "https://sushi-shop-vite.vercel.app/",
      points: [
        "Developed with semantic HTML5 and modern CSS3",
        "Custom animated transitions using keyframes",
        "Clean and responsive layout",
        "Mobile-first design with consistent theme and branding",
        "Deployed using Vite for blazing-fast load times",
      ],
    },

    {
      ref: project2Ref,
      title: "LMS SaaS Platform - AI-Powered Learning System",
      description:
        "A full-featured SaaS Learning Management System (LMS) built using Next.js, Supabase, and Stripe. This app enables users to explore AI-powered tutors, manage sessions, and handle subscriptions with seamless authentication and payments.",
      imgSrc: "/images/project2.png",
      repoLink: "https://github.com/rifah07/a-teaching-saas-app",
      liveLink: "https://a-teaching-saas-app.vercel.app/",
      points: [
        "Responsive design built with Next.js, TypeScript, shadcn/ui and Tailwind CSS",
        "Authentication and billing powered by Clerk and Stripe",
        "Real-time backend with Supabase and PostgreSQL",
        "AI Voice Agent integration using Vapi for interactive learning",
        "Powerful companion creation system with custom subjects and tone",
        "Search and filter AI tutors by topic, skill, and style",
        "Error monitoring with Sentry for robust production support",
      ],
    },
    {
      ref: project3Ref,
      title: " ShopSphere – A Complete World for Shopping",
      description:
        "ShopSphere is a full-featured backend API for an advanced e-commerce platform, supporting features such as product management, cart, orders, reviews, payment, revenue tracking, and user roles..",
      imgSrc: "/images/project3.png",
      repoLink: "https://github.com/rifah07/ShopSphere__A-Complete-World-for-Shopping__Backend",
      liveLink: " https://shopsphere-a-complete-world-for-shopping.onrender.com/api-docs",
      points: [
        "This backend is built using Node.js, Express.js, TypeScript, and MongoDB",
        "API documentation with Swagger.",
        "Includes robust middleware, security",
        "Logging with	Morgan + Winston",
        "Security with Helmet, Rate Limiting, CORS"
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
