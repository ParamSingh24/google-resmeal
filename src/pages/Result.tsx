
import { useLocation, Navigate } from "react-router-dom";
import { DonationWithSuggestion } from "@/types";
import { RecommendationCard } from "@/components/RecommendationCard";

const Result = () => {
  const location = useLocation();
  const donationData = location.state as DonationWithSuggestion;

  // Redirect if no data is available
  if (!donationData || !donationData.suggestion) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary py-4">
        <div className="container px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            <span onClick={() => window.location.href = "/"} className="cursor-pointer">
              <span>ResQ</span>Meal
            </span>
          </h1>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center">
            <div className="max-w-3xl w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Your Donation Recommendation
              </h2>
              <RecommendationCard donation={donationData} />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ResQMeal. Making food donation easier with smart recommendations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Result;
