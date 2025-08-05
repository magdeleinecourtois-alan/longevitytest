import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

interface ProtocolBlockProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isUnlocked: boolean;
  onClick?: () => void;
}

const ProtocolBlock: React.FC<ProtocolBlockProps> = ({ title, subtitle, icon, isUnlocked, onClick }) => {
  return (
    <div 
      className={`flex h-[205px] p-5 justify-center items-center gap-[-16px] flex-1 rounded-[20px] cursor-pointer transition-all duration-200 ${
        isUnlocked 
          ? 'bg-gradient-to-b from-[#838CF8] to-[#5D58DD] hover:shadow-lg' 
          : 'bg-[#727DFF] opacity-60 cursor-not-allowed'
      }`}
      onClick={isUnlocked ? onClick : undefined}
    >
      <div className="flex items-start gap-2.5 flex-1">
        <div className="w-[44px] aspect-square flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-col items-start flex-1">
          <div className={`text-center font-montserrat text-[20px] leading-[125%] ${
            isUnlocked ? 'text-[#E8DEF8] font-bold' : 'text-[#6750A4] font-normal'
          }`}>
            {title}
          </div>
          <div className={`font-montserrat text-[15px] font-normal leading-[125%] whitespace-nowrap ${
            isUnlocked ? 'text-[#E8DEF8]' : 'text-[#6750A4]'
          }`}>
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

const SportIcon = ({ isUnlocked }: { isUnlocked: boolean }) => (
  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.9167 22.5L22.0917 39.0917C22.0611 39.5805 21.8704 39.993 21.5197 40.3292C21.1689 40.6653 20.6873 40.8333 20.075 40.8333C19.5861 40.8333 19.1663 40.6653 18.8155 40.3292C18.4647 39.993 18.2734 39.5805 18.2417 39.0917L17.4167 24.3333L11.5958 20.9875L10.9542 23.3708L13.75 28.275C13.9944 28.7028 14.0482 29.1611 13.9113 29.65C13.7744 30.1389 13.4915 30.5055 13.0625 30.75C12.6335 30.9944 12.1752 31.0555 11.6875 30.9333C11.1998 30.8111 10.8332 30.5361 10.5875 30.1083L7.37917 24.5625C7.25695 24.3486 7.18056 24.1194 7.15 23.875C7.11945 23.6305 7.13473 23.3861 7.19584 23.1417L9.16667 15.9917L19.7083 9.94165L15.95 6.18332C15.6139 5.84721 15.4379 5.42738 15.422 4.92382C15.4061 4.42027 15.5821 3.98454 15.95 3.61665C16.2861 3.28054 16.7139 3.11249 17.2333 3.11249C17.7528 3.11249 18.1806 3.28054 18.5167 3.61665L23.9708 9.02499C24.3986 9.45277 24.5746 9.96488 24.4988 10.5613C24.4231 11.1578 24.1248 11.6082 23.6042 11.9125L19.0667 14.525L21.2667 16.45L35.0167 5.22082C35.3528 4.91527 35.7579 4.78571 36.2322 4.83215C36.7064 4.8786 37.1262 5.1151 37.4917 5.54165C37.7667 5.87777 37.8968 6.25971 37.8822 6.68749C37.8675 7.11527 37.7068 7.49721 37.4 7.83332L22.9167 22.5ZM9.16667 13.3333C8.15834 13.3333 7.29545 12.9746 6.578 12.2572C5.86056 11.5397 5.50123 10.6762 5.5 9.66665C5.49878 8.6571 5.85811 7.79421 6.578 7.07799C7.29789 6.36177 8.16078 6.00243 9.16667 5.99999C10.1726 5.99754 11.0361 6.35688 11.7572 7.07799C12.4783 7.7991 12.837 8.66199 12.8333 9.66665C12.8297 10.6713 12.4709 11.5348 11.7572 12.2572C11.0434 12.9795 10.1799 13.3382 9.16667 13.3333Z"
      fill={isUnlocked ? "#7AF8FF" : "#6750A4"}
      stroke="none"
    />
  </svg>
);

const NutritionIcon = ({ isUnlocked }: { isUnlocked: boolean }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M31.8541 5.42706C31.8541 5.07068 31.7125 4.72889 31.4605 4.47689C31.2085 4.22489 30.8667 4.08331 30.5103 4.08331C30.1539 4.08331 29.8122 4.22489 29.5602 4.47689C29.3082 4.72889 29.1666 5.07068 29.1666 5.42706V12.6206C25.5367 10.1875 20.4465 11.0421 17.8916 14.7975L4.7157 34.1582C3.71954 35.6238 3.90945 37.5803 5.17258 38.8309C5.79673 39.4448 6.6154 39.8218 7.4876 39.897C8.3598 39.9722 9.23093 39.7409 9.95095 39.243L29.283 25.861C31.0157 24.6707 32.2086 22.8448 32.6028 20.78C32.997 18.7152 32.5605 16.5782 31.3882 14.8333H38.571C38.9274 14.8333 39.2692 14.6917 39.5212 14.4397C39.7732 14.1877 39.9148 13.8459 39.9148 13.4896C39.9148 13.1332 39.7732 12.7914 39.5212 12.5394C39.2692 12.2874 38.9274 12.1458 38.571 12.1458H33.7515L39.5206 6.37665C39.758 6.12192 39.8872 5.785 39.8811 5.43688C39.8749 5.08875 39.7339 4.75661 39.4877 4.51041C39.2415 4.26421 38.9093 4.12318 38.5612 4.11704C38.2131 4.1109 37.8762 4.24012 37.6215 4.47748L31.8541 10.2449V5.42706Z"
      fill={isUnlocked ? "#FF8D28" : "#6750A4"}
    />
  </svg>
);

const SleepIcon = ({ isUnlocked }: { isUnlocked: boolean }) => (
  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5975 4.625C20.5168 4.62526 20.4363 4.63262 20.3569 4.647C15.9798 5.42597 12.0455 7.79669 9.31167 11.3027C6.57782 14.8088 5.23764 19.2022 5.54917 23.6372C5.8607 28.0722 7.80191 32.2352 10.9991 35.3246C14.1962 38.414 18.4232 40.2115 22.8663 40.3709C23.0918 40.3791 23.3173 40.3709 23.54 40.3709C26.4261 40.373 29.2703 39.68 31.8319 38.3505C34.3935 37.021 36.5972 35.094 38.2567 32.7327C38.3911 32.5292 38.4696 32.2939 38.4842 32.0504C38.4988 31.807 38.4491 31.5639 38.3399 31.3458C38.2308 31.1277 38.0662 30.9421 37.8625 30.8079C37.6589 30.6736 37.4235 30.5953 37.18 30.5809C34.4331 30.3398 31.7785 29.4703 29.4212 28.0397C27.0639 26.609 25.0672 24.6555 23.5853 22.33C22.1034 20.0046 21.1761 17.3696 20.875 14.6286C20.5739 11.8877 20.9071 9.11416 21.8488 6.5225C21.9289 6.31506 21.9583 6.09147 21.9345 5.87037C21.9107 5.64927 21.8344 5.43705 21.712 5.25141C21.5896 5.06576 21.4246 4.91205 21.2307 4.80309C21.0369 4.69413 20.8198 4.63307 20.5975 4.625Z"
      fill={isUnlocked ? "#FFE684" : "#6750A4"}
      stroke="none"
    />
  </svg>
);

const AdditionalsIcon = ({ isUnlocked }: { isUnlocked: boolean }) => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.3342 4.73307L22.5 4.30591L21.6658 4.73307C19.5673 5.80492 17.6546 7.20695 16.0008 8.88557C18.4083 10.1379 20.6019 11.7641 22.5 13.7036C24.3975 11.7643 26.5905 10.1381 28.9973 8.88557C27.3441 7.20711 25.4321 5.80509 23.3342 4.73307ZM20.1148 16.5122C16.9175 13.1419 12.7337 10.8723 8.16517 10.0296L6 9.62991V24.3332C5.99926 27.6448 6.99501 30.88 8.85774 33.618C10.7205 36.3561 13.364 38.4702 16.4445 39.6856C15.5957 37.0973 15.1644 34.3904 15.1667 31.6666C15.1667 25.9979 17.0018 20.7582 20.1148 16.5122ZM39 9.63174L36.8367 10.0296C26.592 11.9106 18.8333 20.8811 18.8333 31.6666C18.8333 34.4826 19.365 37.1794 20.3312 39.6599L20.7712 40.7874C21.3468 40.8057 21.9243 40.8332 22.5 40.8332C26.8761 40.8332 31.0729 39.0948 34.1673 36.0005C37.2616 32.9062 39 28.7093 39 24.3332V9.63174Z"
      fill={isUnlocked ? "#FF57D8" : "#6750A4"}
    />
  </svg>
);

export default function Protocols() {
  const navigate = useNavigate();

  // Simulate current week - in real app this would come from user data or API
  const currentWeek = 4; // All weeks unlocked

  const handleProtocolClick = (protocolName: string, isUnlocked: boolean) => {
    if (isUnlocked) {
      const routeMap: { [key: string]: string } = {
        "Sport": "/protocols/sport",
        "Nutrition": "/protocols/nutrition",
        "Sleep": "/protocols/sleep",
        "Additionals": "/protocols/additionals"
      };

      const route = routeMap[protocolName];
      if (route) {
        navigate(route);
      }
    }
  };

  return (
    <Layout>
      {/* Title */}
      <div className="self-stretch text-[#0C0A66] font-dynapuff text-[40px] font-semibold leading-[125%] mt-6 mb-4">
        Your Protocols
      </div>
      
      {/* Content sections */}
      <div className="flex flex-col items-start gap-5 self-stretch">
        {/* Subtitle */}
        <div className="flex flex-col items-start gap-[15px] self-stretch">
          <p className="self-stretch text-[#0C0A66] font-montserrat text-[20px] font-normal leading-[125%]">
            <span className="font-bold">Each week</span>, you have a{' '}
            <span className="font-bold">specific focus</span> and a{' '}
            <span className="font-bold">tailored protocol</span>.
          </p>
        </div>
        
        {/* Protocol Grid */}
        <div className="flex flex-col items-start gap-[29px] self-stretch">
          {/* First Row */}
          <div className="flex items-center gap-5 self-stretch">
            <ProtocolBlock
              title="Sport"
              subtitle={currentWeek >= 1 ? "Week 1 - Started on September 8th" : "Week 1 - Will start on September 8th"}
              icon={<SportIcon isUnlocked={currentWeek >= 1} />}
              isUnlocked={currentWeek >= 1}
              onClick={() => handleProtocolClick("Sport", currentWeek >= 1)}
            />
            <ProtocolBlock
              title="Nutrition"
              subtitle={currentWeek >= 2 ? "Week 2 - Started on September 15th" : "Week 2 - Will start on September 15th"}
              icon={<NutritionIcon isUnlocked={currentWeek >= 2} />}
              isUnlocked={currentWeek >= 2}
              onClick={() => handleProtocolClick("Nutrition", currentWeek >= 2)}
            />
          </div>
          
          {/* Second Row */}
          <div className="flex items-center gap-5 self-stretch">
            <ProtocolBlock
              title="Sleep"
              subtitle={currentWeek >= 3 ? "Week 3 - Started on September 22nd" : "Week 3 - Will start on September 22nd"}
              icon={<SleepIcon isUnlocked={currentWeek >= 3} />}
              isUnlocked={currentWeek >= 3}
              onClick={() => handleProtocolClick("Sleep", currentWeek >= 3)}
            />
            <ProtocolBlock
              title="Additionals"
              subtitle={currentWeek >= 4 ? "Week 4 - Started on September 29th" : "Week 4 - Will start on September 29th"}
              icon={<AdditionalsIcon isUnlocked={currentWeek >= 4} />}
              isUnlocked={currentWeek >= 4}
              onClick={() => handleProtocolClick("Additionals", currentWeek >= 4)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
