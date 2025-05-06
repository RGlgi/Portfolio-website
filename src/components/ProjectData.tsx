import turkce from './assets/turkce-okuyorum.png'
import mystore from './assets/my-store.png'
import littlelemon from './assets/little-lemon.png'
import notes from './assets/notes.jpg'

export const ProjectData = [
  {
    title: 'Türkçe Okuyorum',
    description:
      'An educational app to help kids learn Turkish letters and syllables.',
    stack: ['React', 'Tailwind', 'Google Auth', 'TTS'],
    image: turkce,
    liveUrl: 'https://turkceokuyorum.netlify.app',
    githubUrl: 'https://github.com/RGlgi/turkish-reading-for-kids',
    tag: 'Education',
    category: 'React',
    date: '2024-03',
    difficulty: 'Intermediate',
  },
  {
    title: 'Modest Bloom',
    description:
      'A modern modest clothing store with category blocks and sliders.',
    stack: ['React', 'Tailwind', 'Image Slider'],
    image: mystore,
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/RGlgi/modest-bloom-store',
    tag: 'E-Commerce',
    category: 'React',
    date: '2024-02',
    difficulty: 'Intermediate',
  },
  {
    title: 'Little Lemon Restaurant',
    description:
      'A restaurant web app built for UI/UX practice and component styling.',
    stack: ['React', 'Styled Components'],
    image: littlelemon,
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/RGlgi/LittleLemonRestaurant',
    tag: 'UI/UX',
    category: 'React',
    date: '2024-01',
    difficulty: 'Beginner',
  },
  {
    title: 'Keep Notes',
    description: 'A simple note-taking app built with vanilla JavaScript.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    image: notes,
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/RGlgi/keep-notes',
    tag: 'Productivity',
    category: 'JavaScript',
    date: '2023-12',
    difficulty: 'Beginner',
  },
]
