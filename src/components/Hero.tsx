import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary to-secondary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Robotics & More!
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Simplifying robotics and artificial intelligence through educational content in Arabic, with technical terms in English.
          </p>
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open("https://youtube.com", "_blank")}
          >
            <Youtube className="mr-2 h-5 w-5" />
            Subscribe Now
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};