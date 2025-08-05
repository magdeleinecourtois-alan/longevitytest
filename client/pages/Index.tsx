import Layout from "@/components/Layout";

const MarmotIcon = ({
  type,
  containerStyles,
  circleStyles,
  imageStyles,
}: {
  type: string;
  containerStyles: string;
  circleStyles: string;
  imageStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      <svg
        className={circleStyles}
        viewBox="0 0 91 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45.5" cy="44.8386" r="44.6331" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(85.9025 33.4096) rotate(171.458) scale(76.9467 290.387)"
          >
            <stop stopColor="#FFF3E5" />
            <stop offset="1" stopColor="#FFE1C5" />
          </radialGradient>
        </defs>
      </svg>
      <img
        src={getImageSrc(type)}
        alt={`${type} marmot`}
        className={imageStyles}
      />
    </div>
  );
};

const getImageSrc = (type: string) => {
  const imageMap: { [key: string]: string } = {
    test: "https://api.builder.io/api/v1/image/assets/TEMP/46918a606b4b358e3a0ee13f077f81144af0fc1c?width=170",
    doc: "https://api.builder.io/api/v1/image/assets/TEMP/4fb65ba457fcb5ca145ed4d975aff490b25ba81d?width=170",
    sport:
      "https://api.builder.io/api/v1/image/assets/TEMP/62e0595018156bd9d4d4306b9e6f6283161ed82c?width=151",
    nutrition:
      "https://api.builder.io/api/v1/image/assets/TEMP/e945d0a6950735ae7cd8244291836d4545252e71?width=196",
    sleep:
      "https://api.builder.io/api/v1/image/assets/TEMP/6ec409682b6c30695b6f8894c1ea8c03c8736097?width=176",
    winner:
      "https://api.builder.io/api/v1/image/assets/TEMP/fb7783ae33098a6ca4957c85fd796530aee33d87?width=196",
  };
  return imageMap[type] || "";
};

