import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-[100] w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto flex h-16 items-center justify-between lg:px-16 md:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">DOAN GIA VY</span>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Navbar />
          </div>
        </div>
      </header>
      {/* Spacer block to prevent content from hiding under the fixed header */}
      <div className="h-16 w-full shrink-0" />
    </>
  );
};

export default Header;
