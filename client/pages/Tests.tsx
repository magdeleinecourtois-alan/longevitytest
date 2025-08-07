import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

interface TestResultProps {
  title: string;
  date?: string;
  value?: string;
  unit?: string;
  hasNavigation?: boolean;
  navigationPath?: string;
}

const TestResult: React.FC<TestResultProps> = ({ title, date, value, unit, hasNavigation, navigationPath }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (navigationPath) {
      navigate(navigationPath);
    }
  };
  
  return (
    <div className="flex h-[87px] p-5 justify-between items-center flex-1 rounded-[20px] bg-gradient-to-b from-[#838CF8] to-[#5D58DD]">
      <div className="flex flex-col justify-center items-start gap-[3px]">
        <div className="text-[#E8DEF8] font-montserrat text-[20px] font-bold leading-[125%]">
          {title}
        </div>
          {date && (
            <div className="text-[#E8DEF8] font-montserrat text-[15px] font-normal leading-[125%]">
              {date}
            </div>
          )}
      </div>
      <div className="text-[#E8DEF8] font-montserrat leading-[125%]">
        {hasNavigation ? (
          <button
            onClick={handleNavigation} 
            className="text-[#0C0A66] font-montserrat text-[20px] font-bold leading-[125%] hover:underline cursor-point"
          >
            View here
          </button>
        ) : (
          <>
            <span className="text-[40px] font-bold">{value}</span>
            <span className="text-[20px] font-normal ml-1">{unit}</span>
          </>
        )}
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <div className="flex h-[151px] flex-col justify-center items-center gap-[15px] flex-1 rounded-[20px] bg-gradient-to-r from-[#838CF8] to-[#838CF8]">
      <div className="text-[#E8DEF8] font-montserrat text-[20px] font-normal leading-[125%]">
        {title}
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="text-[#E8DEF8] font-montserrat text-[50px] font-bold leading-[125%]">
          {value}
        </div>
        <div className="text-[#EADDFF] font-montserrat text-[25px] font-normal leading-[125%]">
          %
        </div>
      </div>
    </div>
  );
};

export default function Tests() {
  // Sample test data - in a real app, this would come from an API or user data
  const testResults = {
    gripStrength: {
      value: "49",
      unit: "kg",
      date: "Made on September 8th, 2025"
    },
    questionnaires: {
      navigationPath: "/questionnaires"
    },
    metrics: {
      energy: 80,
      mental: 75,
      digestion: 82
    }
  };

  return (
    <Layout>
      <div className="relative w-full h-full">
        {/* Title */}
        <div className="self-stretch text-[#0C0A66] font-dynapuff text-[40px] font-semibold leading-[125%] mt-6 mb-10">
          Your Tests
        </div>

        {/* Content sections */}
        <div className="flex flex-col items-start gap-[29px] self-stretch w-full">
          {/* Grip Strength Test */}
          <div className="flex w-full items-center gap-5">
            <TestResult
              title="Grip Strength"
              date={testResults.gripStrength.date}
              value={testResults.gripStrength.value}
              unit={testResults.gripStrength.unit}
            />
          </div>

          {/* Questionnaires */}
          <div className="flex w-full items-center gap-5">
            <TestResult
              title="Questionnaires"
              hasNavigation={true}
              navigationPath={testResults.questionnaires.navigationPath}
            />
          </div>

          {/* Metrics Grid */}
          <div className="flex w-full items-center gap-5">
            <MetricCard
              title="Energy"
              value={testResults.metrics.energy}
            />
            <MetricCard
              title="Mental"
              value={testResults.metrics.mental}
            />
            <MetricCard
              title="Digestion"
              value={testResults.metrics.digestion}
            />
          </div>
        </div>

        {/* Mascot Image */}
        <div className="absolute -bottom-[26rem] right-4 pointer-events-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd94a954e643744c9a8435197eecd3256%2F8a6414c349ef4707bec129d13f742ffe?format=webp&width=800"
            alt="Alan Mascot"
            className="w-[343px] h-[474px] object-contain"
          />
        </div>
      </div>
    </Layout>
  );
}
