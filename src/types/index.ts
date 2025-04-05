
export interface Donation {
  name: string;
  foodType: string;
  quantity: string;
  location: string;
}

export interface DonationWithSuggestion extends Donation {
  suggestion: string;
}
