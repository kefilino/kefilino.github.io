import Image from 'next/image';
import React, { JSX } from 'react';

// Define the type for portfolio items
type PortfolioItem = {
  id: string;
  image: string;
  tags: Array<string>;
  title: string;
  description: string;
  linkButtons?: Array<JSX.Element>;
};

// JSON data for portfolio items
const portfolioData: Array<PortfolioItem> = [
  {
    id: 'berteman',
    image: 'vercel.svg',
    tags: ['2019', 'CodeIgniter'],
    title: 'Berteman',
    description: 'A social networking site where you can interact with friends, family, and people you know. Key features include posting updates, searching for users, editing profiles, and more.',
    linkButtons: [
      <a key="github" href="https://github.com/kefilino/berteman" target="_blank" rel="noopener" className="dark:invert inline-flex gap-1 items-center px-2 py-1 font-medium text-sm text-center text-white rounded-lg border-2 border-transparent bg-black/[.9] hover:bg-black/[.8]">
        View in GitHub
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>,
    ],
  },
  {
    id: 'sembaco',
    image: 'vercel.svg',
    tags: ['2020', 'Laravel', 'Vue.js'],
    title: 'Semba.co',
    description: 'A centralized platform for information and requests related to social aid programs organized by the government or other organizations. Built with Laravel 8, Inertia.js, and Vue.js. Key features include request management, aid management, user management, and more.',
    linkButtons: [
      <a key="github" href="https://github.com/kefilino/semba.co" target="_blank" rel="noopener" className="dark:invert inline-flex gap-1 items-center px-2 py-1 font-medium text-sm text-center text-white rounded-lg border-2 border-transparent bg-black/[.9] hover:bg-black/[.8]">
        View in GitHub
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>,
      <a key="demo-video" href="https://drive.google.com/file/d/1MrrDMM0wtAJGOL0dOW1R3iBLLhnlB6k6/view" target="_blank" rel="noopener" className="inline-flex gap-1 items-center px-2 py-1 text-sm font-medium text-center text-base rounded-lg border-2 border-solid border-black/[.08] dark:border-white/[.145] hover:bg-zinc-200 dark:hover:bg-white/[.2] hover:border-transparent">
        Demo Video
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      </a>,
    ],
  },
  {
    id: 'latihid-clone',
    image: 'vercel.svg',
    tags: ['2021', 'Django'],
    title: 'LatihID Homepage Clone',
    description: 'A case study project completed as part of the internship selection process by LatihID. The goal was to replicate the LatihID homepage, showcasing attention to detail and front-end development skills.',
    linkButtons: [
      <a key="github" href="https://github.com/kefilino/latihid-clone" target="_blank" rel="noopener" className="dark:invert inline-flex gap-1 items-center px-2 py-1 font-medium text-sm text-center text-white rounded-lg border-2 border-transparent bg-black/[.9] hover:bg-black/[.8]">
        View in GitHub
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>,
    ],
  },
  {
    id: 'oprec-asprak-2021',
    image: 'vercel.svg',
    tags: ['2021', 'Nuxt.js', 'Vuetify'],
    title: 'Oprec Asprak 2021',
    description: 'A website created for open recruitment of lab assistants, featuring information about responsibilities, benefits, and a CTA button for registration.',
    linkButtons: [
      <a key="website" href="https://oprecastprak2021.netlify.app/" target="_blank" rel="noopener" className="inline-flex gap-1 items-center px-2 py-1 text-sm font-medium text-center text-base rounded-lg border-2 border-solid border-black/[.08] dark:border-white/[.145] hover:bg-zinc-200 dark:hover:bg-white/[.2] hover:border-transparent">
        View Website
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
      </a>,
    ],
  },
  {
    id: 'sekuding',
    image: 'vercel.svg',
    tags: ['2021', 'Express.js', 'Vue.js'],
    title: 'Sekuding',
    description: 'An online learning platform designed to provide IT-related courses and resources, helping users enhance their technical skills and knowledge.',
    linkButtons: [
      <a key="github" href="https://github.com/aithrajbouty/sekudingg" target="_blank" rel="noopener" className="dark:invert inline-flex gap-1 items-center px-2 py-1 font-medium text-sm text-center text-white rounded-lg border-2 border-transparent bg-black/[.9] hover:bg-black/[.8]">
        View in GitHub
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>,
    ],
  },
  {
    id: 'kubito',
    image: 'vercel.svg',
    tags: ['2021', 'Unity', 'Vuforia'],
    title: 'Kubito',
    description: 'Kubito is an Android shooter game with a folklore-based story, featuring augmented reality gameplay.',
    linkButtons: [
      <a key="demo-video" href="https://www.youtube.com/watch?v=TwxudU005Y0" target="_blank" rel="noopener" className="inline-flex gap-1 items-center px-2 py-1 text-sm font-medium text-center text-base rounded-lg border-2 border-solid border-black/[.08] dark:border-white/[.145] hover:bg-zinc-200 dark:hover:bg-white/[.2] hover:border-transparent">
        Demo Video
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      </a>,
    ],
  },
  {
    id: 'frema',
    image: 'vercel.svg',
    tags: ['2021', 'Laravel Lumen', 'Vue.js'],
    title: 'Frema',
    description: 'Frema is a marketplace website connecting students with freelance job opportunities, offering affordable services for clients while helping students gain experience.',
    linkButtons: [
      <a key="github-backend" href="https://github.com/kefilino/frema-api" target="_blank" rel="noopener" className="dark:invert inline-flex gap-1 items-center px-2 py-1 font-medium text-sm text-center text-white rounded-lg border-2 border-transparent bg-black/[.9] hover:bg-black/[.8]">
        Backend Repo
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>,
      <a key="demo-video" href="https://github.com/muhamadilhamh/Frema" target="_blank" rel="noopener" className="inline-flex gap-1 items-center px-2 py-1 text-sm font-medium text-center text-base rounded-lg border-2 border-solid border-black/[.08] dark:border-white/[.145] hover:bg-zinc-200 dark:hover:bg-white/[.2] hover:border-transparent">
        Frontend Repo
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>,
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="grid place-items-center min-h-full p-8 pb-20 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center w-full lg:gap-16 lg:w-3/5">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>
          <div className="flex flex-col items-stretch space-y-6">
            {portfolioData.reverse().map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-start hover:bg-zinc-100 dark:bg-white/[0.0125] dark:hover:bg-white/[0.05] border border-black/[.08] dark:border-white/[.145] rounded-lg shadow-sm">
                <Image className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg" src={item.image} alt={item.title} width="256" height="256" />
                <div className="flex flex-col gap-2 justify-between p-4 leading-normal">
                  <div className="flex flex-row gap-2 justify-start">
                    {item.tags.map((tag) => (
                      <span key={`${item.id} ${tag}`} className="w-fit bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-emerald-200 dark:text-emerald-800">{tag}</span>
                    ))}
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                  {item.linkButtons && (
                    <div className="flex flex-row space-x-2 mb-3">
                      {item.linkButtons.map((button) => button)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="mt-8 text-base">© 2025 Kefilino Khalifa Filardi</p>
      </footer>
    </div>
  );
}