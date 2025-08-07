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
  const getActionText = () => {
    switch (status) {
      case "available":
        return "To do";
      case "completed":
        return "Done";
      case "locked":
        return null;
    }
  };

  const getItemStyles = () => {
    if (status === "locked") {
      return "bg-[#838CF8] opacity-60";
    }
    return "bg-gradient-to-b from-[#838CF8] to-[#5D58DD]";
  };

  const getTitleStyles = () => {
    if (status === "locked") {
      return "text-[#6750A4] font-normal";
    }
    return "text-[#E8DEF8] font-bold";
  };

  const getActionStyles = () => {
    if (status === "completed") {
      return "text-[#0C0A66] font-normal italic text-[15px]";
    }
    return "text-[#0C0A66] font-bold text-[20px] cursor-pointer hover:underline";
  };

  return (
    <div className={`flex px-5 py-[10px] justify-between items-center self-stretch rounded-[20px] ${getItemStyles()}`}>
      <div className="flex items-center gap-[5px] self-stretch">
        {icon}
        <div className="flex flex-col justify-center items-start gap-[3px]">
          <div className={`font-montserrat text-[20px] leading-[125%] ${getTitleStyles()}`}>
            {title}
          </div>
        </div>
      </div>
      {getActionText() && (
        <div 
          className={`font-montserrat leading-[125%] ${getActionStyles()}`}
          onClick={status === "available" ? onActionClick : undefined}
        >
          {getActionText()}
        </div>
      )}
    </div>
  );
};

