import logo_white from "../chai-assets/chaicode-white.svg"
import logo from "../chai-assets/chaicode-black.svg";
import instagram from "./images/instagram.png";
import instagram_dark from "./images/instagram_dark.jpg";
import youtube from "./images/youtube.svg";
import youtube_dark from "./images/youtube_dark.png";
import discord from "./images/discord.png";
import discord_dark from "./images/discord_dark.jpg";
import github from "./images/github.jpeg";
import github_dark from "./images/github_dark.png";
import linkedin from "./images/linkdin.jpg"
import linkedin_dark from "./images/linkedin_dark.jpg"
import twitter from "./images/twitter.png";
import twitter_dark from "./images/twitter_dark.png";
import { useTheme } from "./theme-provider";
interface SocialLink {
  href: string;
  icon: string;
  icon_dark: string;
  alt: string;
}


export const Footer = () => {
  const { theme } = useTheme();
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const resolvedTheme = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;


  const socials: SocialLink[] = [
    { href: "https://www.youtube.com/@chaiaurcode", icon: youtube, icon_dark : youtube_dark , alt: "YouTube" },
    { href: "https://www.instagram.com/hiteshchoudharyofficial/?hl=en", icon: instagram,icon_dark : instagram_dark , alt: "Instagram" },
    { href: "https://github.com/hiteshchoudhary", icon: github, icon_dark: github_dark ,alt: "GitHub" },
    { href: "https://x.com/hiteshdotcom", icon: twitter, icon_dark:twitter_dark, alt: "Twitter" },
    { href: "https://in.linkedin.com/in/hiteshchoudhary", icon: linkedin, icon_dark:linkedin_dark, alt: "LinkedIn" },
    { href: "https://hitesh.ai/discord", icon: discord,icon_dark:discord_dark ,alt: "Discord" },
  ];

  return (
    <footer className="border-t pt-20 pb-12 mt-20 ml-40">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     
      <div className="md:col-span-2">
        <a href="/" className="flex items-center gap-4 mb-6">
          <img
          src={resolvedTheme === "dark" ? logo_white : logo}
            alt="ChaiCode"
            className="h-10 w-auto"
          />
        </a>
        <p className="text-lg font-medium mb-6">Home for programmers</p>
        <div className="flex space-x-5 mb-8">
          {socials.map(({ href, icon,icon_dark, alt }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src= {resolvedTheme === "dark" ? icon_dark : icon} alt={alt} className="h-6 w-6 object-contain" />
            </a>
          ))}
        </div>
        <p className="text-sm ">© 2025 ChaiCode. All rights reserved.</p>
      </div>

     
      <div>
        <h3 className="text-lg font-bold  mb-4">Products</h3>
        <ul className="space-y-2 text-base">
          <li><a href="https://courses.chaicode.com/learn" className="hover:text-orange-500">Courses</a></li>
          <li><a href="https://courses.chaicode.com/learn/view-all?show=batch&amp;type=17" className="hover:text-orange-500">Cohort</a></li>
          <li><a href="https://courses.chaicode.com/learn/batch/about?bundleId=226894" className="hover:text-orange-500">Coding Hero</a></li>
          <li><a href="https://freeapi.app" className="hover:text-orange-500">FreeAPI</a></li>
          <li><a href="https://masterji.co/login" className="hover:text-orange-500">Masterji</a></li>
        </ul>
      </div>

  
      <div>
        <h3 className="text-lg font-bold mb-4">Resources</h3>
        <ul className="space-y-2 text-base">
          <li><a href="/docs" className="hover:text-orange-500">Docs</a></li>
          <li><a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
          <li><a href="/terms-of-services" className="hover:text-orange-500">Terms of Service</a></li>
          <li><a href="/pricing-policy" className="hover:text-orange-500">Pricing Policy</a></li>
          <li><a href="/refund-policy" className="hover:text-orange-500">Refund Policy</a></li>
        </ul>
      </div>
    </div>


    <div className="mt-24 w-full text-center">
      <h2 className="text-orange-500 text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-extrabold tracking-tight uppercase">
        CHAICODE
      </h2>
    </div>
  </div>
</footer>

  );
};
