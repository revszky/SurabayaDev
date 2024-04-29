import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons-react";
import React from "react";

const socialLinks = [
  {
    icon: <IconBrandGithub />,
    label: "Github",
    href: "https://github.com/surabayadev",
  },
  {
    icon: <IconBrandFacebook />,
    label: "Facebook",
    href: "https://facebook.com/surabayadev",
  },
  {
    icon: <IconBrandTwitter />,
    label: "Twitter",
    href: "https://twitter.com/surabayadev",
  },
];

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-6xl py-8 px-2 mx-auto flex justify-between gap-4">
        <p>&copy; 2014 - 2024 SurabayaDev. All rights reserved.</p>

        <ul className="flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                target="_blank"
                className="flex border border-transparent rounded-full p-1 hover:border-secondary"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