export default function Index() {
  return (
    <Layout>
      {/* Title positioned below header */}
      <div className="self-stretch text-[#0C0A66] font-montserrat text-[52px] font-normal leading-[125%] text-center">
        <span className="font-dynapuff font-bold">Add Years of Good Life</span>
        <span className="font-montserrat font-bold"> </span>
        <span className="font-montserrat font-normal">in 30 days</span>
      </div>

      {/* Content sections */}
      <div className="flex flex-col items-start gap-5 self-stretch">
        {/* Welcome section */}
        <div className="flex flex-col items-start gap-[15px] self-stretch mt-6 mb-4">
          <p className="self-stretch text-[#0C0A66] font-montserrat text-[20px] font-normal leading-[125%] text-center">
            <span className="font-bold">Welcome</span> in Alan's Longevity
            program, you are part of the{" "}
            <span className="font-bold">first testing batch</span>!
          </p>
        </div>

        {/* Timeline section */}
        <div className="flex justify-center w-full">
          <div className="w-[950px] h-[260px] relative">
            <div className="w-[949px] h-[130px] flex-shrink-0 absolute left-[1px] top-[65px]">
              {/* Timeline line */}
              <div className="w-[910px] h-[3px] bg-[#7F91FF] absolute left-[9px] top-[65px]"></div>

              {/* Day 1 - Test */}
              <MarmotIcon
                type="test"
                containerStyles="w-[110px] h-[115px] flex-shrink-0 absolute left-0 top-[6px]"
                circleStyles="w-[110px] h-[110px] flex-shrink-0 aspect-square absolute left-0 top-[4px]"
                imageStyles="w-[105px] h-[105px] flex-shrink-0 aspect-square absolute left-0 top-0"
              />

              {/* Day 2 - Doc */}
              <MarmotIcon
                type="doc"
                containerStyles="w-[110px] h-[110px] flex-shrink-0 absolute left-[130px] top-[9px]"
                circleStyles="w-[110px] h-[110px] flex-shrink-0 aspect-square absolute left-0 top-0"
                imageStyles="w-[105px] h-[98px] flex-shrink-0 absolute left-[2px] top-[5px]"
              />

              {/* Week 1 - Sport */}
              <MarmotIcon
                type="sport"
                containerStyles="w-[110px] h-[110px] flex-shrink-0 absolute left-[270px] top-[9px]"
                circleStyles="w-[110px] h-[110px] flex-shrink-0 aspect-square absolute left-0 top-0"
                imageStyles="w-[94px] h-[94px] flex-shrink-0 aspect-square absolute left-[8px] top-[5px]"
              />

              {/* Week 2 - Nutrition */}
              <MarmotIcon
                type="nutrition"
                containerStyles="w-[120px] h-[125px] flex-shrink-0 absolute left-[470px] top-0"
                circleStyles="w-[110px] h-[110px] flex-shrink-0 aspect-square absolute left-[5px] top-[9px]"
                imageStyles="w-[120px] h-[125px] flex-shrink-0 aspect-[98.20/101.61] absolute left-0 top-0"
              />

              {/* Week 3 - Sleep */}
              <MarmotIcon
                type="sleep"
                containerStyles="w-[115px] h-[113px] flex-shrink-0 absolute left-[670px] top-[6px]"
                circleStyles="w-[110px] h-[110px] flex-shrink-0 aspect-square absolute left-[5px] top-[2px]"
                imageStyles="w-[108px] h-[108px] flex-shrink-0 aspect-square absolute left-0 top-0"
              />

              {/* Day 30 - Winner */}
              <MarmotIcon
                type="winner"
                containerStyles="w-[120px] h-[120px] flex-shrink-0 absolute left-[850px] top-[9px]"
                circleStyles="w-[112px] h-[112px] flex-shrink-0 aspect-square absolute left-[8px] top-[4px]"
                imageStyles="w-[120px] h-[120px] flex-shrink-0 aspect-square absolute left-0 top-0"
              />
            </div>

            {/* Timeline labels */}
            {/* Day 30 */}
            <div className="w-[230px] h-[55px] flex-shrink-0 text-[#0C0A66] text-right font-montserrat text-[13px] font-normal leading-[125%] absolute left-[737px] top-[195px]">
              <span className="text-[#F5F5F5] italic">Day 30</span>
              <br />
              <span className="text-[#F5F5F5]">
                Do the test again &<br />
              </span>
              <span className="font-bold text-[#0C0A66]">
                celebrate your Y-1 birthday
              </span>
              <span className="text-[#0C0A66]">!</span>
            </div>

            {/* Week 3 */}
            <div className="w-[190px] h-[54px] flex-shrink-0 text-center font-montserrat text-[13px] font-normal leading-[125%] absolute left-[635px] top-0">
              <span className="text-[#F5F5F5] italic">Week 3</span>
              <br />
              <span className="font-bold text-[#0C0A66]">
                Learn how to sleep
              </span>
              <span className="text-[#0C0A66]"> </span>
              <span className="text-[#F5F5F5]">to repair your biology</span>
            </div>

            {/* Week 2 */}
            <div className="w-[135px] h-[54px] flex-shrink-0 text-center font-montserrat text-[13px] font-normal leading-[125%] absolute left-[458px] top-[195px]">
              <span className="text-[#F5F5F5] italic">Week 2</span>
              <br />
              <span className="text-[#F5F5F5]">Get a </span>
              <span className="font-bold text-[#0C0A66]">
                diet that fits your needs
              </span>
            </div>

            {/* Week 1 */}
            <div className="w-[185px] h-[54px] flex-shrink-0 text-center font-montserrat text-[13px] font-normal leading-[125%] absolute left-[233px] top-[1px]">
              <span className="text-[#F5F5F5] italic">Week 1</span>
              <br />
              <span className="font-bold text-[#0C0A66]">
                Build a sport routine
              </span>
              <span className="text-[#0C0A66]"> </span>
              <span className="text-[#F5F5F5]">that makes you stronger</span>
            </div>

            {/* Day 2 */}
            <div className="w-[165px] h-[54px] flex-shrink-0 text-center font-montserrat text-[13px] font-normal leading-[125%] absolute left-[100px] top-[195px]">
              <span className="text-[#F5F5F5] italic">Day 2</span>
              <br />
              <span className="text-[#F5F5F5]">Receive your </span>
              <span className="font-bold text-[#0C0A66]">results </span>
              <span className="text-[#F5F5F5]">and</span>
              <span className="font-bold text-[#0C0A66]">
                {" "}
                personalized plan
              </span>
            </div>

            {/* Day 1 */}
            <div className="w-[85px] h-[55px] flex-shrink-0 font-montserrat text-[13px] font-normal leading-[125%] absolute left-[10px] top-[1px]">
              <span className="text-[#F5F5F5] italic">Day 1</span>
              <br />
              <span className="text-[#F5F5F5]">Get your</span>
              <br />
              <span className="font-bold text-[#0C0A66]">tests done</span>
              <span className="text-[#0C0A66]">!</span>
            </div>
          </div>
        </div>

        {/* Description text - split into separate sections */}
        <div className="self-stretch text-[#0C0A66] text-justify font-montserrat text-[18px] font-normal leading-[125%]">
          As illustrated on the above, the adventure will be organized in
          distinct chapters: doing the tests, getting one specific focus per
          week, and finally doing the tests again on the last day, to track
          potential progress.
        </div>

        <div className="self-stretch text-[#0C0A66] text-justify font-montserrat text-[18px] font-semibold leading-[125%]">
          <span className="font-bold text-[#EADDFF]">
            Why a grip strength test
          </span>
          <span className="font-normal"> </span>
          <span className="text-[#EADDFF]">
            ?<br />
          </span>
          <span className="font-normal">
            This measures the maximum force someone can generate when squeezing
            an object. More than that, it is a{" "}
          </span>
          <span className="font-bold">
            great assessment of a person's overall health
          </span>
          <span className="font-normal">
            . We can hence use that to easily track health progress over time.
          </span>
        </div>

        <div className="self-stretch text-[#0C0A66] text-justify font-montserrat text-[18px] font-normal leading-[125%]">
          <span className="font-bold text-[#EADDFF]">PS</span>
          <span className="text-[#EADDFF]">:</span>
          <span>
            {" "}
            we advise you to play the game during the whole month, to make sure
            you reach your full potential by the end of it ;)
          </span>
        </div>
      </div>
    </Layout>
  );
}
