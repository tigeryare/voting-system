import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

// Import candidate images
import ayanImage from "@/assets/ayan-mohamed.jpg";
import abdirahmanImage from "@/assets/abdirahman-yusuf.jpg";
import hodanImage from "@/assets/hodan-ali.jpg";
import sacidImage from "@/assets/sacid-ahmed.jpg";

interface Candidate {
  id: number;
  name: string;
  faculty: string;
  image: string;
}

interface CandidateCardProps {
  candidate: Candidate;
  isSelected: boolean;
  onSelect: () => void;
}

const getImageSrc = (imageName: string) => {
  switch (imageName) {
    case "ayan-mohamed":
      return ayanImage;
    case "abdirahman-yusuf":
      return abdirahmanImage;
    case "hodan-ali":
      return hodanImage;
    case "sacid-ahmed":
      return sacidImage;
    default:
      return ayanImage;
  }
};

export const CandidateCard = ({ candidate, isSelected, onSelect }: CandidateCardProps) => {
  return (
    <Card
      className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-button ${
        isSelected
          ? "border-university-blue shadow-card bg-university-blue/5"
          : "border-border hover:border-university-blue/50"
      }`}
      onClick={onSelect}
    >
      <div className="space-y-4">
        {/* Candidate Image */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto ring-2 ring-border">
            <img
              src={getImageSrc(candidate.image)}
              alt={`${candidate.name} - Candidate for Student Representative`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Selection Indicator */}
          {isSelected && (
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-button">
              <CheckCircle className="h-5 w-5 text-success-foreground" />
            </div>
          )}
        </div>

        {/* Candidate Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{candidate.name}</h3>
          
          <Badge variant="secondary" className="text-xs">
            {candidate.faculty}
          </Badge>

          <div className="pt-2">
            <div className={`text-sm font-medium ${
              isSelected ? "text-university-blue" : "text-muted-foreground"
            }`}>
              {isSelected ? "Selected" : "Click to select"}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};