import { BadgeCheck } from 'lucide-react'

type CardProps = {
    title: string;
    price: number;
    features: string[];
}
const Card = ({title, price, features}: CardProps) => {

  return (
    <div className="w-80 h-[350px] flex flex-col justify-evenly bg-linear-to-bl from-violet-500 to-fuchsia-500  shadow-white-xl">
        <p className="text-center text-text font-mono">{title}</p>
        <div className="flex items-baseline justify-end-safe">
            <p className="font-sans text-2xl font-bold text-a">${price}</p>
            <span className="ml-2 mr-2 text-sm text-slate-800/70 font-serif ">/month</span>
        </div>
        <div className="flex justify-center">
            
            <div  className="flex flex-col  gap-2 text-white">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <div className="w-5 flex-shrink-0 flex justify-center">
                        <BadgeCheck className="w-5 h-5 text-green-400" />
                        </div>
                    <p className="w-60 text-ellipsis ">{feature}</p>
                </div>
            ))}
            </div>
        
        </div>
    </div>
  )
}


export default Card;