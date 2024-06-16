import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0 rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32">
            <Image
              src="https://avatars.githubusercontent.com/u/102361045?v=4"
              width={128}
              height={128}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">Eskandar Atrakchi</h1>
            <p className="text-gray-400 text-lg">Full Stack Developer</p>
            <p className="mt-4 max-w-[500px]">
              I am a passionate software engineer with 5 years of experience in building scalable and efficient web
              applications. I have a strong background in JavaScript, React, and Node.js, and I&apos;m always eager to learn
              new technologies and techniques.
            </p>
          </div>
        </div>
      </header>
      <nav className="bg-gray-100 dark:bg-gray-800 py-4 px-4 md:px-6">
        <div className="container mx-auto flex justify-center md:justify-start gap-4 md:gap-6">
          <Link
            href="#work-experience"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 font-medium"
            prefetch={false}
          >
            Experience
          </Link>
          <Link
            href="#education"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 font-medium"
            prefetch={false}
          >
            Education
          </Link>
          <Link
            href="#skills"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 font-medium"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#additional-info"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 font-medium"
            prefetch={false}
          >
            Additional Info
          </Link>
          <div className="fixed top-4 right-4 flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full" >
            <ThemeSwitch />
          </div>
        </div>
      </nav>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto space-y-12">
          <section id="work-experience">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Web & Chrome Extension Developer </h3>
                <p className="text-gray-500 dark:text-gray-400">Jan/2023 – March/2023 | CDCFE IT Department (Coolock, Dublin)</p>
                <p className="mt-2">
                  Developed and maintained complex web applications using React, Node.js, and various other
                  technologies. Collaborated with cross-functional team to deliver high-quality web solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-gray-500 dark:text-gray-400">Jan/2021 – Present | avanzo.io</p>
                <p className="mt-2">
                  Co-Founder and responsible for building and optimizing the end-to-end architecture of blockchain application. Worked closely
                  with designers, front-end, and back-end developers to ensure seamless integration and a great user experience.
                </p>
              </div>
            </div>
          </section>
          <section id="education">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Bachelor Science in Computing, QQI BSc (Honours) Degree</h3>
                <p className="text-gray-500 dark:text-gray-400">2023 – Present | National College of Ireland, Dublin</p>
              </div>
              <div>
              <h3 className="text-xl font-semibold">Front-end web development </h3>
              <p className="text-gray-500 dark:text-gray-400">2023 – 2024 | IBM </p>
              </div>
            </div>
          </section>
          <section id="skills">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold">Programming Languages</h3>
                <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Solidity</li>
                  <li>Java</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold">Frameworks and Libraries</h3>
                <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>ethers.js</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold">Tools and Technologies</h3>
                <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>Git</li>
                  <li>Convex</li>
                  <li>clerk (Auth)</li>
                  <li>MYSQL</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="additional-info">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>2022 – 2023 | Coláiste Dhúlaigh College, Dublin.
                    Qualification: QQI 6 Higher Advanced Certificate in Computer Science</li>
                  <li>2021 – 2022 | Coláiste Dhúlaigh College, Dublin. 
                    Qualification: QQI 5 Certificate in Computer Science</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Hobbies and Interests</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  In my free time, I enjoy hiking, reading, and learning about new technologies. I also make videos on TikTok <a href="https://www.tiktok.com/@itiscoded?lang=en">itiscoded</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <div className="mt-2 flex items-center gap-2 text-gray-400">
              <MailIcon className="h-5 w-5" />
              <a href="#">isgan151@gmail.com</a>
            </div>
            <div className="mt-2 flex items-center gap-2 text-gray-400">
              <PhoneIcon className="h-5 w-5" />
              <a href="#">0857233986</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/eskandar-atrakchi-47603a22b/" className="text-gray-400 hover:text-gray-50" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/EskandarAtrakchi" className="text-gray-400 hover:text-gray-50" prefetch={false}>
              <GitHubIcon className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com/AtrakchiE" className="text-gray-400 hover:text-gray-50" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function GitHubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 9.5c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.6V22" />
    </svg>
  );
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}