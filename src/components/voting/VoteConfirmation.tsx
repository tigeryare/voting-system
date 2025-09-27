import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, GraduationCap, AlertTriangle } from "lucide-react";

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

interface VoteConfirmationProps {
  selectedCandidate?: Candidate;
  selectedSemester?: number | null;
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

export const VoteConfirmation = ({ selectedCandidate, selectedSemester }: VoteConfirmationProps) => {
  return (
    <Card className="p-8 shadow-card border-0">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-university-blue/10 text-university-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            Step 4: Confirmation
          </div>
          
          <h2 className="text-3xl font-bold text-foreground">Confirm Your Vote</h2>
          <p className="text-muted-foreground mt-2">
            Please review your selections before submitting your vote.
          </p>
        </div>

        {/* Vote Summary */}
        <div className="max-w-md mx-auto space-y-4">
          {/* Selected Candidate */}
          <Card className="p-4 bg-secondary/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-border flex-shrink-0">
                <img
                  src={getImageSrc(selectedCandidate?.image || "ayan-mohamed")}
                  alt={`${selectedCandidate?.name} - Selected Candidate`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">Selected Candidate</div>
                <h3 className="font-semibold text-foreground text-lg">{selectedCandidate?.name}</h3>
                <Badge variant="secondary" className="text-xs mt-1">
                  {selectedCandidate?.faculty}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Selected Semester */}
          <Card className="p-4 bg-secondary/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-step-blue rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">Your Semester</div>
                <div className="font-semibold text-foreground text-lg">
                  Semester {selectedSemester}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Important Warning */}
        <Alert className="max-w-2xl mx-auto border-accent/30 bg-accent/10">
          <AlertTriangle className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground">
            <strong>Important:</strong> Once you submit your vote, it cannot be changed or cancelled. 
            Please ensure your selections are correct before proceeding.
          </AlertDescription>
        </Alert>

        {/* Security Notice */}
        <div className="text-center text-sm text-muted-foreground max-w-md mx-auto">
          Your vote will be submitted anonymously and securely. No personal information will be 
          associated with your vote selection.
        </div>
      </div>
    </Card>
  );
};