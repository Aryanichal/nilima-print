type Tool = {
  name: string;
  description: string;
  href: string;
  status: "available" | "coming-soon";
};

const tools: Tool[] = [
  {
    name: "Merge PDFs",
    description: "Combine PDF files or entire folders into a single document.",
    href: "#",
    status: "coming-soon",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <header className="border-b border-black/[.08] bg-white dark:border-white/[.08] dark:bg-black">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Nilima Print
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Employee Portal
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Tools
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col justify-between rounded-lg border border-black/[.08] bg-white p-5 dark:border-white/[.08] dark:bg-zinc-950"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-black dark:text-zinc-50">
                    {tool.name}
                  </h3>
                  {tool.status === "coming-soon" && (
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
