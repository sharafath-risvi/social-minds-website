import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Video, PenTool, BarChart2, TrendingUp, Users, MessageCircle, Phone, MonitorPlay, Zap, Globe, Target, Smartphone, ChevronUp
} from 'lucide-react';

export default function ImmersiveJourney() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scene 1: Content Creation (0 - 0.166)
  const s1Op = useTransform(scrollYProgress, [0, 0.04, 0.13, 0.166], [0, 1, 1, 0]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.166], [0.9, 1.1]);
  const s1Float1 = useTransform(scrollYProgress, [0, 0.166], [40, -40]);
  const s1Float2 = useTransform(scrollYProgress, [0, 0.166], [-30, 30]);

  // Scene 2: Social Media Growth (0.166 - 0.333)
  const s2Op = useTransform(scrollYProgress, [0.166, 0.20, 0.29, 0.333], [0, 1, 1, 0]);
  const s2Scale = useTransform(scrollYProgress, [0.166, 0.333], [0.9, 1.1]);
  const s2Bar1 = useTransform(scrollYProgress, [0.18, 0.28], ["20%", "85%"]);
  const s2Bar2 = useTransform(scrollYProgress, [0.18, 0.28], ["40%", "100%"]);
  const s2Bar3 = useTransform(scrollYProgress, [0.18, 0.28], ["30%", "65%"]);

  // Scene 3: Lead Generation (0.333 - 0.5)
  const s3Op = useTransform(scrollYProgress, [0.333, 0.38, 0.46, 0.5], [0, 1, 1, 0]);
  const s3Scale = useTransform(scrollYProgress, [0.333, 0.5], [0.9, 1.1]);
  const s3Y1 = useTransform(scrollYProgress, [0.35, 0.45], [50, -20]);
  const s3Y2 = useTransform(scrollYProgress, [0.36, 0.46], [60, -10]);

  // Scene 4: Performance Marketing (0.5 - 0.666)
  const s4Op = useTransform(scrollYProgress, [0.5, 0.55, 0.62, 0.666], [0, 1, 1, 0]);
  const s4Scale = useTransform(scrollYProgress, [0.5, 0.666], [0.95, 1.05]);
  const s4Rot = useTransform(scrollYProgress, [0.5, 0.666], [-10, 10]);

  // Scene 5: Brand Expansion (0.666 - 0.833)
  const s5Op = useTransform(scrollYProgress, [0.666, 0.71, 0.79, 0.833], [0, 1, 1, 0]);
  const s5Scale = useTransform(scrollYProgress, [0.666, 0.833], [0.8, 1.5]);

  // Scene 6: Final Reveal (0.833 - 1.0)
  const s6Op = useTransform(scrollYProgress, [0.833, 0.88, 1], [0, 1, 1]);
  const s6Scale = useTransform(scrollYProgress, [0.833, 1], [0.9, 1]);
  const s6Glow = useTransform(scrollYProgress, [0.85, 1], [0.2, 0.8]);

  return (
    <section ref={containerRef} style={{ height: '600vh', position: 'relative', background: '#050505', zIndex: 20 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Core Global Ambient Glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
           <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255, 156, 96, 0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>

        {/* ─── SCENE 1: CONTENT CREATION ─── */}
        <motion.div style={{ position: 'absolute', inset: 0, opacity: s1Op, scale: s1Scale, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
           <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#FFF', letterSpacing: '0.02em', margin: 0, textShadow: '0 10px 40px rgba(0,0,0,0.5)', zIndex: 2 }}>
             CONTENT CREATION
           </h2>
           <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 2vw, 18px)', color: '#FF9C60', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600, zIndex: 2 }}>
             Engineering Attention
           </p>

           {/* Floating Cards */}
           <motion.div style={{ y: s1Float1, position: 'absolute', top: '25%', left: '15%', background: 'rgba(25, 25, 25, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 1 }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div>
                <div style={{ color: '#FFF', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '16px' }}>Instagram Reels</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>Viral Strategies</div>
              </div>
           </motion.div>

           <motion.div style={{ y: s1Float2, position: 'absolute', bottom: '20%', right: '15%', background: 'rgba(25, 25, 25, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 1 }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #111, #333)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Video color="#FF9C60" size={24} />
              </div>
              <div>
                <div style={{ color: '#FFF', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '16px' }}>Video Production</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>Cinematic Quality</div>
              </div>
           </motion.div>
        </motion.div>

        {/* ─── SCENE 2: SOCIAL MEDIA GROWTH ─── */}
        <motion.div style={{ position: 'absolute', inset: 0, opacity: s2Op, scale: s2Scale, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
           <h2 className="journey-title-long" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#FFF', letterSpacing: '0.02em', margin: '0 0 40px 0', textShadow: '0 10px 40px rgba(0,0,0,0.5)', zIndex: 2 }}>
             SOCIAL MEDIA GROWTH
           </h2>

           <div style={{ width: '80%', maxWidth: '800px', height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4%', position: 'relative' }}>
             {/* Abstract Grid Background */}
             <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))' }} />
             
             {/* Chart Bars */}
             <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end', zIndex: 1, position: 'relative' }}>
               <motion.div style={{ width: '100%', height: s2Bar3, background: 'rgba(255,255,255,0.1)', borderRadius: '12px 12px 0 0', border: '1px solid rgba(255,255,255,0.2)', borderBottom: 'none' }} />
             </div>
             <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end', zIndex: 1, position: 'relative' }}>
               <motion.div style={{ width: '100%', height: s2Bar1, background: 'linear-gradient(to top, rgba(255,156,96,0.2), rgba(255,156,96,0.6))', borderRadius: '12px 12px 0 0', border: '1px solid rgba(255,156,96,0.8)', borderBottom: 'none', boxShadow: '0 0 30px rgba(255,156,96,0.3)' }} />
             </div>
             <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end', zIndex: 1, position: 'relative' }}>
               <motion.div style={{ width: '100%', height: s2Bar2, background: 'linear-gradient(to top, rgba(255,112,48,0.4), #FF7030)', borderRadius: '12px 12px 0 0', border: '1px solid #FF9C60', borderBottom: 'none', boxShadow: '0 0 50px rgba(255,112,48,0.5)' }} />
             </div>

             {/* Line chart overlay SVG */}
             <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, overflow: 'visible' }} preserveAspectRatio="none" viewBox="0 0 100 100">
               <motion.path 
                 d="M 0 80 Q 25 70, 50 40 T 100 0" 
                 fill="none" 
                 stroke="#FFF" 
                 strokeWidth="2" 
                 strokeLinecap="round"
                 initial={{ pathLength: 0 }}
                 style={{ pathLength: useTransform(scrollYProgress, [0.18, 0.3], [0, 1]) }}
               />
               <motion.circle cx="100" cy="0" r="3" fill="#FFF" style={{ opacity: useTransform(scrollYProgress, [0.28, 0.3], [0, 1]) }} />
             </svg>
           </div>
        </motion.div>

        {/* ─── SCENE 3: LEAD GENERATION ─── */}
        <motion.div style={{ position: 'absolute', inset: 0, opacity: s3Op, scale: s3Scale, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
           <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#FFF', letterSpacing: '0.02em', margin: '0 0 60px 0', textShadow: '0 10px 40px rgba(0,0,0,0.5)', zIndex: 2 }}>
             LEAD GENERATION
           </h2>

           <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             
             <motion.div style={{ y: s3Y1, position: 'absolute', left: '10%', top: '10%', background: '#25D366', borderRadius: '24px 24px 24px 4px', padding: '20px 24px', boxShadow: '0 20px 40px rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Phone color="#FFF" size={24} fill="#FFF" />
                <div style={{ color: '#FFF', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '18px' }}>New Customer Enquiry</div>
             </motion.div>

             <motion.div style={{ y: s3Y2, position: 'absolute', right: '5%', top: '40%', background: 'rgba(255,255,255,0.95)', borderRadius: '24px 24px 4px 24px', padding: '20px 24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Target color="#FF7030" size={28} />
                <div style={{ color: '#0A0A0A', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '20px' }}>Qualified Lead Captured</div>
             </motion.div>

             <motion.div style={{ y: s1Float1, position: 'absolute', left: '20%', bottom: '15%', background: '#1877F2', borderRadius: '24px 24px 24px 4px', padding: '16px 24px', boxShadow: '0 20px 40px rgba(24,119,242,0.3)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MessageCircle color="#FFF" size={20} fill="#FFF" />
                <div style={{ color: '#FFF', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '16px' }}>Message from Campaign</div>
             </motion.div>
           </div>
        </motion.div>

        {/* ─── SCENE 4: PERFORMANCE MARKETING ─── */}
        <motion.div style={{ position: 'absolute', inset: 0, opacity: s4Op, scale: s4Scale, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
           <h2 className="journey-title-long" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 7vw, 7.5rem)', color: '#FFF', letterSpacing: '0.02em', margin: '0 0 50px 0', textShadow: '0 10px 40px rgba(0,0,0,0.5)', zIndex: 2 }}>
             PERFORMANCE MARKETING
           </h2>

           <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px' }}>
             {/* Metric Card 1 */}
             <motion.div style={{ background: 'rgba(25,25,25,0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '32px', width: '280px', display: 'flex', flexDirection: 'column', gap: '12px', rotate: s4Rot }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,156,96,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Zap color="#FF9C60" size={20} />
                 </div>
                 <span style={{ color: '#4ADE80', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><ChevronUp size={16}/> 142%</span>
               </div>
               <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>Average ROAS</div>
               <div style={{ color: '#FFF', fontSize: '36px', fontWeight: 700, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>4.8X</div>
             </motion.div>

             {/* Metric Card 2 */}
             <motion.div style={{ background: 'linear-gradient(135deg, rgba(255,156,96,0.1), transparent)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,156,96,0.2)', borderRadius: '24px', padding: '32px', width: '280px', display: 'flex', flexDirection: 'column', gap: '12px', rotate: useTransform(scrollYProgress, [0.5, 0.666], [5, -5]) }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Users color="#FFF" size={20} />
                 </div>
                 <span style={{ color: '#4ADE80', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><ChevronUp size={16}/> 89%</span>
               </div>
               <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>Cost Per Lead</div>
               <div style={{ color: '#FFF', fontSize: '36px', fontWeight: 700, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>$-12%</div>
             </motion.div>
           </div>
        </motion.div>

        {/* ─── SCENE 5: BRAND EXPANSION ─── */}
        <motion.div style={{ position: 'absolute', inset: 0, opacity: s5Op, scale: s5Scale, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
           <h2 style={{ position: 'absolute', top: '15%', fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#FFF', letterSpacing: '0.02em', textShadow: '0 10px 40px rgba(0,0,0,0.5)', zIndex: 10 }}>
             BRAND EXPANSION
           </h2>
           
           <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe color="#FF9C60" size={100} strokeWidth={1} style={{ zIndex: 5, opacity: 0.8 }} />
              
              {/* Expanding Rings */}
              <motion.div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid rgba(255,156,96,0.6)', scale: useTransform(scrollYProgress, [0.68, 0.8], [1, 6]), opacity: useTransform(scrollYProgress, [0.68, 0.75, 0.8], [1, 0.5, 0]) }} />
              <motion.div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', border: '2px solid rgba(255,156,96,0.3)', scale: useTransform(scrollYProgress, [0.7, 0.83], [1, 8]), opacity: useTransform(scrollYProgress, [0.7, 0.78, 0.83], [1, 0.5, 0]) }} />
              <motion.div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.2)', scale: useTransform(scrollYProgress, [0.72, 0.83], [1, 10]), opacity: useTransform(scrollYProgress, [0.72, 0.8, 0.83], [1, 0.3, 0]) }} />
           </div>
        </motion.div>

        {/* ─── SCENE 6: FINAL REVEAL ─── */}
        <motion.div style={{ position: 'absolute', inset: 0, opacity: s6Op, scale: s6Scale, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
           
           <motion.div style={{ opacity: s6Glow, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(255,112,48,0.15) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }} />
           
           <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.5vw, 16px)', color: '#FF9C60', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600, marginBottom: '40px', zIndex: 2 }}>
             Your Trusted Growth Partner
           </p>

           <img src="/socialminds.png" alt="Social Minds Logo" style={{ width: 'clamp(200px, 25vw, 350px)', height: 'auto', objectFit: 'contain', marginBottom: '40px', zIndex: 2, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} />

           <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 5vw, 6rem)', color: '#FFF', letterSpacing: '0.02em', margin: 0, textAlign: 'center', lineHeight: 0.9, zIndex: 2 }}>
             WE MIND YOUR<br />
             <span style={{ background: 'linear-gradient(135deg, #FF9C60, #FF7030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>BUSINESS DIGITALLY</span>
           </h2>

        </motion.div>

      </div>
    </section>
  );
}
