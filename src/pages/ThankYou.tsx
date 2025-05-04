
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Bell, CheckCheck, MessageSquare, Share } from "lucide-react";
import { useState, useEffect } from "react";

const ThankYou = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Trigger animation after component mounts
    setIsAnimated(true);
  }, []);

  const handleJoinCommunity = () => {
    window.open("https://whatsapp.com/channel/0029Vb6SaPYInlqK7EbPvC2s", "_blank");
    toast({
      title: "Opening WhatsApp Channel",
      description: "Don't forget to press the bell icon for exclusive updates!",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div 
        className={`max-w-3xl w-full space-y-8 transform transition-all duration-700 ${
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`h-20 w-20 bg-green-500 rounded-full flex items-center justify-center transform transition-all duration-700 ${
              isAnimated ? "scale-100" : "scale-0"
            }`}>
              <CheckCheck className="h-10 w-10 text-white animate-pulse" />
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-700 ${
            isAnimated ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}>
            Thank You!
          </h1>
          <p className={`text-xl text-purple-100 mb-8 transition-all duration-700 delay-100 ${
            isAnimated ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}>
            Your order has been successfully completed
          </p>
        </div>

        <Card className={`p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none shadow-xl transform transition-all duration-700 delay-200 ${
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-white">Order Confirmation</h2>
              <p className="text-purple-100">
                Your product will be delivered to your email shortly.
              </p>
            </div>

            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="flex items-center space-x-3 text-white">
                <MessageSquare className="h-5 w-5 animate-bounce" />
                <p>Please check all folders of your email including spam/promotions.</p>
              </div>
            </div>

            <div className="border-t border-purple-300 border-opacity-30 pt-6">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Join Our Exclusive Community
                  </h3>
                  <p className="text-purple-100">
                    Get early access to new releases, special offers, and exclusive content by following our WhatsApp channel
                  </p>
                </div>

                <Button 
                  onClick={handleJoinCommunity} 
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                  className={`w-full py-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg rounded-lg border-none transition-all duration-300 ${buttonHover ? 'scale-105 shadow-lg' : 'scale-100'}`}
                >
                  <Share className={`mr-2 h-5 w-5 transition-all ${buttonHover ? 'animate-pulse' : ''}`} /> 
                  Follow Our WhatsApp Channel
                </Button>
                
                <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-2 sm:space-y-0 mt-3 text-purple-100 p-3 bg-white bg-opacity-10 rounded-lg">
                  <Bell className="h-6 w-6 text-yellow-300 animate-pulse" />
                  <p className="text-center sm:text-left">Don't forget to press the bell icon after following to receive all exclusive updates!</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className={`text-center mt-8 transition-all duration-700 delay-300 ${
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <p className="text-purple-100">
            Need help with your order? Contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
