const dateNow = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  new Date().getHours()
);

const dateToday = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
dateToday.setHours(18);

const dateTomorrow = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
dateTomorrow.setDate(dateTomorrow.getDate() + 1);
dateTomorrow.setHours(11);

const lives = [
  {
    id: 0,
    userId: 0,
    interest: 'Music & Audio',
    tags: ['Mixing & Mastering', 'Producers & Composers'],
    date: dateNow,
    length: 2,
    description: 'Learn how to produce your tracks with Ableton.',
  },
  {
    id: 1,
    userId: 1,
    interest: 'Digital Marketing',
    tags: ['Social Media Marketing', 'SEO'],
    date: dateNow,
    length: 2,
    description: 'Learn SEO in 2 hours.',
  },
  {
    id: 2,
    userId: 1,
    interest: 'Digital Marketing',
    tags: ['Social Media Marketing'],
    date: dateTomorrow,
    length: 1,
    description: 'A short speak about marketing on social media',
  },
  {
    id: 3,
    userId: 2,
    interest: 'Graphics & Design',
    tags: ['Logo Design', 'Brand Style Guides'],
    date: dateNow,
    length: 2,
    description: 'I will help you to design your perfect logo.',
  },
  {
    id: 4,
    userId: 3,
    interest: 'Programming & Tech',
    tags: ['E-Commerce development'],
    date: dateToday,
    length: 2,
    description: 'You will be able to launch your own E-Commerce!',
  },
  {
    id: 5,
    userId: 4,
    interest: 'Writing & Translation',
    tags: ['Website Content', 'UX Writing'],
    date: dateToday,
    length: 2,
    description: 'I will help you to create a cool website content.',
  },
  {
    id: 6,
    userId: 5,
    interest: 'Writing & Translation',
    tags: ['Articles & Blog Posts', 'Website Content'],
    date: dateToday,
    length: 3,
    description: 'Write your own articles!',
  },
  {
    id: 7,
    userId: 6,
    interest: 'Programming & Tech',
    tags: 'WordPress',
    date: dateTomorrow,
    length: 2,
    description: 'Become a real expert with WordPress.',
  },
  {
    id: 8,
    userId: 7,
    interest: 'Video & Animation',
    tags: ['Video Editing', 'Short Video Ads'],
    date: dateTomorrow,
    length: 2,
    description: 'Be able to do your own ads.',
  },
  {
    id: 9,
    userId: 8,
    interest: 'Graphics & Design',
    tags: ['Brand Style Guides', 'Logo Design'],
    date: dateTomorrow,
    length: 2,
    description: 'Give a real and powerfull identity to your brand.',
  },
];
export default lives;
