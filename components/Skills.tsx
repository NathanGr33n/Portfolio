import profileData from '@/data/profile.json';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {profileData.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-light-surface dark:bg-dark-surface border border-light-muted/20 dark:border-dark-muted/20 rounded-lg hover:border-primary hover:scale-105 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
