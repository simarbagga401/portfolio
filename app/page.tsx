const Blob = ({
  position,
  size,
  color = "#3b82f6", // Use blue as default instead of dark
  blur = "60px", // Less blur to make it more visible
  opacity = 0.4, // Higher opacity
}: {
  position: string;
  size: string;
  color?: string;
  blur?: string;
  opacity?: number;
}) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      position: "absolute",
      width: size,
      height: size,
      backgroundColor: color,
      ...JSON.parse(position),
      filter: `blur(${blur})`,
      opacity: opacity,
      zIndex: 0,
    }}
  />
);

const TechLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative group">
    <div className="flex flex-col items-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-md bg-[#171717] border border-[#262626] hover:border-[#3b82f6] transition-all duration-300 relative overflow-hidden">
      {/* Enhanced blob effect on hover */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#262626] rounded-full filter blur-[15px] opacity-0 group-hover:opacity-90 transition-all duration-500"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#3b82f6] rounded-full filter blur-[25px] opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      <img src={src} alt={alt} className="w-8 h-8 sm:w-12 sm:h-12 object-contain relative z-10" />
      <span className="text-[10px] sm:text-xs text-[#94a3b8] relative z-10">{alt}</span>
    </div>
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
    <h3 className="text-lg sm:text-xl font-semibold text-white">{company}</h3>
    <p className="text-sm sm:text-base text-[#a0aec0] font-medium">{role}</p>
    <p className="text-xs sm:text-sm text-[#718096] mb-2">{duration}</p>
    <p className="text-sm sm:text-base text-[#cbd5e0]">{description}</p>
  </div>
);

