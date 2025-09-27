import { CheckCircle, User, GraduationCap, Users, Vote } from "lucide-react";

type VotingStep = "verification" | "semester" | "candidates" | "confirmation" | "success";
type ProgressStep = "verification" | "semester" | "candidates" | "confirmation";

interface ProgressIndicatorProps {
  currentStep: VotingStep;
}

const steps: Array<{ key: ProgressStep; label: string; icon: any }> = [
  { key: "verification", label: "Verification", icon: User },
  { key: "semester", label: "Semester", icon: GraduationCap },
  { key: "candidates", label: "Candidates", icon: Users },
  { key: "confirmation", label: "Confirm", icon: Vote },
];

export const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  const getCurrentStepIndex = (step: VotingStep) => {
    return steps.findIndex(s => s.key === step);
  };

  const currentIndex = getCurrentStepIndex(currentStep);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-border">
          <div 
            className="h-full bg-gradient-primary transition-all duration-500 ease-out"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          
          const Icon = step.icon;

          return (
            <div key={step.key} className="flex flex-col items-center relative z-10">
              {/* Step Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? "bg-success text-success-foreground shadow-button"
                    : isCurrent
                    ? "bg-gradient-primary text-primary-foreground shadow-button scale-110"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-sm font-medium transition-colors ${
                  isCompleted || isCurrent
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>

              {/* Step Number */}
              <span
                className={`text-xs transition-colors ${
                  isCompleted || isCurrent
                    ? "text-muted-foreground"
                    : "text-muted-foreground/70"
                }`}
              >
                Step {index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};