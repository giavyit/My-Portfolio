const Footer = () => {
  return (
    <>
      {/* Spacer block to prevent content from hiding under the fixed footer */}
      <div className="h-16 md:h-20 w-full shrink-0" />

      <footer className="fixed bottom-0 z-[100] w-full border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto flex h-16 md:h-20 items-center justify-center px-4 md:px-8">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} My Website
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
