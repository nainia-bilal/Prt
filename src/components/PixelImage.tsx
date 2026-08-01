import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface PixelImageProps {
  src: string;
  customGrid?: { rows: number; cols: number };
  grayscaleAnimation?: boolean;
  className?: string;
  alt?: string;
}

export const PixelImage: React.FC<PixelImageProps> = ({
  src,
  customGrid = { rows: 4, cols: 6 },
  grayscaleAnimation = false,
  className,
  alt = "Pixel Image"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const totalCells = customGrid.rows * customGrid.cols;
  const cells = Array.from({ length: totalCells });

  return (
    <div 
      className={cn("relative w-full h-full overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={src} 
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out",
          grayscaleAnimation && !isHovered ? 'grayscale opacity-80' : 'grayscale-0 opacity-100',
          isHovered ? 'scale-100' : 'scale-110'
        )}
      />
      
      {/* Pixel Grid Overlay */}
      <div 
        className="absolute inset-0 z-10 grid pointer-events-none"
        style={{
          gridTemplateRows: `repeat(${customGrid.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${customGrid.cols}, 1fr)`
        }}
      >
        {cells.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{
              duration: 0.5,
              delay: isHovered 
                ? Math.random() * 0.3 
                : Math.random() * 0.2 + 0.1, // slightly slower out
              ease: "circOut"
            }}
            className="w-full h-full bg-black/90 backdrop-blur-md"
            style={{
              boxShadow: 'inset 0 0 1px rgba(255,255,255,0.05)'
            }}
          />
        ))}
      </div>
    </div>
  );
};
