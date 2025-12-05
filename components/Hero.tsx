import profileData from '@/data/profile.json';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            {profileData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-light-muted dark:text-dark-muted">
            {profileData.role}
          </p>
          <p className="text-lg md:text-xl text-light-muted dark:text-dark-muted max-w-2xl">
            {profileData.bio}
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              View GitHub
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
