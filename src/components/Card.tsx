import { BadgeCheck,Star } from 'lucide-react'
import type { CardProps } from '../types/cardType';
import { useEffect, useState } from 'react';

const Card = ({card, position, isPopular, onHover, isHovered}: CardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true),150)
        return () => clearTimeout(timer);
    }, []);

    
    
    const getTransform = () => {
      const baseTransform = isVisible ? 'translateY(0)' : 'translateY(50px)';
    
      if (position === 'left') {
        return `${baseTransform} translateX(-120px) translateZ(-200px) rotateY(35deg) scale(0.8)`;
      } else if (position === 'right') {
        return `${baseTransform} translateX(120px) translateZ(-200px) rotateY(-35deg) scale(0.8)`;
      } else {
        return `${baseTransform} translateZ(${isHovered ? '50px' : '0px'}) scale(${isHovered ? '1.05' : '1'})`;
      }
    };

    const getOpacity = () => {
    if (!isVisible) return 0;
    return position === 'center' ? 1 : 0.7;
    };


    return (
    <div 
      className="absolute w-80 h-96 transition-all duration-700 ease-out cursor-pointer"
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden">
        {/* Popular Badge */}
        {card.isPopular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold flex items-center gap-1">
            <Star className="w-4 h-4" />
            Popular
          </div>
        )}
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-lg"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-white">${card.price}</span>
              <span className="text-gray-300 ml-2">/month</span>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-3">
            {card.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="relative z-10 mt-6">
          <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            card.isPopular 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25' 
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
          }`}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
  
}  

export default Card;