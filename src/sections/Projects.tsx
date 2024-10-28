import dhara from "@/assets/images/Screenshot_20240903_232628.png";
import adsBanner from "@/assets/images/Screenshot_20241027_101936.png";
import lunacAssignment from "@/assets/images/Screenshot_20241027_105958.png";
import comingSoon from "@/assets/images/b7e1e580-c611-11ea-9b24-523c65baea0e.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Freelancer",
    year: "2024",
    title: "B-Con React-Native App",
    results: [
      { title: "Coming Soon" },
      { title: "Coming Soon" },
      { title: "Coming Soon" },
    ],
    link: "https://repository-images.githubusercontent.com/279611541/b7e1e580-c611-11ea-9b24-523c65baea0e",
    image: comingSoon,
  },
  {
    company: "Timechain Labs",
    year: "2024",
    title: "Dhara Landing Page",
    results: [
      { title: "Developed using SvelteKit and Tailwind css" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://tsoc24-dhara.vercel.app/",
    image: dhara,
  },
  {
    company: "GrowEasy",
    year: "2024",
    title: "GrowEasy Ads Banner Next-Js",
    results: [
      { title: "Adding sample images" },
      { title: "Customizing banner content" },
      { title: "Generating downloadable banner images" },
    ],
    link: "https://ad-banner-project-wic8-jl2y04g8n-karthik-acharyas-projects.vercel.app/",
    image: adsBanner,
  },
  {
    company: "Lunacal",
    year: "2024",
    title: "Lunacal-Assignment-React",
    results: [
      { title: "Tabbed Content Display" },
      { title: "Image Gallery Carousel" },
      { title: "Modern Technologies and Design" },
    ],
    link: "https://lunacal-assignment-react-qbfr-eb1ri7fc9.vercel.app/",
    image: lunacAssignment,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experience."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span> Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 rounded-t-2xl border-2 border-white/20 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
