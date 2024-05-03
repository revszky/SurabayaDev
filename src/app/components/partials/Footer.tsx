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
    <footer className="border-t border-green-500">
      <div className="max-w-6xl py-4 px-2 mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <p className="text-center md:text-left p-1">
          &copy; 2014 - 2024 SurabayaDev. All rights reserved.
        </p>

        <div className="p-1">
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
      </div>
    </footer>
  );
};

export default Footer;
