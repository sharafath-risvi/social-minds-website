import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    portfolio: '',
    resume: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null
  const [imgError, setImgError] = useState(false);

  const validateForm = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    
    if (!formData.name) {
      errors.name = 'Full Name is required';
    } else if (!nameRegex.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces';
    }

    if (!formData.email) {
      errors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      errors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.position) {
      errors.position = 'Please select a position';
    }

    if (!formData.resume) {
      errors.resume = 'Resume link is required';
    } else if (!formData.resume.match(/\.(pdf|doc|docx)$/i) && !formData.resume.includes('drive.google.com') && !formData.resume.includes('dropbox.com')) {
      // Basic check: must be a link or file extension. The user requested PDF/DOC/DOCX check.
      // Since it's a URL input, we check for file extension in URL or common drive links.
      errors.resume = 'Link must point to a PDF, DOC, DOCX file, or a valid drive link';
    }

    if (formData.message && formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 5000);
      setFormData({
        name: '', email: '', phone: '', position: '', portfolio: '', resume: '', message: ''
      });
      setFormErrors({});
    }
  };

  const getInputStyle = (fieldName) => ({
    width: '100%', padding: '18px 24px', borderRadius: '16px', 
    border: `1px solid ${formErrors[fieldName] ? '#EF4444' : '#EAEAEA'}`, 
    fontSize: '16px', fontFamily: "'Inter', sans-serif", outline: 'none', transition: 'all 0.3s ease', 
    background: '#FFF', color: '#111', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  });

  return (
    <main style={{ backgroundColor: '#FFF', minHeight: '100vh', color: '#000', overflow: 'hidden' }}>
      
      {/* ================= HERO SECTION ================= */}
      <section style={{ paddingTop: '160px', paddingBottom: '100px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
          
          {/* Left Content */}
          <motion.div style={{ flex: '1 1 500px' }} initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255, 156, 96, 0.15)', color: '#FF7030',
              padding: '8px 20px', borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.1em', marginBottom: '24px'
            }}>
              Join Social Minds
            </motion.div>
            
            <motion.h1 variants={fadeInUp} style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px, 8vw, 96px)',
              lineHeight: 1, letterSpacing: '0.02em', marginBottom: '24px', color: '#000'
            }}>
              Build Brands.<br/>
              <span style={{ color: '#FF7030' }}>Create Impact.</span><br/>
              Grow With Us.
            </motion.h1>
            
            <motion.p variants={fadeInUp} style={{
              fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#555',
              lineHeight: 1.6, maxWidth: '600px', marginBottom: '40px'
            }}>
              We're looking for passionate creators, marketers, strategists, editors, and innovators who want to shape the future of digital marketing and content creation.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="career-hero-btns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <motion.a 
                href="#apply" 
                className="career-hero-btn"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{
                  background: '#111', color: '#FFF',
                  padding: '16px 32px', borderRadius: '100px', fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, textDecoration: 'none', display: 'inline-block'
                }}
              >
                Apply Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Image Grid */}
          <motion.div style={{ flex: '1 1 500px', position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '5fr 4fr', gridTemplateRows: '1fr 1fr', gap: '24px', padding: '10px' }}>
              
              {/* Large Left Image */}
              <motion.div 
                style={{ gridColumn: '1 / 2', gridRow: '1 / 3', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', position: 'relative' }}
                whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
              >
                <img src="/Teampics/workingpic5.webp" alt="Team Collaboration" fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>

              {/* Top Right Image */}
              <motion.div 
                style={{ gridColumn: '2 / 3', gridRow: '1 / 2', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', position: 'relative' }}
                whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}
              >
                <img src="/Teampics/workingpic1.webp" alt="Creative Workspace" fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div 
                style={{ gridColumn: '2 / 3', gridRow: '2 / 3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', position: 'relative' }}
                whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}
              >
                <img src="/Teampics/workingpic2.webp" alt="Marketing Professionals" fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>

              {/* Overlapping 4th image */}
              <motion.div 
                style={{ position: 'absolute', bottom: '-15px', left: '-15px', width: '200px', height: '200px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '8px solid #FFF', zIndex: 10 }}
                whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}
              >
                <img src="/Teampics/workingpic4.webp" alt="Agency Work" fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section style={{ backgroundColor: '#F9F9F9', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(64px, 8vw, 100px)', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '24px' }}>
              <span style={{ color: '#000' }}>Why Join </span>
              <span style={{ color: '#FF7030' }}>Social Minds?</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
              Discover an environment where your creativity thrives, your growth is prioritized, and your impact is rewarded.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '70px 40px', marginTop: '60px' }}>
            {[
              { 
                highlight: 'Growth', title: 'Opportunities', desc: 'Learn from industry experts and grow your career faster with structured development plans.',
                icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF7030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              },
              { 
                highlight: 'Creative', title: 'Freedom', desc: 'Bring your ideas to life and work on exciting projects without unnecessary corporate red tape.',
                icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF7030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              },
              { 
                highlight: 'Friendly', title: 'Culture', desc: 'Join a collaborative, supportive, and inclusive work environment where every voice matters.',
                icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF7030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              },
              { 
                highlight: 'Real Client', title: 'Exposure', desc: 'Work directly with premium brands and manage high-visibility campaigns from day one.',
                icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF7030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              },
              { 
                highlight: 'Learning &', title: 'Development', desc: 'Continuous training, skill enhancement programs, and sponsored certifications for all staff.',
                icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF7030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              },
              { 
                highlight: 'Performance', title: 'Rewards', desc: 'Exceptional work deserves exceptional recognition. Enjoy performance bonuses and perks.',
                icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF7030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v8a5 5 0 0 1-10 0V4"></path><path d="M4 4h3v8H4z"></path><path d="M20 4h-3v8h3z"></path></svg>
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{
                  background: '#FFF', padding: '50px 40px 64px 40px', borderRadius: '32px',
                  border: '1px solid #EAEAEA', transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  position: 'relative', overflow: 'visible', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                  minHeight: '280px', justifyContent: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.08)';
                  const iconCircle = e.currentTarget.querySelector('.feature-icon-circle');
                  if (iconCircle) {
                    iconCircle.style.transform = 'scale(1.1)';
                    iconCircle.style.boxShadow = '0 15px 40px rgba(255, 112, 48, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.04)';
                  const iconCircle = e.currentTarget.querySelector('.feature-icon-circle');
                  if (iconCircle) {
                    iconCircle.style.transform = 'scale(1)';
                    iconCircle.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  }
                }}
              >
                <div 
                  className="feature-icon-circle"
                  style={{
                    width: '90px', height: '90px', background: 'linear-gradient(135deg, #111, #222)', color: '#FFF',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '-80px auto 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: '6px solid #FFF',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '20px' }}>
                  <span style={{ color: '#FF7030', display: 'block' }}>{feature.highlight}</span>
                  <span style={{ color: '#000', display: 'block' }}>{feature.title}</span>
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#666', lineHeight: 1.7, margin: 0 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= HIRING PROCESS TIMELINE ================= */}
      <section style={{ padding: '140px 24px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '120px' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(64px, 8vw, 100px)', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '24px' }}>
              <span style={{ color: '#000' }}>Our Hiring </span>
              <span style={{ color: '#FF7030' }}>Process</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
              We keep it transparent and fast. Here’s what you can expect when applying.
            </p>
          </div>
          
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
            {/* Desktop connecting line */}
            <div style={{
              position: 'absolute', top: '50px', left: '10%', right: '10%',
              height: '4px', background: '#F0F0F0', zIndex: 0,
              display: window.innerWidth > 1024 ? 'block' : 'none',
              borderRadius: '4px'
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #FF9C60, #FF7030)', borderRadius: '4px' }}
              />
            </div>
            
            {[
              { step: '01', title: 'Application Review', desc: 'We carefully review your resume and portfolio.' },
              { step: '02', title: 'Initial Discussion', desc: 'A quick chat to understand your goals.' },
              { step: '03', title: 'Skill Assessment', desc: 'A small task to showcase your skills.' },
              { step: '04', title: 'Final Interview', desc: 'Meet the core team and founders.' },
              { step: '05', title: 'Welcome Aboard', desc: 'Get your offer and start creating!' }
            ].map((process, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{ flex: '1 1 200px', maxWidth: '280px', position: 'relative', zIndex: 1, textAlign: 'center', background: '#FFF', padding: '40px 24px', borderRadius: '32px', border: '1px solid #EAEAEA', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                    width: '100px', height: '100px', background: 'linear-gradient(135deg, #111, #222)', color: '#FFF',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', margin: '-90px auto 32px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '6px solid #FFF',
                  }}>
                  <span style={{ color: '#FF7030' }}>{process.step}</span>
                </div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#111' }}>
                  {process.title}
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#666', lineHeight: 1.6 }}>
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section id="apply" style={{ padding: '140px 24px', backgroundColor: '#F9F9F9', position: 'relative' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#FFF', borderRadius: '40px', padding: '80px 48px', boxShadow: '0 40px 80px rgba(0,0,0,0.04)', border: '1px solid #EAEAEA', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px, 8vw, 80px)', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '16px' }}>
              <span style={{ color: '#000' }}>Submit Your </span>
              <span style={{ color: '#FF7030' }}>Application</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#555' }}>
              Fill out the form below and our HR team will get back to you.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div style={{ padding: '24px', background: '#10B981', color: '#FFF', borderRadius: '16px', textAlign: 'center', marginBottom: '32px', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              🎉 Application submitted successfully! We will be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} noValidate>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>Full Name*</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} style={getInputStyle('name')} onFocus={(e) => { e.target.style.borderColor = '#FF7030'; e.target.style.boxShadow = '0 0 0 4px rgba(255,112,48,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = formErrors.name ? '#EF4444' : '#EAEAEA'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }} />
                {formErrors.name && <span style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px', display: 'block', fontFamily: "'Inter', sans-serif" }}>{formErrors.name}</span>}
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>Email Address*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={getInputStyle('email')} onFocus={(e) => { e.target.style.borderColor = '#FF7030'; e.target.style.boxShadow = '0 0 0 4px rgba(255,112,48,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = formErrors.email ? '#EF4444' : '#EAEAEA'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }} />
                {formErrors.email && <span style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px', display: 'block', fontFamily: "'Inter', sans-serif" }}>{formErrors.email}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>Phone Number*</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={getInputStyle('phone')} onFocus={(e) => { e.target.style.borderColor = '#FF7030'; e.target.style.boxShadow = '0 0 0 4px rgba(255,112,48,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = formErrors.phone ? '#EF4444' : '#EAEAEA'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }} />
                {formErrors.phone && <span style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px', display: 'block', fontFamily: "'Inter', sans-serif" }}>{formErrors.phone}</span>}
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>Position Applying For*</label>
                <div style={{ position: 'relative' }}>
                  <select name="position" value={formData.position} onChange={handleChange} style={{ ...getInputStyle('position'), appearance: 'none', cursor: 'pointer' }} onFocus={(e) => { e.target.style.borderColor = '#FF7030'; e.target.style.boxShadow = '0 0 0 4px rgba(255,112,48,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = formErrors.position ? '#EF4444' : '#EAEAEA'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }}>
                    <option value="" disabled>Select a position</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Content Creator">Content Creator</option>
                    <option value="Video Editor">Video Editor</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Performance Marketer">Performance Marketer</option>
                    <option value="SEO Specialist">SEO Specialist</option>
                    <option value="Other">Other</option>
                  </select>
                  <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '12px', color: '#888' }}>▼</div>
                </div>
                {formErrors.position && <span style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px', display: 'block', fontFamily: "'Inter', sans-serif" }}>{formErrors.position}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>Portfolio Link (Optional)</label>
                <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} style={getInputStyle('portfolio')} onFocus={(e) => { e.target.style.borderColor = '#FF7030'; e.target.style.boxShadow = '0 0 0 4px rgba(255,112,48,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = '#EAEAEA'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>Upload Resume (Link)*</label>
                <input type="url" placeholder="Google Drive/Dropbox Link (.pdf, .doc)" name="resume" value={formData.resume} onChange={handleChange} style={getInputStyle('resume')} onFocus={(e) => { e.target.style.borderColor = '#FF7030'; e.target.style.boxShadow = '0 0 0 4px rgba(255,112,48,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = formErrors.resume ? '#EF4444' : '#EAEAEA'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }} />
                {formErrors.resume && <span style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px', display: 'block', fontFamily: "'Inter', sans-serif" }}>{formErrors.resume}</span>}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>Message / Cover Letter</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" style={{ ...getInputStyle('message'), resize: 'vertical' }} onFocus={(e) => { e.target.style.borderColor = '#FF7030'; e.target.style.boxShadow = '0 0 0 4px rgba(255,112,48,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = formErrors.message ? '#EF4444' : '#EAEAEA'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }}></textarea>
              {formErrors.message && <span style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px', display: 'block', fontFamily: "'Inter', sans-serif" }}>{formErrors.message}</span>}
            </div>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(255, 112, 48, 0.4)' }} 
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, #FF9C60, #FF7030)', color: '#000',
                padding: '24px', borderRadius: '20px', fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '18px', fontWeight: 700, border: 'none', cursor: 'pointer',
                marginTop: '24px', transition: 'all 0.3s ease'
              }}
            >
              Submit Application
            </motion.button>
          </form>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section style={{ padding: '0 24px 100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '1200px', margin: '0 auto', background: 'linear-gradient(135deg, #111 0%, #000 100%)',
            padding: '100px 40px', borderRadius: '40px', textAlign: 'center', color: '#FFF',
            position: 'relative', overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute', top: '-150px', right: '-150px', width: '500px', height: '500px',
            background: '#FF7030', filter: 'blur(200px)', opacity: 0.3, pointerEvents: 'none'
          }} />
          
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px, 8vw, 88px)', lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            Ready To Build Something <span style={{ color: '#FF7030' }}>Extraordinary?</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: '#AAA', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
            Join Social Minds and become part of a team that creates meaningful digital experiences and drives measurable growth for brands.
          </p>
          <motion.a 
            href="#open-positions"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #FF9C60, #FF7030)', color: '#000',
              padding: '20px 48px', borderRadius: '100px', fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '18px', fontWeight: 700, textDecoration: 'none', display: 'inline-block',
              position: 'relative', zIndex: 1
            }}
          >
            Apply Today
          </motion.a>
        </motion.div>
      </section>

    </main>
  );
}
