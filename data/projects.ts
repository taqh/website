import type { Project } from '@/types/projects';

export const projects: Project[] = [
  {
    title: 'Cavescape',
    date: new Date('2024-09-27'),
    description:
      'Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster.',
    thumbnail: {
      large: '/projects/cavescape/header.jpg',
      alt: 'Cavescape',
    },
    tags: ['Game', 'Singleplayer'],
    path: '/projects/cavescape',
  },
  {
    title: 'Would You Bot',
    date: new Date('2021-09-01'),
    description:
      'Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!',
    thumbnail: {
      large: '/projects/would-you/showcase.png',
      alt: 'Would You Bot',
    },
    tags: ['Node.js', 'MongoDB', 'Discord'],
    path: '/projects/would-you',
  },
  {
    title: 'Stream Tracker (Glass Animals)',
    date: new Date('2024-07-20'),
    description:
      "Universal Music Group and Polydor Records partnered with the Roblox game 'Pls Donate' and their discord server for their popular band Glass Animals. Rivo built the Spotify stream tracker that was used to distribute rewards to the community and track the progress of the album.",
    thumbnail: {
      large: '/projects/stream-tracker/showcase.png',
      alt: 'Stream Tracker (Glass Animals)',
    },
    tags: ['Node.js', 'MongoDB', 'Discord'],
    path: '/projects/stream-tracker',
  },
];
