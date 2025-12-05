import profileData from '@/data/profile.json';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-light-muted dark:text-dark-muted">
          <p>
            I&apos;m a Software Engineering student at Oregon Institute of Technology (OIT) 
            and Lead Developer at NGK-Systems. I&apos;m passionate about building innovative 
            solutions that solve real-world problems.
          </p>
          <p>
            My experience spans across multiple domains including web development, mobile apps, 
            game development, and systems programming. I enjoy working with diverse technologies 
            and continuously learning new skills to expand my capabilities.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or working on personal projects that challenge my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
