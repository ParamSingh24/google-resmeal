
import { DonationWithSuggestion } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface RecommendationCardProps {
  donation: DonationWithSuggestion;
}

export function RecommendationCard({ donation }: RecommendationCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="bg-primary/10 pb-4">
        <CardTitle className="text-2xl text-center">Your AI-Powered Recommendation</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-4 space-y-6">
        <div className="prose prose-sm sm:prose-base">
          <p className="whitespace-pre-line text-lg">{donation.suggestion}</p>
        </div>
        
        <div className="bg-accent p-4 rounded-md space-y-2">
          <h3 className="font-bold">Your Donation Details:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Name</span>
              <span className="font-medium">{donation.name}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Food Type</span>
              <span className="font-medium">{donation.foodType}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Quantity</span>
              <span className="font-medium">{donation.quantity}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Location</span>
              <span className="font-medium">{donation.location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center pt-4">
          <Button onClick={() => navigate("/")} variant="default">
            Make Another Donation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
