import Image from "next/image";
import { InstructionBlock } from "@/components/molecules/instruction-block";
import { ActionGroup } from "@/components/molecules/action-group";

export function HeroSection() {
  return (
    <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <InstructionBlock />
      <ActionGroup />
    </div>
  );
}
