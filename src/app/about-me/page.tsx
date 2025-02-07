interface TimelineItem {
  title: string,
  description: string,
  period: string
}

export default function AboutMe() {
  const timelineItems: Array<TimelineItem> = [
    {
      title: 'Software Developer (Backend) – PT. Xtremax Teknologi Indonesia',
      description: 'Developing and optimizing web applications using ASP.NET technologies while delivering tailored CMS solutions with Sitefinity and Sitecore. Enhancing performance, scalability, and usability through efficient and secure coding.',
      period: 'September 2022 – Present'
    },
    {
      title: 'Web Developer Intern – LatihID',
      description: 'Contributed to both front-end and back-end development, improving platform functionality with Express.js, Mongoose, and React.js. Worked closely with designers to enhance user experience and tackled technical constraints effectively.',
      period: 'February 2021 – March 2021'
    },
    {
      title: 'Computer Science Laboratory Assistant – Padjadjaran University',
      description: 'Mentored students in programming, data structures, and software engineering. Led lab operations as a coordinator, ensuring smooth schedules and high-quality learning experiences.',
      period: 'February 2020 – June 2022'
    },
    {
      title: 'Bachelor of Informatics Engineering – Padjadjaran University',
      description: 'Specialized in Information Systems, Artificial Intelligence, and Computer Networking. Excelled academically while engaging in research and technical projects.',
      period: '2018 – 2022 | GPA: 3.84 (Cum Laude)'
    }
  ];
  return (
    <div className="grid place-items-center min-h-full p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center w-full lg:gap-16 sm:w-[75%]">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_2fr]">
          <div className="grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="sm:size-full md:size-3/4 lg:size-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <div className="grid grid-rows-* gap-8">
            <div className="flex flex-col gap-2">
              <b className="text-2xl">About Me</b>
              <p>
                I&apos;m a software developer with a strong focus on backend development. I&apos;ve always loved technology, especially anything involving desktop computers. From writing efficient code to optimizing system performance, I enjoy tackling complex problems and building solutions that make a difference.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <b className="text-2xl">Skills</b>
              <ul className="list-disc list-inside">
                <li><b className="font-semibold">Programming Languages</b>: C#, Java, JavaScript, PHP, Python, TypeScript</li>
                <li><b className="font-semibold">Web Technologies</b>: ASP.NET, Django, Express.js, Laravel, React.js, Vue.js</li>
                <li><b className="font-semibold">Cloud & DevOps</b>: Azure Functions, Virtual Machines, Power Automate</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <b className="text-2xl">Interests</b>
              <p>
                Technology has always been a passion of mine, not just in software but also in hardware. I&apos;m particularly enthusiastic about hardware and software related to video games—and, of course, playing the games themselves. I also enjoy exploring emerging tech trends, fine-tuning system performance, and automating workflows to improve efficiency.
              </p>
            </div>
          </div>
        </div>
          <div className="flex flex-col gap-2 max-w-full lg:w-[75%]">
            <b className="text-2xl">Experiences</b>
            <ol className="relative border-s border-emerald-700">
              {
                timelineItems.map((item) => {
                  return (
                    <li key={item.title} className="mb-10 ms-4">
                      <div className="absolute w-3 h-3 bg-emerald-700 dark:bg-emerald-600 rounded-full mt-1.5 -start-1.5"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-emerald-700 dark:text-emerald-600">{item.period}</time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                    </li>
                  )
                })
              }
            </ol>
          </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="mt-8 text-base">© 2025 Kefilino Khalifa Filardi</p>
      </footer>
    </div>
  );
}
