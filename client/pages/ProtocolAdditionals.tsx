import Layout from "@/components/Layout";
import { useState } from "react";

interface ActionItemProps {
  title: string;
  color: "red" | "orange" | "green";
  content?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const ActionItem: React.FC<ActionItemProps> = ({ title, color, content, isExpanded, onToggle }) => {
  const colorMap = {
    red: "#FF5938",
    orange: "#FFA538", 
    green: "#38FF6D"
  };

  const chevronRotation = isExpanded ? "rotate-180" : "";

  return (
    <div className="flex flex-col gap-0 self-stretch">
      <div
        className="flex h-[87px] p-5 justify-between items-center flex-1 rounded-[20px] bg-gradient-to-b from-[#838CF8] to-[#5D58DD] cursor-pointer transition-all duration-200 hover:shadow-lg"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-[15px] h-[14px] rounded-full"
            style={{ backgroundColor: colorMap[color] }}
          />
          <div className="flex flex-col justify-center items-start gap-[3px]">
            <div className="text-[#E8DEF8] font-montserrat text-[20px] font-bold leading-[125%]">
              {title}
            </div>
          </div>
        </div>
        <svg
          className={`w-6 flex flex-col justify-center items-center transition-transform duration-200 ${chevronRotation}`}
          width="24"
          height="11"
          viewBox="0 0 24 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7.62012L6.56097 1.50012L5.43896 2.49762L11.439 9.24762C11.5093 9.32693 11.5957 9.39041 11.6924 9.43389C11.7891 9.47737 11.8939 9.49985 12 9.49985C12.106 9.49985 12.2108 9.47737 12.3075 9.43389C12.4042 9.39041 12.4906 9.32693 12.561 9.24762L18.561 2.49762L17.439 1.50162L12 7.62012Z"
            fill="#E8DEF8"
          />
        </svg>
      </div>
      
      {/* Expanded content */}
      {isExpanded && content && (
        <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[20px] bg-gradient-to-b from-[#838CF8] to-[#5D58DD] mt-[-10px] pt-[20px] rounded-t-none">
          <div className="flex px-5 flex-col items-start self-stretch">
            <div className="self-stretch text-[#E8DEF8] text-justify font-montserrat text-[20px] font-normal leading-[125%]">
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ProtocolAdditionals() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpansion = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const additionalActions = [
    {
      id: "stress-management",
      title: "Practice stress management techniques",
      color: "red" as const,
      content: "Implement daily stress reduction practices such as meditation, deep breathing exercises, or mindfulness to improve mental health and longevity."
    },
    {
      id: "screen-time",
      title: "Decrease daily screen time",
      color: "orange" as const,
      content: "Reduce recreational screen time by 1-2 hours daily. Excessive screen time can negatively impact sleep quality, mental health, and overall well-being."
    },
    {
      id: "social-connections",
      title: "Maintain strong social connections",
      color: "green" as const,
      content: "Prioritize meaningful relationships and social activities. Strong social bonds are linked to increased longevity and better mental health."
    },
    {
      id: "regular-checkups",
      title: "Maintain regular health checkups",
      color: "green" as const,
      content: "Maintain regular appointments with healthcare providers for preventive care, screenings, and health monitoring to catch issues early."
    },
    {
      id: "mindful-habits",
      title: "Keep on developing mindful daily habits",
      color: "green" as const,
      content: "Incorporate small, consistent habits like gratitude journaling, spending time in nature, or practicing mindful eating to enhance overall well-being."
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="flex flex-col items-start gap-1 self-stretch mb-10">
        <div className="self-stretch text-[#0C0A66] font-dynapuff text-[40px] font-semibold leading-[125%]">
          Additionals
        </div>
        <div className="self-stretch text-[#0C0A66] font-montserrat text-[20px] font-normal leading-[125%]">
          Started on September 29th
        </div>
      </div>

      {/* Actions List */}
      <div className="flex w-full flex-col items-start gap-5">
        {additionalActions.map((action) => (
          <ActionItem
            key={action.id}
            title={action.title}
            color={action.color}
            content={action.content}
            isExpanded={expandedItem === action.id}
            onToggle={() => toggleExpansion(action.id)}
          />
        ))}
      </div>
    </Layout>
  );
}
