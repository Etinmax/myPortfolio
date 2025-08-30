import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export default function QualificationSection() {
  return (
    <section id="qualification" className="section">
      <h2 className="section-title" data-heading="My Journey">Qualifications</h2>
      <div className="qualification-container container mx-auto px-4 grid md:grid-cols-2 gap-12 justify-center sm:w-9/12 sm:gap-60 sm:ml-auto sm:mr-auto">
        <div className="education">
          <h3 className="qualification-title text-xl font-medium mb-8 flex items-center gap-2">
            <GraduationCap size={24} className="text-green-500" />
            Education
          </h3>
          <div className="timeline space-y-8 relative">
            {/* Timeline line - starts from first dot */}
            <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gray-700 -z-10"></div>
            
            {[
              { title: 'Auchi Polytechnic (Auchi, NG)', text: 'ND in Computer Science', date: '2011 - 2013' },
              { title: 'Federal Polytechnic Nekede (Owerri, NG)', text: 'HND Computer Science', date: '2017 - 2019' },
              { title: 'Udemy (California, US)', text: 'Web Development', date: '2023-2024' },
              { title: 'Coursera (California, US)', text: 'Google IT Support Professional', date: '2022' },
              { title: 'Axia Africa (Lagos, NG)', text: 'Backend Development', date: '2024-2025' },
              { title: 'Next College (Lagos, NG)', text: 'Full Stack Development', date: '2025-Present' },


              { title: 'University of People (California, US)', text: 'BSC in Computer Science', date: '2025 -Present' },

            ].map((item, index) => (
              <div 
                key={index} 
                className="timeline-item relative pl-12 group animate-in slide-in-from-left-8 fade-in duration-700"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="circle-dot absolute left-0 top-0 w-4 h-4 border-2 border-green-500 rounded-full bg-green-500 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300 z-10"></div>
                <div className="timeline-content bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <h3 className="timeline-title text-base font-medium mb-1 text-white group-hover:text-green-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="timeline-text text-sm mb-3 text-gray-300">{item.text}</p>
                  <span className="timeline-date flex items-center gap-2 text-sm text-green-500">
                    <Calendar size={16} />
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience">
          <h3 className="qualification-title text-xl font-medium mb-8 flex items-center gap-2">
            <Briefcase size={24} className="text-green-500" />
            Experience
          </h3>
          <div className="timeline space-y-8 relative">
            {/* Timeline line - starts from first dot */}
            <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gray-700 -z-10"></div>
            
            {[
              { title: 'Institute Of Leadership & MGT (Uromi, Edo)', text: 'Lead / IT Officer', date: '2025 - Present' },
              { title: 'TroyBit Systems LTD (Benin City, Edo)', text: 'Founder / CEO / CTO', date: '2024 - Present' },
              { title: 'Bliss Legacy (Benin City, Edo)', text: 'Tech Support Officer', date: '2024' },
              { title: 'Moonhealth Hospital  (Anambra)', text: 'Website Designer', date: '2024' },
              { title: 'Youreazy Online Shop n More', text: 'IT Manager', date: '2021 - 2022' },
              { title: 'LAPO Microfinance Bank', text: 'IT Officer', date: '2015 - 2021' }

              
            ].map((item, index) => (
              <div 
                key={index} 
                className="timeline-item relative pl-12 group animate-in slide-in-from-right-8 fade-in duration-700"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="circle-dot absolute left-0 top-0 w-4 h-4 border-2 border-green-500 rounded-full bg-green-500 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300 z-10"></div>
                <div className="timeline-content bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <h3 className="timeline-title text-base font-medium mb-1 text-white group-hover:text-green-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="timeline-text text-sm mb-3 text-gray-300">{item.text}</p>
                  <span className="timeline-date flex items-center gap-2 text-sm text-green-500">
                    <Calendar size={16} />
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}