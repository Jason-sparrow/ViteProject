import Card from "../../components/Card";
import { useState } from "react";
import type { CardData } from "../../types/cardType";
import { Car } from "lucide-react";

const cardData: CardData[] = [ 
  { id: 0, 
    title: "Basic", 
    price: 19, 
    features: 
    [ 'Limited Project up to 9', 
      'Limited AI support', 
      'Boost Creativity and Productivity with 25+ AI tools', 
      'Advanced analytics' ] 
  }, 
  { id: 1, 
    title: "Standard", 
    price: 29, 
    isPopular: true, 
    features: 
    [ 'Limited Project up to 49', 
      'Boost Creativity and Productivity with 75+ AI tools', 
      'Marketing automations', 'Custom Domain' ] 
    },
  { id: 2, 
    title: "Premium", 
    price: 39, 
    features: 
    [ 'Unlimited products', 
      'Unlimited AI support', 
      'Custom Integration', 
      'Priority phone support' 
    ] 
  } 
]


const PurchasePage = () => {
  const [idx, setIdx] = useState(0);
  return (
    <div className=" flex flex-row min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {cardData.map((card ) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default PurchasePage;