
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Donation } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateAISuggestion } from "@/services/geminiService";
import { toast } from "@/components/ui/use-toast";

export function DonationForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Donation>({
    name: "",
    foodType: "",
    quantity: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.foodType || !formData.quantity || !formData.location) {
      toast({
        title: "Missing information",
        description: "Please fill in all the fields to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate suggestion
      const suggestion = await generateAISuggestion(formData);
      
      // Navigate to results page with data
      navigate("/result", { 
        state: { 
          ...formData, 
          suggestion 
        } 
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Donate Food</CardTitle>
        <CardDescription>
          Fill in the details about your food donation and get AI-powered recommendations on where to contribute.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name"
              name="name"
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="foodType">Type of Food</Label>
            <Input 
              id="foodType"
              name="foodType"
              placeholder="e.g., Fresh vegetables, Canned goods, etc." 
              value={formData.foodType}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input 
              id="quantity"
              name="quantity"
              placeholder="e.g., 5kg, 10 boxes, 20 meals" 
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Your Location</Label>
            <Input 
              id="location"
              name="location"
              placeholder="e.g., Downtown Seattle, 10019 New York" 
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Generating Suggestions..." : "Get Recommendations"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
