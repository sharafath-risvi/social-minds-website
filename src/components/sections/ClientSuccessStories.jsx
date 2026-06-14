import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';

// --- Data ---
const clients = [
  { name: 'Medwalk', growth: '0 → 42K', details: '5 branches', metric: '42K', color: 'from-[#FF9C60] to-[#FF7030]' },
  { name: 'Shashijab', growth: '0 → 26K', details: 'Rapid Organic Scaling', metric: '26K', color: 'from-[#8A2387] to-[#E94057]' },
  { name: 'Bag House Coimbatore', growth: '0 → 36K', details: 'Viral Content Strategy', metric: '36K', color: 'from-[#00C9FF] to-[#92FE9D]' },
  { name: 'SSJ Super Shop', growth: '0 → 25K', details: 'Community Building', metric: '25K', color: 'from-[#f12711] to-[#f5af19]' },
  { name: 'Rahman Plaza', growth: '3K → 56K', details: 'Hyper-local Dominance', metric: '53K', color: 'from-[#11998e] to-[#38ef7d]' },
  { name: 'Brita', growth: '600 → 25K', details: 'Brand Positioning', metric: '24K+', color: 'from-[#b20a2c] to-[#fffbd5]' },
  { name: 'Princess Park', growth: '0 → 25K', details: 'Aesthetic Makeover', metric: '25K', color: 'from-[#654ea3] to-[#eaafc8]' },
  { name: '1Way', growth: '0 → 30K', details: 'Engagement Optimization', metric: '30K', color: 'from-[#FF416C] to-[#FF4B2B]' },
  { name: 'Simco Coimbatore', growth: '0 → 14K', details: 'B2B & Retail Expansion', metric: '14K', color: 'from-[#00b09b] to-[#96c93d]' },
  { name: 'Rainbow Pro Gears', growth: '0 → 9.3K', details: 'Niche Audience Targeting', metric: '9.3K', color: 'from-[#FDC830] to-[#F37335]' },
  { name: 'SS Footwear', growth: '0 → 17K', details: 'Sales-driven Content', metric: '17K', color: 'from-[#1e130c] to-[#9a8478]' },
  { name: 'Kanchi Plaza', growth: '0 → 17K', details: 'Regional Authority', metric: '17K', color: 'from-[#3A1C71] via-[#D76D77] to-[#FFAF7B]' },
];

// --- Animated Counter Component ---
function Counter({ from, to, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

// --- Main Component ---
export default function ClientSuccessStories() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative py-[var(--section-padding)] section-black overflow-hidden"
    >
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="noise-overlay"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-[20%] w-[50%] h-[50%] bg-[#FF9C60] rounded-full blur-[150px] opacity-10 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 -right-[20%] w-[50%] h-[50%] bg-[#FF7030] rounded-full blur-[150px] opacity-10 animate-pulse-glow-intense"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block tag-orange mb-6">Client Success Stories</div>
          <h2 className="display-md text-white mb-6">
            WE DON'T JUST PROMISE, <br />
            <span className="gradient-text-orange">WE DELIVER.</span>
          </h2>
          <p className="text-gray-light text-lg lg:text-xl max-w-2xl mx-auto font-light">
            Real numbers, real impact. See how we've transformed businesses across industries through strategic social media mastery.
          </p>
        </motion.div>

        {/* Hero Card: Afra Modest */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-rich border-glow-orange rounded-3xl p-8 lg:p-12 mb-12 lg:mb-20 perspective-wrapper relative overflow-hidden group"
        >
          {/* Subtle moving gradient background for hero */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF9C60]/10 via-transparent to-[#FF7030]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[#FF9C60]/20 text-[#FF9C60] font-bold px-4 py-2 rounded-full text-sm mb-6 tracking-wide uppercase border border-[#FF9C60]/30 shadow-[0_0_15px_rgba(255,156,96,0.3)]">
                Featured Success
              </div>
              <h3 className="display-sm text-white mb-4">Afra Modest</h3>
              <p className="text-gray-light text-lg mb-8 max-w-md">
                From a small local presence to a dominant regional brand. We architected a content strategy that fueled rapid multi-branch expansion.
              </p>
              
              <div className="flex gap-8 items-end">
                <div>
                  <div className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Follower Growth</div>
                  <div className="display-sm gradient-text-orange leading-none">
                    <Counter from={3} to={92} suffix="K" />
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Started at 3K</div>
                </div>
                <div className="h-16 w-px bg-white/10"></div>
                <div>
                  <div className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Expansion</div>
                  <div className="display-sm text-white leading-none">
                    <Counter from={1} to={4} />
                  </div>
                  <div className="text-sm text-gray-500 mt-2">New Branches</div>
                </div>
              </div>
            </div>

            {/* Right Visual (Placeholder Graphic) */}
            <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden glass border-white/10 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
               <div className="absolute inset-0 bg-gradient-to-br from-[#FF9C60]/20 to-[#FF7030]/5"></div>
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,156,96,0.15),transparent_70%)]"></div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="text-center z-10"
               >
                 <div className="text-8xl font-display text-white opacity-90 text-outline-orange mb-4">AM</div>
                 <div className="text-sm uppercase tracking-[0.3em] text-[#FF9C60]">Social Dominance</div>
               </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid for 12 other clients */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid relative glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Top Image Placeholder */}
              <div className={`h-32 w-full bg-gradient-to-br ${client.color} opacity-80 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <span className="display-sm text-white mix-blend-overlay opacity-60 relative z-10">
                  {client.name.charAt(0)}
                </span>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 text-ui">{client.name}</h4>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Growth</span>
                  <span className="text-[#FF9C60] font-bold text-lg bg-[#FF9C60]/10 px-3 py-1 rounded-full">{client.growth}</span>
                </div>
                
                <div className="w-full h-px bg-white/10 mb-4"></div>
                
                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF9C60]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  {client.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Statistics Counters */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-white/10 relative"
        >
          {/* Subtle top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FF9C60]/50 to-transparent"></div>

          <div className="text-center group">
            <div className="display-md gradient-text-orange mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
              <Counter from={0} to={13} suffix="+" />
            </div>
            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Brands Scaled</div>
          </div>
          
          <div className="text-center group">
            <div className="display-md text-white mb-2 group-hover:scale-110 transition-transform duration-300 inline-block text-outline-orange">
              <Counter from={0} to={350} suffix="K+" />
            </div>
            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Followers Generated</div>
          </div>
          
          <div className="text-center group">
            <div className="display-md gradient-text-orange mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
              <Counter from={0} to={89} suffix="K" />
            </div>
            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Highest Growth</div>
          </div>
          
          <div className="text-center group">
            <div className="display-md text-white mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
              <Counter from={0} to={12} suffix="+" />
            </div>
            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Cities Served</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
