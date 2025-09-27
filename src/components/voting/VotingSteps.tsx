import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, CheckCircle, User, GraduationCap } from "lucide-react";
import { ProgressIndicator } from "./ProgressIndicator";
import { CandidateCard } from "./CandidateCard";
import { VoteConfirmation } from "./VoteConfirmation";
import { useToast } from "@/hooks/use-toast";

type VotingStep = "verification" | "semester" | "candidates" | "confirmation" | "success";

const candidates = [
  {
    id: 1,
    name: "Ayan Mohamed",
    faculty: "Faculty of Business and Economics",
    image: "ayan-mohamed"
  },
  {
    id: 2,
    name: "Abdirahman Yusuf",
    faculty: "Faculty of Computer Science",
    image: "abdirahman-yusuf"
  },
  {
    id: 3,
    name: "Hodan Ali",
    faculty: "Faculty of Law",
    image: "hodan-ali"
  },
  {
    id: 4,
    name: "Sacid Ahmed",
    faculty: "Faculty of Medicine",
    image: "sacid-ahmed"
  }
];

const semesters = [
  { value: 1, label: "Semester 1", emoji: "1️⃣" },
  { value: 2, label: "Semester 2", emoji: "2️⃣" },
  { value: 3, label: "Semester 3", emoji: "3️⃣" },
  { value: 4, label: "Semester 4", emoji: "4️⃣" },
  { value: 5, label: "Semester 5", emoji: "5️⃣" },
  { value: 6, label: "Semester 6", emoji: "6️⃣" },
  { value: 7, label: "Semester 7", emoji: "7️⃣" },
  { value: 8, label: "Semester 8", emoji: "8️⃣" },
];

export const VotingSteps = () => {
  const [currentStep, setCurrentStep] = useState<VotingStep>("verification");
  const [isVerified, setIsVerified] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep === "verification" && isVerified) {
      setCurrentStep("semester");
    } else if (currentStep === "semester" && selectedSemester) {
      setCurrentStep("candidates");
    } else if (currentStep === "candidates" && selectedCandidate) {
      setCurrentStep("confirmation");
    } else if (currentStep === "confirmation") {
      setCurrentStep("success");
      toast({
        title: "Vote Submitted Successfully",
        description: "Thank you for participating in the student election.",
      });
    }
  };

  const handleBack = () => {
    if (currentStep === "semester") {
      setCurrentStep("verification");
    } else if (currentStep === "candidates") {
      setCurrentStep("semester");
    } else if (currentStep === "confirmation") {
      setCurrentStep("candidates");
    }
  };

  const handleStartOver = () => {
    window.location.reload();
  };

  const canProceed = () => {
    switch (currentStep) {
      case "verification":
        return isVerified;
      case "semester":
        return selectedSemester !== null;
      case "candidates":
        return selectedCandidate !== null;
      case "confirmation":
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "verification":
        return (
          <Card className="p-8 shadow-card border-0">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-university-blue/10 text-university-blue px-4 py-2 rounded-full text-sm font-medium">
                <User className="h-4 w-4" />
                Step 1: Verification
              </div>
              
              <h2 className="text-3xl font-bold text-foreground">Student Verification</h2>
              
              <p className="text-muted-foreground max-w-md mx-auto">
                Please confirm that you are an officially enrolled university student to proceed with voting.
              </p>

              <div className="bg-secondary/50 p-6 rounded-lg max-w-md mx-auto">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="verification"
                    checked={isVerified}
                    onCheckedChange={(checked) => setIsVerified(checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="verification"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      I confirm that I am an enrolled student
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Only officially registered students are eligible to vote in this election.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );

      case "semester":
        return (
          <Card className="p-8 shadow-card border-0">
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-university-blue/10 text-university-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <GraduationCap className="h-4 w-4" />
                  Step 2: Semester Selection
                </div>
                
                <h2 className="text-3xl font-bold text-foreground">Select Your Current Semester</h2>
                <p className="text-muted-foreground mt-2">
                  Choose your current semester level to proceed with voting.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {semesters.map((semester) => (
                  <button
                    key={semester.value}
                    onClick={() => setSelectedSemester(semester.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedSemester === semester.value
                        ? "border-university-blue bg-university-blue/10 shadow-button"
                        : "border-border hover:border-university-blue/50 bg-card"
                    }`}
                  >
                    <div className="text-2xl mb-2">{semester.emoji}</div>
                    <div className="text-sm font-medium text-foreground">{semester.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        );

      case "candidates":
        return (
          <Card className="p-8 shadow-card border-0">
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-university-blue/10 text-university-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <CheckCircle className="h-4 w-4" />
                  Step 3: Candidate Selection
                </div>
                
                <h2 className="text-3xl font-bold text-foreground">Choose Your Candidate</h2>
                <p className="text-muted-foreground mt-2">
                  Select ONE candidate for Student Representative. Your vote cannot be changed after submission.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {candidates.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    isSelected={selectedCandidate === candidate.id}
                    onSelect={() => setSelectedCandidate(candidate.id)}
                  />
                ))}
              </div>
            </div>
          </Card>
        );

      case "confirmation":
        return (
          <VoteConfirmation
            selectedCandidate={candidates.find(c => c.id === selectedCandidate)}
            selectedSemester={selectedSemester}
          />
        );

      case "success":
        return (
          <Card className="p-8 shadow-card border-0">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-success-foreground" />
              </div>
              
              <h2 className="text-3xl font-bold text-foreground">Vote Submitted Successfully!</h2>
              
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you for participating in the university student election. Your vote has been recorded securely.
              </p>

              <div className="bg-success/10 border border-success/20 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-sm text-success font-medium">
                  Your vote is anonymous and secure. Election results will be announced after the voting period ends.
                </p>
              </div>

              <Button onClick={handleStartOver} variant="outline">
                Return to Home
              </Button>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  if (currentStep === "success") {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {renderStepContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card shadow-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleStartOver}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Exit Voting
            </Button>
            <Badge variant="secondary">Secure Voting Session</Badge>
          </div>
        </div>
      </header>

      {/* Progress */}
      <div className="container mx-auto px-4 py-6">
        <ProgressIndicator currentStep={currentStep} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {renderStepContent()}

          {/* Navigation */}
          {(currentStep as VotingStep) !== "success" && (
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === "verification"}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-gradient-primary hover:shadow-button"
              >
                {currentStep === "confirmation" ? "Submit Vote" : "Next"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};