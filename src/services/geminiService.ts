
import { Donation } from "@/types";
import { toast } from "@/components/ui/use-toast";

// Service that returns donation recommendations
export const generateAISuggestion = async (donation: Donation): Promise<string> => {
  try {
    // Simulating an API call with a timeout and predefined responses
    return new Promise((resolve) => {
      setTimeout(() => {
        const suggestions = [
          `Based on your donation of ${donation.foodType} (${donation.quantity}) from ${donation.location}, I recommend contacting "Food Forward" at (555) 123-4567. They're located near your area and specialize in distributing ${donation.foodType.toLowerCase()} efficiently to those in need. Please ensure the food is properly packed and labeled with ingredients and expiration dates. They accept donations weekdays 9AM-5PM.`,
          
          `"Community Table" would be an excellent match for your ${donation.foodType.toLowerCase()} donation! Located just 10 minutes from ${donation.location}, they serve 200+ people daily and have the capacity to handle your ${donation.quantity}. Contact Maria at communitytable@example.org or call (555) 987-6543. They request that perishables be delivered before 2PM to ensure same-day distribution.`,
          
          `For your donation of ${donation.foodType} (${donation.quantity}), I recommend "Neighborhood Nourish" - they're specifically looking for contributions like yours this week. They operate a community kitchen near ${donation.location} and serve many families in need. Contact John at (555) 765-4321 to arrange a drop-off time. If your donation is perishable, please keep it refrigerated until delivery.`,
          
          `"Harvest Hope" would be perfect for your ${donation.foodType.toLowerCase()} donation! They're located within 5 miles of ${donation.location} and have refrigeration facilities to properly store your contribution. Your ${donation.quantity} could help feed up to 30 families. Please contact them at (555) 246-8102 or info@harvesthope.org to schedule your donation drop-off.`
        ];
        
        // Select a suggestion based on criteria from the donation
        const suggestionIndex = (donation.name.length + donation.foodType.length) % suggestions.length;
        resolve(suggestions[suggestionIndex]);
      }, 1500); // Simulate network delay
    });
  } catch (error) {
    toast({
      title: "Error generating suggestion",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
    return "Unable to generate a suggestion at this time. Please try again later.";
  }
};