export default function Home() {  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 sm:px-10 sm:py-16 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative Blobs - Positioned better for mobile */}
      <Blob
        position='{"top": "-50px", "right": "-150px"}'
        size="350px"
        color="#3b82f6"
        blur="80px"
        opacity={0.3}
      />
      <Blob
        position='{"bottom": "-80px", "left": "-120px"}'
        size="300px"
        color="#171717"
        blur="70px"
        opacity={0.6}
      />
      <Blob
        position='{"top": "40%", "left": "-60px"}'
        size="200px"
        color="#3b82f6"
        blur="60px"
        opacity={0.2}
      />
      <Blob
        position='{"top": "30%", "right": "-80px"}'
        size="250px"
        color="#171717"
        blur="60px"
        opacity={0.5}
      />
      {/* Hero Section */}
      <section id="about" className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20 relative z-10">
        <div className="relative mx-auto md:mx-0 w-full max-w-[220px] md:max-w-[240px] aspect-square">
          {/* Profile photo blob decorations - More mobile-friendly */}
          <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-full h-full bg-[#3b82f6] rounded-full filter blur-[20px] opacity-30"></div>
          <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-full h-full bg-[#171717] rounded-full filter blur-[15px] opacity-70"></div>
          <div className="absolute inset-0 bg-[#171717] rounded-md blur-sm opacity-85"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-24 sm:h-24 bg-[#262626] rounded-full filter blur-[10px] opacity-80"></div>
          <img
            src="/simar-potrait.jpg"
            alt="Simar Singh Bagga"
            className="relative w-full h-full object-cover rounded-md border-[5px] border-[#171717] shadow-2xl z-10"
          />        </div>
        <div className="relative mt-6 md:mt-0">
          {/* Name highlight blob - Mobile-friendly */}
          <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-[105%] sm:w-[120%] h-16 sm:h-24 bg-[#171717] rounded-full filter blur-[20px] opacity-80"></div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-white relative z-10">
            Simar Singh Bagga
          </h1>
          <p className="text-base md:text-lg text-[#cbd5e0] mb-4 md:mb-6 relative z-10">
            Full-stack developer specializing in MERN stack development, with a
            passion for learning and implementing new technologies. Experienced
            in building scalable web applications and constantly exploring
            emerging tech trends.
          </p>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <a
              href="https://github.com/simarbagga401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0aec0] hover:text-[#3b82f6] transition-colors relative group inline-block"
            >
              <span className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/0 to-[#3b82f6]/0 rounded-lg blur group-hover:from-[#3b82f6]/10 group-hover:via-[#3b82f6]/10 group-hover:to-[#3b82f6]/5 transition-all duration-500"></span>
              <span className="relative">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/simar-bagga-a2099a1b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0aec0] hover:text-[#3b82f6] transition-colors relative group inline-block"
            >
              <span className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/0 to-[#3b82f6]/0 rounded-lg blur group-hover:from-[#3b82f6]/10 group-hover:via-[#3b82f6]/10 group-hover:to-[#3b82f6]/5 transition-all duration-500"></span>
              <span className="relative">LinkedIn</span>
            </a>
            <a
              href="https://www.figma.com/@simarbagga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0aec0] hover:text-[#3b82f6] transition-colors relative group inline-block"
            >
              <span className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/0 to-[#3b82f6]/0 rounded-lg blur group-hover:from-[#3b82f6]/10 group-hover:via-[#3b82f6]/10 group-hover:to-[#3b82f6]/5 transition-all duration-500"></span>
              <span className="relative">Figma</span>
            </a>
            <a
              href="/documents/resume.pdf"
              download
              className="text-[#a0aec0] hover:text-[#3b82f6] transition-colors relative group inline-block"
            >
              <span className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/0 to-[#3b82f6]/0 rounded-lg blur group-hover:from-[#3b82f6]/10 group-hover:via-[#3b82f6]/10 group-hover:to-[#3b82f6]/5 transition-all duration-500"></span>
              <span className="relative">Download Resume</span>
            </a>
          </div>
        </div>      </section>      {/* Tech Stack Section */}
      <section className="mb-16 relative">
        {/* Tech Section Blobs - Larger and more visible */}
        <Blob
          position='{"top": "30%", "right": "-60px"}'
          size="250px"
          color="#262626"
          blur="50px"
          opacity={0.8}
        />
        <Blob
          position='{"bottom": "10%", "left": "20%"}'
          size="180px"
          color="#3b82f6"
          blur="70px"
          opacity={0.25}
        />
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white relative z-10">Tech I Love ❤️</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-8 relative z-10">
          <TechLogo src="/tech/react.svg" alt="React" />
          <TechLogo src="/tech/redux.svg" alt="Redux" />
          <TechLogo src="/tech/vue.svg" alt="Vue.js" />
          <TechLogo src="/tech/nuxt.svg" alt="Nuxt.js" />
          <TechLogo src="/tech/pinia.svg" alt="Pinia" />
          <TechLogo src="/tech/nodejs.svg" alt="Node.js" />
          <TechLogo src="/tech/express.svg" alt="Express" />
          <TechLogo src="/tech/mongodb.svg" alt="MongoDB" />
          <TechLogo src="/tech/figma.svg" alt="Figma" />
        </div>      </section>      {/* Work Experience Section */}
      <section className="mb-12 md:mb-16 relative">
        {/* Work Experience Blob - Better positioned for mobile */}
        <Blob
          position='{"bottom": "20%", "left": "-100px"}'
          size="220px"
          color="#171717"
          blur="40px"
          opacity={0.8}
        />
        <Blob
          position='{"top": "10%", "right": "-80px"}'
          size="180px"
          color="#3b82f6"
          blur="60px"
          opacity={0.3}
        />
        
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white relative z-10">Work Experience</h2>

        <WorkExperience
          company="Rentkar - Switch to Share"
          role="Full Stack Developer"
          duration="May 2025 - Present"
          description="Working full-time at rentkar.app, developing and maintaining complex software solutions. Gaining extensive experience in full-stack development and collaborative team environments."
        />        
        <WorkExperience
          company="Solveeit"
          role="Software Development Intern"
          duration="3 months"
          description="Worked on solveeit.ai, used rag, ai-agents, nextjs + typescript."
        />

        <WorkExperience
          company="Rentkar - Switch to Share"
          role="Software Development Intern"
          duration="3 months"
          description="Contributed to rentkar.app, gaining hands-on experience in full-stack development. Worked on complex software and learned how to work in a team."
        />
          <div className="mt-6 sm:mt-8 relative">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white relative z-10">Featured Project</h3>
          <div className="bg-[#171717] p-4 sm:p-6 rounded-lg border border-[#262626] relative overflow-hidden">
            {/* Enhanced Project Card Blobs - Better mobile positioning */}
            <div className="absolute -top-10 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#262626] rounded-full filter blur-[20px] opacity-80 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-40 h-24 sm:h-40 bg-[#3b82f6] rounded-full filter blur-[30px] opacity-20 translate-y-1/2 -translate-x-1/4"></div>
            <div className="relative z-10">
              <h4 className="text-base sm:text-lg font-medium text-white">WilliamHarry.com</h4>
              <p className="text-sm sm:text-base text-[#a0aec0] mb-3 sm:mb-4">
                A fully functional e-commerce platform for coat sales, built with
                Nuxt.js and Firebase. Features Razorpay payment integration for
                seamless transactions.
              </p>              <a
              href="https://williamharry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#171717] border border-[#3b82f6] text-[#3b82f6] text-sm sm:text-base hover:bg-[#1a1a1a] rounded-md group overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#3b82f6] rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Visit Website →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
        {/* Personal Section */}
      <section className="mb-12 md:mb-16 relative">
        {/* Beyond Code Blob - Better positioning for mobile */}
        <Blob
          position='{"top": "20%", "right": "-80px"}'
          size="220px"
          color="#262626"
          blur="45px"
          opacity={0.9}
        />
        <Blob
          position='{"bottom": "-30px", "right": "30%"}'
          size="150px"
          color="#3b82f6"
          blur="50px"
          opacity={0.3}
        />
        
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white relative z-10">Beyond Code</h2>
        <p className="text-sm sm:text-base text-[#cbd5e0] relative z-10">
          When I'm not crafting code, you'll find me exploring various creative
          and intellectual pursuits. I'm an enthusiastic beatboxer and
          guitarist, finding harmony between technology and music. My passion
          for music extends to production, where I experiment with different
          sounds and rhythms. I'm deeply interested in personal growth through
          meditation and constantly expanding my knowledge through philosophy,
          psychology, and staying updated with the latest discoveries in
          mathematics and science.
        </p>      </section>
        {/* Contact Section */}
      <section id="contact" className="relative">
        {/* Contact Section Blob - Better positioned for mobile */}  
        <Blob
          position='{"bottom": "-40px", "right": "5%"}'
          size="200px"
          color="#171717"
          blur="35px"
          opacity={0.85}
        />
        <Blob
          position='{"top": "30%", "left": "-100px"}'
          size="180px"
          color="#3b82f6"
          blur="60px"
          opacity={0.25}
        />
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-0"></div>
        
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white relative z-10">Contact</h2>        <div className="flex flex-col gap-3 sm:gap-4 relative z-10">
          <a
            href="tel:+917506558658"
            className="text-sm sm:text-base text-[#a0aec0] hover:text-[#3b82f6] transition-colors inline-block relative group"
          >
            <span className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/0 to-[#3b82f6]/0 rounded-lg blur group-hover:from-[#3b82f6]/10 group-hover:via-[#3b82f6]/10 group-hover:to-[#3b82f6]/5 transition-all duration-500"></span>
            <span className="relative">📞 +91 7506558658</span>
          </a>
          <a
            href="mailto:simarbagga401@gmail.com"
            className="text-sm sm:text-base text-[#a0aec0] hover:text-[#3b82f6] transition-colors inline-block relative group"
          >
            <span className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/0 to-[#3b82f6]/0 rounded-lg blur group-hover:from-[#3b82f6]/10 group-hover:via-[#3b82f6]/10 group_hover:to-[#3b82f6]/5 transition-all duration-500"></span>
            <span className="relative">📧 simarbagga401@gmail.com</span>
          </a></div>
      </section>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none">
        <Blob
          position='{"bottom": "-150px", "left": "30%"}'
          size="600px"
          color="#171717"
          blur="100px"
          opacity={0.7}
        />
      </div>
    </div>
  );
}
