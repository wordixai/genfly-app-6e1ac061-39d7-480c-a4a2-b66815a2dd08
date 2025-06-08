import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModelCard from "./ModelCard";
import ProviderButtons from "./ProviderButtons";
import MobileRoutingCurves from "./MobileRoutingCurves";

const modelData = {
  gpt41: {
    name: "GPT-4.1",
    provider: "openai",
    tokens: "47.0B",
    latency: "771ms",
    growth: "-1.71%",
    growthType: "negative",
    icon: "https://openrouter.ai/images/icons/OpenAI.svg",
    invert: true,
  },
  gemini25: {
    name: "Gemini 2.5 Pro Preview 06-05",
    provider: "google",
    tokens: "15.4B",
    latency: "2.2s",
    growth: "--",
    growthType: "neutral",
    badge: "New",
    icon: "https://openrouter.ai/images/icons/GoogleGemini.svg",
  },
  claude4: {
    name: "Claude Sonnet 4",
    provider: "anthropic",
    tokens: "214.4B",
    latency: "1.6s",
    growth: "-18.11%",
    growthType: "negative",
    icon: "https://openrouter.ai/images/icons/Anthropic.svg",
  },
};

const FeaturedModels = () => {
  return (
    <div className="w-full min-w-80 space-y-3 md:w-auto">
      <div className="block md:hidden">
        <MobileRoutingCurves />
        <ProviderButtons />
        <ModelCard {...modelData.gpt41} featured className="mt-3" />
        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <a className="text-primary text-xs hover:underline" href="/rankings?view=trending">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </a>
        </div>
      </div>

      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button
            variant="ghost"
            className="h-6 px-1.5 text-xs gap-0 text-primary hover:underline"
          >
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>
        <ModelCard {...modelData.gemini25} />
        <ModelCard {...modelData.gpt41} featured />
        <ModelCard {...modelData.claude4} />
      </div>
    </div>
  );
};

export default FeaturedModels;