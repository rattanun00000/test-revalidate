"use client"
import { useMotionTemplate, useMotionValue, useTransform, motion } from "framer-motion";

export const GlassmorphismCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.set((event.clientX - centerX) / 15);
      y.set((event.clientY - centerY) / 15);
    };
    
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    
    const rotateX = useTransform(y, [-20, 20], [10, -10]);
    const rotateY = useTransform(x, [-20, 20], [-10, 10]);
    
    const gradientX = useTransform(x, [-20, 20], ["60%", "40%"]);
    const gradientY = useTransform(y, [-20, 20], ["60%", "40%"]);
    
    const gradientBackground = useMotionTemplate`
      radial-gradient(
        circle at ${gradientX} ${gradientY},
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0) 50%
      )
    `;
    
    return (
      <motion.div
        className="relative w-80 h-56 bg-gradient-to-br from-indigo-500/60 to-purple-600/60 rounded-xl p-6 backdrop-blur-sm border border-white/20"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{ background: gradientBackground }}
        />
        <div className="relative" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-white text-xl font-bold mb-2">Glassmorphism Card</h3>
          <p className="text-white/80 text-sm">
            นี่คือการ์ดแบบ Glassmorphism ที่มีเอฟเฟกต์ 3D เมื่อเลื่อนเมาส์
          </p>
        </div>
      </motion.div>
    );
  };