import { useState } from "react";
import Layout from "@/components/Layout";

interface QuestionnaireItemProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  status: "available" | "completed" | "locked";
  onActionClick?: () => void;
}

const QuestionnaireItem: React.FC<QuestionnaireItemProps> = ({
  title,
  icon,
  status,
  onActionClick
}) => {
  // Component logic for different states...

  return (
    <div className={`flex px-5 py-[10px] justify-between items-center self-stretch rounded-[20px] ${getItemStyles()}`}>
      {/* Icon and title */}
      {/* Action buttons based on status */}
    </div>
  );
};

export default function Questionnaires() {
  const [currentDay] = useState(1);

  const questionnaires = [
    {
      id: "initial-assessment",
      title: "Initial Assessment",
      icon: <svg>...</svg>, // Green checkmark icon
      unlockDay: 1,
      url: "https://example.com/initial-assessment"
    },
    // ... 5 more questionnaires with progressive unlock days
  ];

  // Progressive unlocking logic and rendering...
}
