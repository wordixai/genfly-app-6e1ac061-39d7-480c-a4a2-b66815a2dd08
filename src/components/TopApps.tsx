import { BarChart3, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const topAppsData = [
  {
    rank: 1,
    name: "Cline",
    description: "Autonomous coding agent right in your IDE",
    tokens: "23.5B",
    favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cline.bot/&size=256",
    url: "https://cline.bot/",
  },
  {
    rank: 2,
    name: "Roo Code",
    description: "A whole dev team of AI agents in your editor",
    tokens: "20.5B",
    favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://roocode.com/&size=256",
    url: "https://github.com/RooVetGit/Roo-Cline",
  },
  {
    rank: 3,
    name: "Kilo Code",
    description: "AI coding agent for VS Code",
    tokens: "10.8B",
    favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kilocode.ai/&size=256",
    url: "https://kilocode.ai/",
  },
  {
    rank: 4,
    name: "liteLLM",
    description: "Open-source library to simplify LLM calls",
    tokens: "6.97B",
    favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://litellm.ai/&size=256",
    url: "https://litellm.ai/",
  },
  {
    rank: 5,
    name: "SillyTavern",
    description: "LLM frontend for power users",
    tokens: "5.74B",
    favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sillytavern.app/&size=256",
    url: "https://sillytavern.app/",
  },
];

const TopApps = () => {
  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-slate-9" />
            <h3 className="text-md font-medium text-slate-11">Top Apps</h3>
          </div>
          <p className="text-xs font-medium text-slate-11 hidden md:block">
            Largest public apps{" "}
            <a href="/docs/api-reference/overview#headers" className="text-primary hover:underline">
              opting into
            </a>{" "}
            usage tracking on OpenRouter
          </p>
        </div>
        <div className="group relative">
          <Button
            variant="outline"
            className="h-9 px-4 border rounded-full text-sm pl-4 pr-2 text-muted-foreground"
          >
            Today
            <ChevronUp className="size-4 rotate-180" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
        <div className="flex flex-col space-y-5">
          {topAppsData.slice(0, Math.ceil(topAppsData.length / 2)).map((app) => (
            <AppRow key={app.rank} {...app} />
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          {topAppsData.slice(Math.ceil(topAppsData.length / 2)).map((app) => (
            <AppRow key={app.rank} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface AppRowProps {
  rank: number;
  name: string;
  description: string;
  tokens: string;
  favicon: string;
  url: string;
}

const AppRow = ({ rank, name, description, tokens, favicon, url }: AppRowProps) => {
  return (
    <div className="grid grid-cols-12 items-center rounded-lg">
      <div className="col-span-1 text-left text-slate-11">{rank}.</div>
      <div className="col-span-1">
        <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
          <div className="overflow-hidden rounded size-5">
            <img
              width="256"
              height="256"
              alt={`Favicon for ${url}`}
              src={favicon}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="col-span-6 pl-6 text-left">
        <a
          className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer"
          href={`/apps?url=${encodeURIComponent(url)}`}
        >
          {name}
          <svg
            className="inline w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <div className="truncate text-xs text-slate-9">{description}</div>
      </div>
      <div className="col-span-4 text-right">
        <span className="text-sm font-medium text-muted-foreground">{tokens}</span>
        <span className="text-xs text-slate-9 ml-1">tokens</span>
      </div>
    </div>
  );
};

export default TopApps;