import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
            <span className="text-[#a855f7]">#</span>contact
          </h2>
          <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Message Me Card */}
          <div className="lg:col-span-5 space-y-6 font-mono">
            <p className="text-sm text-gray-400 leading-relaxed">
              I'm open to <span className="text-[#c084fc] font-semibold">Data Analyst</span>, <span className="text-[#c084fc] font-semibold">Business Analyst</span>, and <span className="text-[#c084fc] font-semibold">Product Management</span> full-time roles, internships, or freelance projects. Feel free to contact me!
            </p>

            {/* "Message me here" Reference Style Card */}
            <div className="code-card p-6 rounded-lg space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-[#26283b] pb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#a855f7]" /> Message me here
              </h3>

              <div className="space-y-3 text-xs text-gray-300">
                <a
                  href="mailto:sushantakki11@gmail.com"
                  className="flex items-center gap-3 p-2.5 rounded bg-[#0b0c10] border border-[#26283b] hover:border-[#a855f7] hover:text-[#c084fc] transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#a855f7] shrink-0" />
                  <span className="truncate">sushantakki11@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/sushantpawar11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded bg-[#0b0c10] border border-[#26283b] hover:border-[#a855f7] hover:text-[#c084fc] transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[#a855f7] shrink-0" />
                  <span className="truncate">linkedin.com/in/sushantpawar11</span>
                </a>

                <a
                  href="https://github.com/sushantpawar01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded bg-[#0b0c10] border border-[#26283b] hover:border-[#a855f7] hover:text-[#c084fc] transition-all group"
                >
                  <Github className="w-4 h-4 text-[#a855f7] shrink-0" />
                  <span className="truncate">github.com/sushantpawar01</span>
                </a>

                <a
                  href="tel:+919759620881"
                  className="flex items-center gap-3 p-2.5 rounded bg-[#0b0c10] border border-[#26283b] hover:border-[#a855f7] hover:text-[#c084fc] transition-all group"
                >
                  <Phone className="w-4 h-4 text-[#a855f7] shrink-0" />
                  <span>+91-9759620881</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 font-mono">
            <div className="code-card p-6 sm:p-8 rounded-lg relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#a855f7] mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    Thank you for reaching out, Sushant will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base font-bold text-white mb-4">Send a Direct Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-[#0b0c10] border border-[#26283b] rounded text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#a855f7] transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#0b0c10] border border-[#26283b] rounded text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#a855f7] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration Inquiry"
                      className="w-full px-3.5 py-2.5 bg-[#0b0c10] border border-[#26283b] rounded text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#a855f7] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sushant, I reviewed your portfolio and would like to discuss..."
                      className="w-full px-3.5 py-2.5 bg-[#0b0c10] border border-[#26283b] rounded text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#a855f7] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded border border-[#a855f7] bg-[#a855f7]/10 text-[#c084fc] font-bold text-xs hover:bg-[#a855f7] hover:text-white transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
