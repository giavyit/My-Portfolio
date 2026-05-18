export function HomeTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen font-sans gap-4 p-4 bg-background">{children}</div>
  );
}
