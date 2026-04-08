import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Approach',
      href: getPermalink('/#approach'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [{ text: 'Book Consultation', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Polycore Consulting',
      links: [
        { text: 'Services', href: getPermalink('/#services') },
        { text: 'Approach', href: getPermalink('/#approach') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/#contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    &copy; ${new Date().getFullYear()} Polycore Consulting · All rights reserved.
  `,
};
