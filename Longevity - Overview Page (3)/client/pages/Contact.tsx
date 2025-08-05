import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      {/* Title */}
      <div className="self-stretch text-[#0C0A66] font-dynapuff text-[40px] font-semibold leading-[125%] mt-6 mb-10">
        Contact
      </div>
      
      {/* Contact Information */}
      <div className="flex flex-col items-start gap-[15px] self-stretch">
        <div className="self-stretch text-[#0C0A66] font-montserrat text-[20px] font-normal leading-[125%]">
          <span className="font-normal">If you have any questions, please ping us on </span>
          <span className="font-bold">Slack</span>
          <span className="font-normal">: </span>
          <span className="font-bold">@magdeleine.courtois</span>
          <span className="font-normal"> & </span>
          <span className="font-bold">@clara.kramer</span>
        </div>
      </div>
    </Layout>
  );
}
