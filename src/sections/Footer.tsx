import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/karthik-acharya-792719226/",
  },
  {
    title: "Twitter",
    href: "https://x.com/KarthikUdupi576?t=QfI9yvPm4fxcEX1i7w-fNw&s=09",
  },
  {
    title: "GitHub",
    href: "https://github.com/karthik-acharya-dev",
  },
  {
    title: "Discord",
    href: "https://discord.com/users/1251864545337675903",
  },
];
export const Footer = () => {
  return (
    <div className="relative z-1 overflow-x-clip">
      <div className=" absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2  bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5 "
              >
                <span className="font-semibold cursor-pointer">
                  {link.title}
                </span>
                <ArrowUpRightIcon className="size-4 cursor-pointer" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
