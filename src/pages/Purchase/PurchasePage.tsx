import Card from "../../components/Card";
import { useState, useEffect } from "react";
import type { CardData } from "../../types/cardType";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './Purchase.css';

const cardData: CardData[] = [ 
  { id: 0, 
    title: "Basic", 
    price: 19, 
    features: 
    [ 'Limited project up to 9', 
      'Limited AI support', 
      'Boost creativity and productivity with 25+ AI tools', 
      'Advanced analytics' ] 
  }, 
  { id: 1, 
    title: "Standard", 
    price: 29, 
    isPopular: true, 
    features: 
    [ 'Limited project up to 49', 
      'Boost creativity and productivity with 75+ AI tools', 
      'Marketing automations', 
      'Custom domain' ] 
    },
  { id: 2, 
    title: "Premium", 
    price: 39, 
    features: 
    [ 'Unlimited products', 
      'Unlimited AI support', 
      'Custom integration', 
      'Priority phone support' 
    ] 
  } 
]


const PurchasePage = () => {
  const [curIdx, setCurIdx] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  
  
  
  const  nextCard = () => {
    setCurIdx((i) => (i+1) % cardData.length )
  }
  const  prevCard = () => {
    setCurIdx((i) => (i-1 + cardData.length) % cardData.length )
  }

  const getCardPosition = (index:number): 'left' | 'center' | 'right' =>{
      const diff = (index - curIdx + cardData.length) %cardData.length

      if( diff=== 0) return 'center';
      if( diff === 1 || diff === -2) return 'right';
      return 'left';

  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextCard();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]); 
  
  return (
    // background color
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-transparent mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of AI-powered creativity with our 3D interactive pricing
          </p>
        </div>
        {/* Carousel Container */}
        <div className=" releative h-[300px]">
          {/* Navigation and Cards Container */}
          <div className="flex items-center justify-between h-full">
            <button 
              onClick={prevCard}
              className="chvronButton">
                <ChevronLeft/>
            </button>
          
            <div 
              className="flex-1 h-full flex items-center justify-center"
              style={{ 
                perspective: '1000px', 
                transformStyle: 'preserve-3d' 
              }}>
              {cardData.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  position={getCardPosition(card.id)}
                  isPopular={getCardPosition(card.id) === 'center'}
                  onHover={setIsHovered}
                  isHovered={isHovered && getCardPosition(card.id) === 'center'}
                />
              ))}
            </div>

            {/* Right Navigation Button */}
            <button 
              onClick={nextCard}
              className="chvronButton"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 gap-2">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurIdx(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === curIdx 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
    
    
    
    </div>
  );
};

export default PurchasePage;