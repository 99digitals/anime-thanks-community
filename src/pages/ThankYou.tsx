
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { CheckCheck, Mail, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const [joined, setJoined] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    setJoined(true);
    toast({
      title: "Successfully joined!",
      description: "Welcome to our exclusive 99 Digitals community!",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCheck className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Thank You!</h1>
          <p className="text-xl text-purple-100 mb-8">Your order has been successfully completed</p>
        </div>

        <Card className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none shadow-xl">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-white">Order Confirmation</h2>
              <p className="text-purple-100">
                Your product will be delivered to your email shortly.
              </p>
            </div>

            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="flex items-center space-x-3 text-white">
                <Mail className="h-5 w-5" />
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
                    Get special offers, early access to new products, and connect with fellow anime enthusiasts
                  </p>
                </div>

                {!joined ? (
                  <Button 
                    onClick={handleJoinCommunity} 
                    className="w-full py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-lg rounded-lg border-none"
                  >
                    <UserPlus className="mr-2 h-5 w-5" /> Join 99 Digitals Community
                  </Button>
                ) : (
                  <div className="bg-green-500 bg-opacity-20 p-4 rounded-lg text-center">
                    <p className="text-green-300 font-medium flex items-center justify-center">
                      <CheckCheck className="mr-2 h-5 w-5" /> You've joined our community!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button 
            variant="link" 
            onClick={() => navigate("/")}
            className="text-purple-100 hover:text-white underline"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
