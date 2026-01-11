export type SocialLink = {
  label: string;
  url: string;
};

export type SocialLinksData = {
  links: SocialLink[];
};

export const socialLinks: SocialLinksData = {
  links: [
    {
      label: "GitHub",
      url: "https://github.com/Houser97",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/arturoa-riverar/",
    },
  ],
};


export const EMAIL = "arturo.riverar97@gmail.com";