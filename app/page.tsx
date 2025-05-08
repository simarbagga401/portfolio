const TechLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-col items-center gap-2">
    <img src={src} alt={alt} className="w-12 h-12 object-contain" />
    <span className="text-xs text-gray-700">{alt}</span>
  </div>
);

const WorkExperience = ({
  company,
  role,
  duration,
  description,
}: {
  company: string;
  role: string;
  duration: string;
  description: string;
}) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{company}</h3>
    <p className="text-gray-700 font-medium">{role}</p>
    <p className="text-sm text-gray-600 mb-2">{duration}</p>
    <p className="text-gray-800">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <img
          src="/simar-potrait.jpg"
          alt="Simar Singh Bagga"
          className="w-48 h-48 rounded-full object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Simar Singh Bagga
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Full-stack developer specializing in MERN stack development, with a
            passion for learning and implementing new technologies. Experienced
            in building scalable web applications and constantly exploring
            emerging tech trends.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/simarbagga401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/simar-bagga-a2099a1b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a
              href="https://www.figma.com/@simarbagga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Figma
            </a>
            <a
              href="/documents/resume.pdf"
              download
              className="text-gray-600 hover:text-gray-900"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="flex flex-col gap-2 text-gray-700">
          <a
            href="tel:+917506558658"
            className="hover:text-blue-600 transition-colors"
          >
            📞 +91 7506558658
          </a>
          <a
            href="mailto:simarbagga401@gmail.com"
            className="hover:text-blue-600 transition-colors"
          >
            📧 simarbagga401@gmail.com
          </a>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Tech I Love ❤️</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
          <TechLogo src="/tech/react.svg" alt="React" />
          <TechLogo src="/tech/redux.svg" alt="Redux" />
          <TechLogo src="/tech/vue.svg" alt="Vue.js" />
          <TechLogo src="/tech/nuxt.svg" alt="Nuxt.js" />
          <TechLogo src="/tech/pinia.svg" alt="Pinia" />
          <TechLogo src="/tech/nodejs.svg" alt="Node.js" />
          <TechLogo src="/tech/express.svg" alt="Express" />
          <TechLogo src="/tech/mongodb.svg" alt="MongoDB" />
          <TechLogo src="/tech/figma.svg" alt="Figma" />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

        <WorkExperience
          company="Rentkar - Switch to Share"
          role="Software Development Intern"
          duration="3 months"
          description="Contributed to rentkar.app, gaining hands-on experience in full-stack development. Worked on Complex Software and Learned how to work in a team."
        />

        <WorkExperience
          company="Solveeit"
          role="Software Development Intern"
          duration="3 months"
          description="Worked on solveeit.ai, developing and implementing various features."
        />

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Featured Project</h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium">WilliamHarry.com</h4>
            <p className="text-gray-600 mb-4">
              A fully functional e-commerce platform for coat sales, built with
              Nuxt.js and Firebase. Features Razorpay payment integration for
              seamless transactions.
            </p>
            <a
              href="https://williamharry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Visit Website →
            </a>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Beyond Code</h2>
        <p className="text-gray-800">
          When I'm not crafting code, you'll find me exploring various creative
          and intellectual pursuits. I'm an enthusiastic beatboxer and
          guitarist, finding harmony between technology and music. My passion
          for music extends to production, where I experiment with different
          sounds and rhythms. I'm deeply interested in personal growth through
          meditation and constantly expanding my knowledge through philosophy,
          psychology, and staying updated with the latest discoveries in
          mathematics and science.
        </p>
      </section>
    </div>
  );
}
