import profileData from '@/data/profile.json';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {profileData.experience.map((exp, index) => (
            <div 
              key={index} 
              className="border-l-2 border-primary pl-6 pb-8 last:pb-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-sm text-light-muted dark:text-dark-muted">{exp.period}</span>
              </div>
              <p className="text-primary font-semibold mb-2">{exp.company}</p>
              <p className="text-light-muted dark:text-dark-muted">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
