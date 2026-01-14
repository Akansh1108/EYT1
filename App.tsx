
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  GraduationCap, 
  MonitorCheck, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface NavLink {
  label: string;
  href: string;
}

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  link: string;
  accentColor: string; // 'teal' or 'green'
}

interface CaseStudyProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  buttonText: string;
  link?: string;
  accentColor: 'teal' | 'green';
  reverse?: boolean;
}

// --- Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'For Corporates', href: '#corporates' },
    { label: 'For Schools', href: '#schools' },
    { label: 'For Edtech', href: '#edtech' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-md py-3' : 'bg-white/90 py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="bg-gradient-to-r from-[#00A8CC] to-[#00D97E] text-transparent bg-clip-text">Ease Your Tease</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-semibold text-[#1a1a2e] hover:text-[#00A8CC] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://calendly.com/easeyourtease/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#00A8CC] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#0092B0] transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-[#1a1a2e]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-lg font-bold text-[#1a1a2e]" 
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://calendly.com/easeyourtease/30min"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#00A8CC] text-white px-6 py-4 rounded-2xl font-bold text-center active:scale-95 transition-transform"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ id, icon, title, subtitle, description, buttonText, link, accentColor }) => {
  const isTeal = accentColor === 'teal';
  return (
    <div id={id} className="group perspective-1000 h-full">
      <div className="card-3d bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isTeal ? 'bg-[#00A8CC]/10 text-[#00A8CC] group-hover:bg-[#00A8CC]' : 'bg-[#00D97E]/10 text-[#00D97E] group-hover:bg-[#00D97E]'} group-hover:text-white`}>
          {icon}
        </div>
        <h3 className="text-2xl font-black mb-1 text-[#1a1a2e]">{title}</h3>
        <p className={`font-bold text-xs mb-4 uppercase tracking-[0.2em] ${isTeal ? 'text-[#00A8CC]' : 'text-[#00D97E]'}`}>{subtitle}</p>
        <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-medium">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full font-bold py-4 px-6 rounded-2xl border-2 transition-all duration-300 active:scale-95 ${
            isTeal 
              ? 'border-[#00A8CC] text-[#00A8CC] hover:bg-[#00A8CC] hover:text-white' 
              : 'border-[#00D97E] text-[#00D97E] hover:bg-[#00D97E] hover:text-white'
          }`}
        >
          {buttonText}
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

const CaseStudyCard: React.FC<CaseStudyProps> = ({ category, title, subtitle, description, highlights, buttonText, link, accentColor, reverse }) => {
  const isTeal = accentColor === 'teal';
  return (
    <div className={`flex flex-col lg:flex-row items-stretch gap-0 rounded-[2.5rem] overflow-hidden shadow-xl bg-white border border-gray-100 mb-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`w-full lg:w-5/12 relative min-h-[300px] ${isTeal ? 'bg-[#00A8CC]/5' : 'bg-[#00D97E]/5'}`}>
        <img 
          src={`https://images.unsplash.com/photo-${isTeal ? '1677442136019-21780ecad995' : '1509062522246-3755977927d7'}?auto=format&fit=crop&q=80&w=800`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-6 left-6">
          <span className={`inline-block px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest ${isTeal ? 'bg-[#00A8CC]' : 'bg-[#00D97E]'}`}>
            {category}
          </span>
        </div>
      </div>
      <div className={`w-full lg:w-7/12 p-8 md:p-12 flex flex-col justify-center border-l-8 ${isTeal ? 'border-[#00A8CC]' : 'border-[#00D97E]'}`}>
        <h3 className="text-3xl font-black mb-2 text-[#1a1a2e]">{title}</h3>
        <p className={`text-lg font-bold mb-6 ${isTeal ? 'text-[#00A8CC]' : 'text-[#00D97E]'}`}>{subtitle}</p>
        <div className="text-gray-600 leading-relaxed font-medium mb-8 whitespace-pre-line">
          {description}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={`mt-1 rounded-full p-0.5 ${isTeal ? 'bg-[#00A8CC]/20 text-[#00A8CC]' : 'bg-[#00D97E]/20 text-[#00D97E]'}`}>
                <CheckCircle2 size={16} />
              </div>
              <span className="text-sm text-gray-700 font-bold">{item}</span>
            </div>
          ))}
        </div>
        <a 
          href={link || "#"} 
          target={link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 self-start px-8 py-4 rounded-2xl font-black transition-all border-2 active:scale-95 ${
            isTeal 
              ? 'border-[#00A8CC] text-[#00A8CC] hover:bg-[#00A8CC] hover:text-white' 
              : 'border-[#00D97E] text-[#00D97E] hover:bg-[#00D97E] hover:text-white'
          }`}
        >
          {buttonText}
          {link && <ExternalLink size={18} />}
        </a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#00A8CC]/30 scroll-smooth">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="home" className="relative py-20 lg:py-40 overflow-hidden flex items-center">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[#00A8CC]/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-[#00D97E]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#00A8CC]/10 text-[#00A8CC] px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest mb-10 shadow-sm">
              <Sparkles size={16} />
              <span>Built for the 2030 World</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tight text-[#1a1a2e]">
              AI, NEP & EdTech <br />
              <span className="bg-gradient-to-r from-[#00A8CC] via-[#00D97E] to-[#00A8CC] text-transparent bg-clip-text">
                transformation studio
              </span> <br />
              <span className="text-2xl md:text-5xl font-bold text-gray-400">by Akansh Tyagi</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto font-bold leading-relaxed">
              One strategist, three specialized tracks: <br />
              <span className="text-[#1a1a2e]">Corporates · Schools · Edtech</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://calendly.com/easeyourtease/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#00A8CC] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#0092B0] transition-all shadow-xl hover:shadow-[#00A8CC]/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Book a Consultation
                <ArrowRight size={22} />
              </a>
              <a 
                href="#about"
                className="w-full sm:w-auto bg-white text-[#00A8CC] border-2 border-[#00A8CC]/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#00A8CC]/5 hover:border-[#00A8CC] transition-all active:scale-95 flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section id="features" className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <ServiceCard 
                id="corporates"
                icon={<Building2 size={32} />}
                title="For Corporates"
                subtitle="AI Consulting & Training"
                description="Transform your organization with AI-powered workflows, automation, and strategic implementation. We guide leadership to optimize for the age of intelligence."
                buttonText="Explore Solutions"
                link="https://connect-2026-1.preview.emergentagent.com/corporates"
                accentColor="teal"
              />
              <ServiceCard 
                id="schools"
                icon={<GraduationCap size={32} />}
                title="For Schools"
                subtitle="NEP & STEM Consulting"
                description="NEP 2020-aligned AI education programs that nurture innovation at the school level. Curriculums designed for real-world impact and student creativity."
                buttonText="View Programs"
                link="https://connect-2026-1.preview.emergentagent.com/schools"
                accentColor="green"
              />
              <ServiceCard 
                id="edtech"
                icon={<MonitorCheck size={32} />}
                title="For Edtech"
                subtitle="Training & Cohorts"
                description="Cohort-based programs for AI-native product and project management professionals. Building the leaders of tomorrow's educational landscape."
                buttonText="Join Cohorts"
                link="https://connect-2026-1.preview.emergentagent.com/edtech"
                accentColor="teal"
              />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#1a1a2e]">Case Studies: Innovation in Action</h2>
              <p className="text-xl text-gray-500 font-bold">Real-world AI implementations demonstrating speed, vision, and impact</p>
              <div className="h-1.5 w-24 bg-[#00D97E] mx-auto mt-8 rounded-full"></div>
            </div>

            <CaseStudyCard 
              category="Education Innovation"
              title="AI PTM Assistant"
              subtitle="Built by Teen Innovators in 1.5 Weeks"
              accentColor="green"
              description={`Two extraordinary students, aged 13 and 17, developed an AI PTM (Parent-Teacher Meeting) Assistant in just 1.5 weeks of guided AI training. With mentorship on design thinking and prompt engineering, they transformed a simple automation idea into a working prototype capable of generating personalized PTM reports, feedback summaries, and AI-powered schedule management.

              This project demonstrates how quickly young minds can master AI tools when guided through the right 40:30:30 framework (theory, practice, application). It's also a glimpse into how NEP 2020-inspired AI education can nurture real-world innovation at the school level.`}
              highlights={[
                "Built in less than 2 weeks using GenAI workflows",
                "Students learned prompt design & persona creation",
                "National-level educator interest received"
              ]}
              buttonText="Learn More"
            />

            <CaseStudyCard 
              category="Product Innovation"
              title="CupidX"
              subtitle="Outpacing Meta's AI Dating Innovation"
              accentColor="teal"
              reverse
              description={`CupidX is an experimental AI-driven matchmaking prototype designed to personalize human connection beyond swipes and profiles. Remarkably, the concept and demo went live on LinkedIn two weeks before Meta announced its AI dating companion upgrade, demonstrating thought leadership and speed in GenAI product prototyping.

              CupidX leverages multimodal intelligence for emotional compatibility insights — blending conversational AI, personality embeddings, and ethical interaction design. The launch not only validated the idea's relevance but also positioned the project as a visionary step toward the future of AI-powered relationships.`}
              highlights={[
                "Published 2 weeks before Meta's announcement",
                "Multimodal intelligence & personality embeddings",
                "Thought leadership in AI x Social Connection"
              ]}
              buttonText="View on LinkedIn"
              link="https://www.linkedin.com/in/akansh-tyagi-965793114/"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-1/3">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#00A8CC] to-[#00D97E] rounded-[3rem] opacity-20 blur-2xl transition duration-500 group-hover:opacity-30"></div>
                  <div className="relative bg-white p-1 rounded-[2.8rem] shadow-xl overflow-hidden aspect-[4/5]">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                      alt="Akansh Tyagi"
                      className="w-full h-full object-cover rounded-[2.5rem]"
                    />
                  </div>
                  <div className="mt-8">
                     <a 
                      href="https://www.linkedin.com/in/akansh-tyagi-965793114/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-white text-[#00A8CC] border-2 border-[#00A8CC] px-8 py-4 rounded-2xl font-black text-lg hover:bg-[#00A8CC] hover:text-white transition-all shadow-lg active:scale-95"
                    >
                      <Linkedin size={24} />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <span className="text-[#00A8CC] font-black text-sm uppercase tracking-widest mb-4 inline-block">The Strategist</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-10 leading-tight">Akansh Tyagi</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed font-bold mb-12">
                  You're an AI/AGI Strategist, program builder, and entrepreneur who turns cutting-edge AI research into practical systems that drive real revenue and real transformation for businesses and institutions. From boardrooms to classrooms, your work sits at the intersection of strategy, technology, and creativity—designing AI-powered products, playbooks, and experiences that are built for where the world is heading, not where it's been.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-[#1a1a2e] flex items-center gap-2">
                      <div className="w-2 h-6 bg-[#00A8CC] rounded-full"></div>
                      Who I Am
                    </h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      A systems thinker dedicated to bridging the gap between emerging AGI capabilities and organizational excellence.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-[#1a1a2e] flex items-center gap-2">
                      <div className="w-2 h-6 bg-[#00D97E] rounded-full"></div>
                      What I Build
                    </h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      AI-native products, NEP-aligned education frameworks, and high-impact corporate automation playbooks.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-[#1a1a2e] flex items-center gap-2">
                      <div className="w-2 h-6 bg-[#00A8CC] rounded-full"></div>
                      How I Work
                    </h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      Using the 40:30:30 framework to ensure theory meets practice and leads to immediate real-world application.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-[#1a1a2e] flex items-center gap-2">
                      <div className="w-2 h-6 bg-[#00D97E] rounded-full"></div>
                      Who I Work With
                    </h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      Forward-thinking CEOs, innovative school leaders, and ambitious Edtech product teams building for the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#00A8CC] rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#00D97E] rounded-full blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Ready to Transform Your <br /><span className="text-[#00D97E]">AI Strategy?</span></h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto font-bold leading-relaxed">
              Whether you're a corporate team, school leadership, or ambitious professional—let's build your 2030-ready future together.
            </p>
            <a 
              href="https://calendly.com/easeyourtease/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#00A8CC] text-white px-12 py-7 rounded-[2rem] font-black text-2xl hover:bg-[#0092B0] transition-all shadow-[0_20px_50px_rgba(0,168,204,0.3)] hover:scale-105 active:scale-95"
            >
              Schedule Your Consultation
              <Calendar size={32} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer id="contact" className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <a href="#home" className="text-3xl font-black flex items-center gap-2">
                <span className="bg-gradient-to-r from-[#00A8CC] to-[#00D97E] text-transparent bg-clip-text">Ease Your Tease</span>
              </a>
              <p className="text-gray-500 font-bold leading-relaxed">
                AI/AGI Strategy & Transformation for the 2030-ready world. Empowering organizations to thrive in the era of intelligence.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/akansh-tyagi-965793114/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#00A8CC] hover:bg-[#00D97E] hover:text-white transition-all shadow-sm"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:easeyourtease@gmail.com" 
                  className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#00A8CC] hover:bg-[#00A8CC] hover:text-white transition-all shadow-sm"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-black mb-8 text-[#1a1a2e]">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'For Corporates', 'For Schools', 'For Edtech', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-[#00A8CC] hover:underline font-bold transition-all flex items-center gap-2 group"
                    >
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-[#00A8CC] transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-black mb-8 text-[#1a1a2e]">Contact</h4>
              <ul className="space-y-6">
                <li className="group">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Email</p>
                  <a href="mailto:easeyourtease@gmail.com" className="text-gray-600 font-bold hover:text-[#00A8CC] transition-colors break-all">
                    easeyourtease@gmail.com
                  </a>
                </li>
                <li className="group">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Phone</p>
                  <a href="tel:+919632528538" className="text-gray-600 font-bold hover:text-[#00A8CC] transition-colors">
                    +91 9632528538
                  </a>
                </li>
                <li>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-gray-600 font-bold">Greater Noida, India</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-black mb-8 text-[#1a1a2e]">Schedule</h4>
              <ul className="space-y-6">
                <li>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-2">Calendar</p>
                  <a 
                    href="https://calendly.com/easeyourtease/30min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#00A8CC] font-bold hover:underline flex items-center gap-2"
                  >
                    <Calendar size={18} />
                    Schedule a Call
                  </a>
                </li>
                <li>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-2">Network</p>
                  <a 
                    href="https://www.linkedin.com/in/akansh-tyagi-965793114/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#00A8CC] font-bold hover:underline flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-bold mb-2">Available for consultations, workshops, and partnerships. Response time: typically within 24 hours.</p>
              <p className="text-gray-500 text-sm font-black">© 2026 Ease Your Tease. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-10">
              <a href="#" className="text-gray-400 hover:text-[#00A8CC] text-xs font-black transition-colors uppercase tracking-widest">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00A8CC] text-xs font-black transition-colors uppercase tracking-widest">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
