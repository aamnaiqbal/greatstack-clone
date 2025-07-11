import ProgramCard from "@/components/ProgramCard";

const ProgramSection = () => {
  const programs = [
    {
      imgSrc: "/images/program-1.png",
      title: "Graduation Degree",
      imgIcon: "/images/program-icon-1.png",
    },
    {
      imgSrc: "/images/program-2.png",
      title: "Masters Degree",
      imgIcon: "/images/program-icon-2.png",
    },
    {
      imgSrc: "/images/program-3.png",
      title: "Post Graduation",
      imgIcon: "/images/program-icon-3.png",
    },
  ];
  return (
    <section
      id="program"
      className="bg-[#f8f8f8] py-16 px-4 text-center md:px-[10%]"
    >
      <div className="max-w-[90%] mx-auto">
        <p className="text-base font-semibold text-[#212ea0] mb-2 uppercase">
          Our Program
        </p>
        <h2 className="text-3xl md:text-3xl font-bold text-[#000f38] mb-18">
          What We Offer
        </h2>

        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-8 items-center justify-between">
          {programs.map((program) => (
            <ProgramCard {...program} key={program.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
