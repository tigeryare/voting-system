import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Clock, Shield, Vote } from "lucide-react";
import { VotingSteps } from "@/components/voting/VotingSteps";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showVotingForm, setShowVotingForm] = useState(false);
  const { toast } = useToast();

  const handleStartVoting = () => {
    setShowVotingForm(true);
  };

  if (showVotingForm) {
    return <VotingSteps />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card shadow-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Vote className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">University Election Portal</h1>
                <p className="text-muted-foreground">Student Representative Voting System</p>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Secure Voting
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Section */}
          <Card className="p-8 shadow-card border-0">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-university-blue/10 text-university-blue px-4 py-2 rounded-full text-sm font-medium">
                <Users className="h-4 w-4" />
                Student Representative Election 2024
              </div>
              
              <h2 className="text-4xl font-bold text-foreground">
                Welcome to the Official University Student Election Portal
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                This system allows students from Semester 1 to Semester 8 to cast their vote for the Student Representative of the Year.
              </p>

              {/* Voting Period Info */}
              <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary p-3 rounded-lg">
                  <Calendar className="h-4 w-4" />
                  <span>Voting Period: Dec 15-20, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary p-3 rounded-lg">
                  <Clock className="h-4 w-4" />
                  <span>Deadline: Dec 20, 11:59 PM</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Voting Instructions */}
          <Card className="p-8 shadow-card border-0">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-success" />
              Voting Instructions
            </h3>
            
            <div className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-university-blue rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Confirm Student Enrollment</h4>
                    <p className="text-muted-foreground">Only officially registered students are allowed to vote.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-university-blue rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Select Your Semester</h4>
                    <p className="text-muted-foreground">Choose your current semester level (1 to 8).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-university-blue rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Review Candidates</h4>
                    <p className="text-muted-foreground">Review all official candidates and their faculty information.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-university-blue rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Cast Your Vote</h4>
                    <p className="text-muted-foreground">Select ONE candidate only. You can vote only once, so choose carefully.</p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Important Security Notice</h4>
                    <p className="text-muted-foreground text-sm">
                      Once submitted, your vote cannot be changed. The system ensures anonymity and prevents multiple voting attempts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Start Voting Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleStartVoting}
              className="bg-gradient-primary hover:shadow-button text-lg px-12 py-6 rounded-lg font-semibold transition-all duration-200"
            >
              <Vote className="h-5 w-5 mr-2" />
              Start Voting Process
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              By proceeding, you acknowledge that you are an enrolled university student
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;