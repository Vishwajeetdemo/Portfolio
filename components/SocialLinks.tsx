import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { profile } from "@/lib/data";

const socials = [
  { name: "GitHub", href: profile.github, Icon: TbBrandGithub },
  { name: "YouTube", href: profile.youtube, Icon: SlSocialYoutube },
  { name: "LinkedIn", href: profile.linkedin, Icon: SlSocialLinkedin },
  { name: "Facebook", href: profile.facebook, Icon: SlSocialFacebook },
  { name: "Instagram", href: profile.instagram, Icon: SlSocialInstagram },
];

interface Props {
  className?: string;
  variant?: "filled" | "outlined";
}

const SocialLinks = ({ className = "", variant = "outlined" }: Props) => {
  const base =
    "w-10 h-10 text-xl rounded-full inline-flex items-center justify-center hover:text-accent cursor-pointer hover:-translate-y-2 transition-all duration-300";
  const style =
    variant === "filled"
      ? "bg-hoverColor"
      : "bg-bodyColor border border-accent/30 hover:border-accent text-textLight";
  return (
    <div className={className}>
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <span className={`${base} ${style}`}>
            <Icon />
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