export default function Questionnaires() {
  // Simulate current progress - in real app this would come from user data
  const [currentDay] = useState(1); // Day 1: only first two available
  
  const questionnaires = [
    {
      id: "initial-assessment",
      title: "Initial Assessment",
      icon: (
        <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.2724 14.4979C3.52752 14.8186 3.88582 15.0005 4.26078 15L9.56387 14.9916C9.98238 14.9909 10.768 14.6578 10.768 14.6578L19.9702 7.59064C21.0565 6.95452 24.6481 6.1923 25.3106 5.00303C26.0545 3.66798 26.1353 2.70185 25.8416 2.01932C25.5487 1.33632 24.8366 0.834739 23.4752 0.732548C22.2626 0.641606 21.0565 1.01006 19.9702 1.64571L15.9683 3.98908L7.08376 0.142367C6.97694 0.0593333 6.85283 0.01073 6.72428 0.00158226C6.59572 -0.00756551 6.46738 0.0230742 6.35253 0.0903341L3.68148 1.65462C3.24802 1.90822 3.14321 2.57575 3.47146 2.99201L9.81777 7.59064L5.62495 10.046L2.68578 8.33645C2.58453 8.27752 2.47268 8.2469 2.35927 8.24707C2.24586 8.24723 2.13408 8.27817 2.03295 8.33739L0.402702 9.29227C-0.0214153 9.54072 -0.133132 10.1886 0.176425 10.6086L3.2724 14.4979Z" fill="#51E517"/>
        </svg>
      ),
      unlockDay: 1,
      url: "https://example.com/initial-assessment"
    },
    {
      id: "physical-activity",
      title: "Physical Activity",
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0208 12.5L12.5521 21.9271C12.5347 22.2049 12.4264 22.4392 12.2271 22.6302C12.0278 22.8212 11.7542 22.9167 11.4063 22.9167C11.1285 22.9167 10.8899 22.8212 10.6906 22.6302C10.4913 22.4392 10.3826 22.2049 10.3646 21.9271L9.89583 13.5417L6.58854 11.6406L6.22396 12.9948L7.8125 15.7812C7.95139 16.0243 7.98195 16.2847 7.90417 16.5625C7.82639 16.8403 7.66563 17.0486 7.42188 17.1875C7.17813 17.3264 6.91771 17.3611 6.64063 17.2917C6.36354 17.2222 6.15521 17.066 6.01563 16.8229L4.19271 13.6719C4.12327 13.5503 4.07986 13.4201 4.0625 13.2812C4.04514 13.1424 4.05382 13.0035 4.08854 12.8646L5.20833 8.80208L11.1979 5.36458L9.0625 3.22917C8.87153 3.03819 8.77153 2.79965 8.7625 2.51354C8.75347 2.22743 8.85347 1.97986 9.0625 1.77083C9.25347 1.57986 9.49653 1.48438 9.79167 1.48438C10.0868 1.48438 10.3299 1.57986 10.5208 1.77083L13.6198 4.84375C13.8628 5.08681 13.9628 5.37778 13.9198 5.71667C13.8767 6.05555 13.7073 6.31146 13.4115 6.48438L10.8333 7.96875L12.0833 9.0625L19.8958 2.68229C20.0868 2.50868 20.317 2.43507 20.5865 2.46146C20.8559 2.48785 21.0944 2.62222 21.3021 2.86458C21.4583 3.05556 21.5323 3.27257 21.524 3.51562C21.5156 3.75868 21.4243 3.97569 21.25 4.16667L13.0208 12.5ZM5.20833 7.29167C4.63542 7.29167 4.14514 7.08785 3.7375 6.68021C3.32986 6.27257 3.1257 5.78194 3.125 5.20833C3.12431 4.63472 3.32847 4.14444 3.7375 3.7375C4.14653 3.33056 4.63681 3.12639 5.20833 3.125C5.77986 3.12361 6.27049 3.32778 6.68021 3.7375C7.08993 4.14722 7.29375 4.6375 7.29167 5.20833C7.28959 5.77917 7.08577 6.26979 6.68021 6.68021C6.27465 7.09062 5.78403 7.29444 5.20833 7.29167Z" fill="#7AF8FF"/>
        </svg>
      ),
      unlockDay: 1,
      url: "https://example.com/physical-activity"
    },
    {
      id: "nutrition",
      title: "Nutrition",
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2291 2.86462C18.2291 2.65742 18.1468 2.45871 18.0003 2.3122C17.8538 2.16568 17.6551 2.08337 17.4479 2.08337C17.2407 2.08337 17.042 2.16568 16.8955 2.3122C16.7489 2.45871 16.6666 2.65742 16.6666 2.86462V7.04692C14.5562 5.63233 11.5968 6.12921 10.1114 8.31254L2.45101 19.5688C1.87184 20.4209 1.98226 21.5584 2.71664 22.2855C3.07951 22.6424 3.55548 22.8615 4.06258 22.9053C4.56967 22.949 5.07614 22.8145 5.49476 22.525L16.7343 14.7448C17.7417 14.0528 18.4353 12.9912 18.6644 11.7907C18.8936 10.5903 18.6399 9.34784 17.9583 8.33337H22.1343C22.3415 8.33337 22.5403 8.25106 22.6868 8.10455C22.8333 7.95804 22.9156 7.75933 22.9156 7.55212C22.9156 7.34492 22.8333 7.14621 22.6868 6.9997C22.5403 6.85318 22.3415 6.77087 22.1343 6.77087H19.3323L22.6864 3.41671C22.8244 3.26861 22.8996 3.07273 22.896 2.87033C22.8924 2.66793 22.8104 2.47482 22.6673 2.33168C22.5241 2.18855 22.331 2.10655 22.1286 2.10298C21.9262 2.09941 21.7304 2.17454 21.5823 2.31254L18.2291 5.66567V2.86462Z" fill="#6750A4"/>
        </svg>
      ),
      unlockDay: 8,
      url: "https://example.com/nutrition"
    },
    {
      id: "sleep",
      title: "Sleep",
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.7032 2.34375C11.6573 2.3439 11.6116 2.34808 11.5665 2.35625C9.07944 2.79885 6.84408 4.14585 5.29075 6.13791C3.73743 8.12998 2.97597 10.6263 3.15297 13.1461C3.32998 15.666 4.43294 18.0314 6.2495 19.7867C8.06605 21.5421 10.4678 22.5633 12.9922 22.6539C13.1204 22.6586 13.2485 22.6539 13.3751 22.6539C15.0149 22.6551 16.6309 22.2614 18.0863 21.5059C19.5418 20.7505 20.7939 19.6557 21.7368 18.3141C21.8132 18.1984 21.8578 18.0647 21.8661 17.9264C21.8744 17.7881 21.8461 17.65 21.7841 17.526C21.7221 17.4021 21.6285 17.2967 21.5128 17.2204C21.3971 17.1441 21.2634 17.0996 21.1251 17.0914C19.5643 16.9544 18.056 16.4604 16.7166 15.6475C15.3773 14.8347 14.2427 13.7247 13.4008 12.4034C12.5588 11.0822 12.0319 9.58499 11.8608 8.02763C11.6897 6.47026 11.879 4.89441 12.4141 3.42188C12.4596 3.30401 12.4763 3.17697 12.4628 3.05135C12.4493 2.92572 12.4059 2.80514 12.3364 2.69966C12.2668 2.59418 12.1731 2.50685 12.0629 2.44494C11.9528 2.38303 11.8294 2.34834 11.7032 2.34375Z" fill="#6750A4"/>
        </svg>
      ),
      unlockDay: 15,
      url: "https://example.com/sleep"
    },
    {
      id: "additional-lifestyle",
      title: "Additional Lifestyle",
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.974 2.40518L12.5 2.16248L12.026 2.40518C10.8337 3.01419 9.74693 3.8108 8.80729 4.76456C10.1752 5.47611 11.4216 6.40008 12.5 7.50206C13.5781 6.40017 14.8242 5.4762 16.1917 4.76456C15.2523 3.81089 14.1659 3.01428 12.974 2.40518ZM11.1448 9.09789C9.3281 7.18295 6.95099 5.89338 4.35521 5.41456L3.125 5.18748V13.5416C3.12458 15.4232 3.69035 17.2614 4.74872 18.8171C5.80709 20.3728 7.30909 21.574 9.05937 22.2646C8.57713 20.794 8.33205 19.256 8.33333 17.7083C8.33333 14.4875 9.37604 11.5104 11.1448 9.09789ZM21.875 5.18852L20.6458 5.41456C14.825 6.48331 10.4167 11.5802 10.4167 17.7083C10.4167 19.3083 10.7188 20.8406 11.2677 22.25L11.5177 22.8906C11.8448 22.901 12.1729 22.9166 12.5 22.9166C14.9864 22.9166 17.371 21.9289 19.1291 20.1708C20.8873 18.4126 21.875 16.028 21.875 13.5416V5.18852Z" fill="#6750A4"/>
        </svg>
      ),
      unlockDay: 22,
      url: "https://example.com/additional-lifestyle"
    },
    {
      id: "final-assessment",
      title: "Final Assessment",
      icon: (
        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.600469 10.1372L4.76016 13.8872C5.10146 14.1954 5.51043 14.419 5.95406 14.5401L19.4353 18.2128C20.6766 18.5508 21.9928 18.6216 23.2322 18.2766C24.623 17.8889 25.2684 17.2823 25.447 16.6026C25.6266 15.923 25.3659 15.0694 24.3516 14.0264C23.4478 13.0973 22.2727 12.4894 21.0314 12.1514L16.4606 10.9064L11.7562 1.91343C11.6855 1.64108 11.4773 1.42827 11.2097 1.35514L8.15859 0.52405C7.66359 0.38905 7.17891 0.773425 7.18781 1.29468L9.43406 8.99202L4.64344 7.68702L3.35016 4.50514C3.25969 4.27593 3.06844 4.10343 2.83359 4.03968L0.97125 3.53202C0.486563 3.39983 0.00890625 3.76639 0 4.27639L0.0107813 9.04733C0.0196875 9.46499 0.293438 9.86015 0.600469 10.1372Z" fill="#6750A4"/>
        </svg>
      ),
      unlockDay: 30,
      url: "https://example.com/final-assessment"
    }
  ];

  const getQuestionnaireStatus = (unlockDay: number, id: string) => {
    // Simple logic for demonstration - in real app this would be more sophisticated
    if (currentDay >= unlockDay) {
      // For demo, mark first questionnaire as completed if it's day 2+
      if (id === "initial-assessment" && currentDay >= 2) {
        return "completed";
      }
      return "available";
    }
    return "locked";
  };

  const handleQuestionnaireClick = (url: string) => {
    // In a real app, this would navigate to the questionnaire
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <div className="relative w-full h-full">
        {/* Title */}
        <div className="self-stretch text-[#0C0A66] font-dynapuff text-[40px] font-semibold leading-[125%] mt-6 mb-10">
          Questionnaires
        </div>

        {/* Subtitle */}
        <div className="self-stretch text-[#0C0A66] text-justify font-montserrat text-[20px] font-normal leading-[125%] mb-8">
          Answer the available questionnaire in order to unlock each week's new protocol.
        </div>

        {/* Questionnaires List */}
        <div className="flex flex-col items-start gap-[10px] self-stretch w-full">
          {questionnaires.map((questionnaire) => {
            const status = getQuestionnaireStatus(questionnaire.unlockDay, questionnaire.id);
            return (
              <QuestionnaireItem
                key={questionnaire.id}
                id={questionnaire.id}
                title={questionnaire.title}
                icon={questionnaire.icon}
                status={status}
                onActionClick={status === "available" ? () => handleQuestionnaireClick(questionnaire.url) : undefined}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
