
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    // This function would typically be called after Razorpay payment completes
    // For demo purposes, we're simulating a successful payment
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl font-bold mb-4 text-white">99 Digitals Anime Store</h1>
        <p className="text-xl text-purple-100 mb-8">
          Welcome to our anime store! Click the button below to simulate a completed payment and see the thank you page.
        </p>
        <Button 
          onClick={handlePaymentSuccess}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-6 px-8 rounded-lg text-lg"
        >
          Simulate Successful Payment
        </Button>
      </div>
    </div>
  );
};

export default Index;
