import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-inherit p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <div className="min-w-full text-2xl font-[family-name:var(--font-geist-mono)]">
          &quot;The more you know,<br />
          the more you know you don&apos;t know.&quot;<br />
          — Aristotle
        </div>
        <div className="text-left">
          Hi! I&apos;m <b>Kefilino Khalifa Filardi</b>!<br />
          Thank you for stopping by and exploring my little corner of the internet.
        </div>
        <div className="min-w-full grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-emerald-700 text-white gap-2 hover:bg-emerald-900 dark:hover:bg-emerald-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/about-me"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 fill-white stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            About Me
          </Link>
          <Link
            className="rounded-full border-2 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/portfolio"
            rel="noopener noreferrer"
          >
            Explore My Work
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="mt-8 text-base">© 2025 Kefilino Khalifa Filardi</p>
      </footer>
    </div>
  );
}
