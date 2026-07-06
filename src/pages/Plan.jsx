import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../data/pricing';

export default function Plan() {
  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', color: '#000' }}>
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* TOP CONTENT */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 156, 96, 0.15)',
              color: '#FF7030',
              padding: '6px 16px',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
          >
            OUR PRICING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 80px)',
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: '#000' }}>Choose The Perfect </span>
            <span style={{ color: '#FF7030' }}>Growth Plan </span>
            <span
              style={{
                WebkitTextStroke: '1.5px #000',
                color: 'transparent',
              }}
            >
              For Your Business
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              color: '#555',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Whether you're building your brand, increasing engagement, generating leads, or scaling your business, our pricing plans are designed to deliver measurable growth through content, strategy, and performance-driven marketing.
          </motion.p>
        </div>

        {/* PRICING CARDS - Reorganized Layout */}
        <div style={{ marginBottom: '100px' }}>
          
          {/* FIRST ROW (3 Cards) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              marginBottom: '64px',
            }}
          >
            {pricingPlans.filter(plan => plan.id !== 'essential').map((plan, index) => {
              const isPremiumBlack = plan.id === 'professional';

              let buttonText = plan.buttonText;
              if (plan.id === 'advanced') buttonText = 'Get Started';
              if (plan.id === 'professional') buttonText = 'Book Consultation';
              if (plan.id === 'elite') buttonText = 'Scale My Brand';

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: isPremiumBlack ? 1.02 : 1,
                    boxShadow: isPremiumBlack 
                        ? '0 30px 60px rgba(0,0,0,0.6), 0 0 60px rgba(230,126,34,0.2), 0 0 0 2px #FF7030' 
                        : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 2px #FF7030',
                  }}
                  style={{
                    background: isPremiumBlack ? 'linear-gradient(135deg, #0A0A0A 0%, #151515 55%, rgba(230,126,34,0.18) 100%)' : '#FFFFFF',
                    color: isPremiumBlack ? '#FFF' : '#000',
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: isPremiumBlack ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(230,126,34,0.1)' : '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: isPremiumBlack ? '1px solid rgba(255, 156, 96, 0.3)' : '1px solid #EAEAEA',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: 'scale(1)',
                    transition: 'all 0.4s ease',
                    overflow: 'hidden',
                    height: '100%',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                >

                  <h3 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '32px',
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                    marginTop: '0',
                    color: isPremiumBlack ? '#FFF' : '#000',
                  }}>
                    {plan.name}
                  </h3>
                  
                  <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '48px',
                      fontWeight: 700,
                      color: isPremiumBlack ? '#FFF' : '#000',
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '16px',
                      color: isPremiumBlack ? '#AAA' : '#666',
                      fontWeight: 500
                    }}>
                      {plan.period}
                    </span>
                  </div>

                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    color: isPremiumBlack ? '#FFF' : '#333',
                    fontWeight: 600,
                    marginBottom: '20px',
                    background: isPremiumBlack ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    display: 'inline-block',
                    alignSelf: 'flex-start'
                  }}>
                    {plan.subtitle}
                  </div>

                  <hr style={{ borderColor: isPremiumBlack ? 'rgba(255,255,255,0.1)' : '#EAEAEA', marginBottom: '20px' }} />

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '12px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '15px',
                        color: isPremiumBlack 
                          ? (feature.included ? '#FFF' : '#555') 
                          : (feature.included ? '#333' : '#999'),
                      }}>
                        <span style={{ 
                          marginTop: '2px', 
                          fontSize: '14px',
                          color: feature.included ? '#10B981' : '#F87171' 
                        }}>
                          {feature.included ? '✓' : '✕'}
                        </span>
                        <span style={{ textDecoration: feature.included ? 'none' : 'line-through' }}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      marginTop: '24px',
                      padding: '14px 24px',
                      borderRadius: '100px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      color: isPremiumBlack ? '#000' : '#000',
                      background: isPremiumBlack 
                        ? 'linear-gradient(135deg, #FF9C60, #FF7030)' 
                        : '#F5F5F5',
                      border: isPremiumBlack ? 'none' : '1px solid #DDD',
                      boxShadow: isPremiumBlack ? '0 8px 20px rgba(255, 156, 96, 0.3)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isPremiumBlack) {
                        e.currentTarget.style.background = '#000';
                        e.currentTarget.style.color = '#FFF';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isPremiumBlack) {
                        e.currentTarget.style.background = '#F5F5F5';
                        e.currentTarget.style.color = '#000';
                      }
                    }}
                  >
                    {buttonText}
                  </motion.a>
                </motion.div>
              );
            })}
          </div>


        </div>

        {/* BOTTOM CONTENT: TRUST SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #111 0%, #000 100%)',
              padding: '60px 40px',
              borderRadius: '32px',
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-100px',
              left: '-100px',
              width: '300px',
              height: '300px',
              background: '#FF7030',
              filter: 'blur(150px)',
              opacity: 0.3
            }} />
            
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '56px',
              letterSpacing: '0.02em',
              marginBottom: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              Ready To Grow Your Brand?
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              color: '#AAA',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6,
              position: 'relative',
              zIndex: 1
            }}>
              Let's create a digital strategy that attracts attention, generates leads, and drives measurable business growth.
            </p>

            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1
            }}>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #FF9C60, #FF7030)',
                  color: '#000',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(255, 156, 96, 0.3)'
                }}
              >
                <span>📞</span> Book Free Consultation
              </motion.a>
              
              <motion.a
                href="https://wa.me/917000000000?text=Hi! I'd like to discuss the pricing packages."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: '#FFF',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)'
                }}
              >
                <span>💬</span> Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
