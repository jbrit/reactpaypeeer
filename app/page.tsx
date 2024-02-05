import SectionOne from "@/components/SectionOne/SectionOne";
import SectionThree from "@/components/SectionThree/SectionThree";
import SectionTwo from "@/components/SectionTwo/SectionTwo";

export default function Home() {
  return (
    <div className="flex-grow w-full max-w-[1248px] mx-auto">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
