
import { DonationForm } from "@/components/DonationForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <span className="text-primary">ResQ</span>Meal
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Helping you connect your excess food with those who need it most.
                Get AI-powered recommendations for where to donate your food.
              </p>
            </div>
            
            <div className="w-full max-w-md">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Share Your Donation</h3>
              <p className="text-muted-foreground">
                Provide details about the food you want to donate, including type, quantity, and your location.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Get Smart Recommendations</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your donation and finds the best places to donate based on your location and food type.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Make an Impact</h3>
              <p className="text-muted-foreground">
                Connect with the recommended organization and deliver your donation where it can help those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-lg">
              <h2 className="text-3xl font-bold">Why Donate?</h2>
              <p className="text-lg">
                Food waste is a global issue. By donating your excess food, you're not only reducing waste but also helping those facing food insecurity in your community.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Reduce food waste and its environmental impact</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Help feed those experiencing food insecurity</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Support local community organizations</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-primary mb-1">1.3B</p>
                <p className="text-sm text-muted-foreground">Tons of food wasted annually</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-primary mb-1">828M</p>
                <p className="text-sm text-muted-foreground">People face food insecurity</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-primary mb-1">25%</p>
                <p className="text-sm text-muted-foreground">Of food waste could feed everyone</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-primary mb-1">8%</p>
                <p className="text-sm text-muted-foreground">Of greenhouse gases from food waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ResQMeal. Making food donation easier with AI-powered recommendations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
