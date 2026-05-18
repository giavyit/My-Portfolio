import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      <Link
        href="/home"
        className="transition-colors hover:text-black/80 text-black/60 dark:text-white/60 dark:hover:text-white/80"
      >
        Kinh Nghiệm
      </Link>
      <Link
        href="/about"
        className="transition-colors hover:text-black/80 text-black/60 dark:text-white/60 dark:hover:text-white/80"
      >
        Kỹ Năng
      </Link>
      <Link
        href="/contact"
        className="transition-colors hover:text-black/80 text-black/60 dark:text-white/60 dark:hover:text-white/80"
      >
        Dự Án
      </Link>
    </nav>
  );
};

export default Navbar;
