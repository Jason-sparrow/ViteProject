import Card from "../../components/Card";


const PurchasePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center
                    text-text bg-background transition-colors duration-300 gap-12.5">
      <Card title="Basic" price={19} features={
        [
          'Limited Project up to 9', 
          'Limited AI support', 
          'Boost Creativity and Productivity with 25 + AI tools including',
          'Advanced analytics' 
        ]

      }>
        
      </Card>
      
      <Card title="Standard" price={29} features = {
        ['Limited Project up to 49', 
          'Boost Creativity and Productivity with 75 + AI tools',
          'Marketing automations' ,
          'Custom Domain'

        ]
      }>
       </Card>

      <Card title="Premium" price={39} features = {
        [
          'Unlimited products', 
          'Unimited AI support', 
          'Custom Integration' ,
          'Priority phone support'
        ]}>
      </Card>
    </div>
  );
};

export default PurchasePage;
