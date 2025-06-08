import { ExternalLink } from "lucide-react";

const FeatureCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
      {/* One API for Any Model */}
      <a className="h-full" href="/models">
        <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
          <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
            <div className="absolute inset-0">
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
              </div>
              <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
                {/* Floating provider icons */}
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out animate-float-${i % 5}`}
                    style={{ 
                      animationDelay: `${i * 150}ms`,
                      opacity: 0.85,
                      transform: i % 2 === 0 ? 'translateX(0)' : 'translateX(36px)'
                    }}
                  >
                    <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                      <div className="overflow-hidden rounded-full">
                        <img
                          width="256"
                          height="256"
                          alt="Provider icon"
                          src={getProviderIcon(i)}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-6 py-4 h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                One API for Any Model
              </h3>
              <p className="text-sm text-muted-foreground">
                Access all major models through a single, unified interface. OpenAI SDK works out of the box.
              </p>
            </div>
            <span className="text-primary group-hover/card:underline">
              Browse all
              <ExternalLink className="ml-1 inline-block w-4" />
            </span>
          </div>
        </div>
      </a>

      {/* Higher Availability */}
      <a href="/docs/features/uptime-optimization" className="h-full">
        <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
          <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
            <div className="h-full flex items-center justify-center">
              <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
                <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
                  anthropic/claude-3.7-sonnet
                </div>
                <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" className="text-muted-foreground/60">
                  <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
                </svg>
                <div className="flex justify-between w-full">
                  {["GoogleGemini", "Anthropic", "Bedrock"].map((provider, i) => (
                    <div key={i} className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                      <img
                        width="256"
                        height="256"
                        alt={`${provider} icon`}
                        src={`https://openrouter.ai/images/icons/${provider}.svg`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-6 py-4 h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                Higher Availability
              </h3>
              <p className="text-sm text-muted-foreground">
                Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.
              </p>
            </div>
            <span className="text-primary group-hover/card:underline">
              Learn more
              <ExternalLink className="ml-1 inline-block w-4" />
            </span>
          </div>
        </div>
      </a>

      {/* Price and Performance */}
      <a href="/docs/features/provider-routing#provider-sorting" className="h-full">
        <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
          <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
            <div className="relative flex h-full items-center justify-center">
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-1 to-slate-1 via-transparent opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-1 to-slate-1 via-transparent opacity-20"></div>
              </div>
              <div className="h-full w-full flex items-center justify-center">
                <div className="w-40 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded opacity-50"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-6 py-4 h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                Price and Performance
              </h3>
              <p className="text-sm text-muted-foreground">
                Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.
              </p>
            </div>
            <span className="text-primary group-hover/card:underline">
              Learn more
              <ExternalLink className="ml-1 inline-block w-4" />
            </span>
          </div>
        </div>
      </a>

      {/* Custom Data Policies */}
      <a target="_blank" href="/docs/features/privacy-and-logging" className="h-full" rel="noreferrer">
        <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
          <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-center w-full max-w-52">
                <div className="flex justify-between items-end w-full px-[45px] -mb-2">
                  <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
                    <svg className="size-5 text-green-9" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <svg className="size-32 text-muted-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.3}>
                  <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-6 py-4 h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                Custom Data Policies
              </h3>
              <p className="text-sm text-muted-foreground">
                Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.
              </p>
            </div>
            <span className="text-primary group-hover/card:underline">
              View docs
              <ExternalLink className="ml-1 inline-block w-4" />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

// Helper function to get provider icons
const getProviderIcon = (index: number) => {
  const icons = [
    "https://openrouter.ai/images/icons/Microsoft.svg",
    "https://openrouter.ai/images/icons/Perplexity.svg", 
    "https://openrouter.ai/images/icons/Qwen.png",
    "https://openrouter.ai/images/icons/DeepSeek.png",
    "https://openrouter.ai/images/icons/Cohere.png",
    "https://openrouter.ai/images/icons/Anthropic.svg",
    "https://openrouter.ai/images/icons/OpenAI.svg",
    "https://openrouter.ai/images/icons/GoogleGemini.svg",
    "https://openrouter.ai/images/icons/Bedrock.svg",
  ];
  return icons[index % icons.length];
};

export default FeatureCards;