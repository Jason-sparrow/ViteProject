import Card from "../../components/Card";
import { useState, useEffect } from "react";
import type { CardData } from "../../types/cardType";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [curIdx, setCurIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  
  
  const  nextCard = () => {
    setCurIdx((i+1) % cardData.length )
  }
  const  prevCard = () => {
    setCurIdx((i-1 + cardData.length) % cardData.length )
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
    <div className=" min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">

      <div className="flex place-content-center mt-5">
        {/* Header Section */}
        <div className={'text-center mb-20 transform transition-all duration-1000'}>
          <h1 className="text-6xl font-bold text-transparent mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of AI-powered creativity with our 3D interactive pricing
          </p>
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto h-[500px]">
        <div className="flex flex-row items-center">

          <ChevronLeft className="bg-slate-600 text-sky-400 items-center justify-center"/>
          
          <div 
              className="flex flex-row"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              onMouseEnter={() => {
                setIsHovered(true); console.log('hovered')}}
              onMouseLeave={() => {
                setIsHovered(false);
                console.log('hover out')}}
            >
            {cardData.map((card ) => (
              <Card key={card.id} card={card}></Card>
            ))}
          </div>
          
          <ChevronRight className=" bg-slate-600 text-sky-400"/>
        </div>
        </div>
    
    
    
    </div>
  );
};

export default PurchasePage;