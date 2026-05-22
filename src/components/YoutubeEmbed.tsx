"use client";

import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { Play, X, ChevronDown, ChevronUp } from "lucide-react";

interface YoutubeEmbedProps {
  onRemove?: () => void;
  url?: string;
}

function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function YoutubeEmbed({
  onRemove,
  url: initialUrl = "",
}: YoutubeEmbedProps) {
  const [url, setUrl] = useState(initialUrl);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (initialUrl) {
      const id = extractVideoId(initialUrl);
      if (id) setVideoId(id);
    }
  }, [initialUrl]);

  const handleEmbed = () => {
    const id = extractVideoId(url.trim());
    if (!id) {
      setError(
        "Invalid YouTube URL. Paste a valid youtube.com or youtu.be link.",
      );
      return;
    }
    setError("");
    setVideoId(id);
  };

  const handleClear = () => {
    setVideoId(null);
    setUrl("");
    setError("");
    setCollapsed(false);
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    playerVars: { autoplay: 0 },
  };

  return (
    <div className="rounded-sm border border-white/5 bg-[#0E0E0E] overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <div className="flex items-center gap-2 text-xs text-[#CBC3D7]/60 font-medium">
          <Play className="h-3.5 w-3.5 text-[#EF4444]" />
          <span>YouTube Reference</span>
        </div>
        <div className="flex items-center gap-1">
          {videoId && (
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="p-1 rounded-sm hover:bg-white/5 text-[#CBC3D7]/40 hover:text-[#CBC3D7] transition-colors"
              title={collapsed ? "Expand" : "Collapse"}
            >
              {collapsed ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronUp className="h-3.5 w-3.5" />
              )}
            </button>
          )}
          {onRemove && (
            <button
              onClick={onRemove}
              className="p-1 rounded-sm hover:bg-white/5 text-[#CBC3D7]/40 hover:text-[#EF4444] transition-colors"
              title="Remove widget"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* URL input — always visible unless video loaded and collapsed */}
      {!videoId && (
        <div className="p-4 flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleEmbed()}
            placeholder="Paste YouTube URL..."
            className="flex-1 text-xs bg-[#121212] border border-white/5 rounded-sm px-3 py-2 text-[#E5E2E1] placeholder-[#CBC3D7]/25 focus:border-[#0D9488] focus:outline-none transition-colors"
          />
          <button
            onClick={handleEmbed}
            className="px-3 py-2 text-xs bg-[#0D9488]/10 hover:bg-[#0D9488]/20 text-[#0D9488] border border-[#0D9488]/20 rounded-sm transition-colors font-medium"
          >
            Embed
          </button>
        </div>
      )}

      {error && <p className="px-4 pb-3 text-[10px] text-[#EF4444]">{error}</p>}

      {/* Player */}
      {videoId && !collapsed && (
        <div className="p-4 pt-3 space-y-3">
          {/* react-youtube wraps in a div; make it full-width */}
          <div className="w-full aspect-video rounded-sm overflow-hidden [&>div]:w-full [&>div>iframe]:w-full [&>div>iframe]:h-full [&>div]:aspect-video">
            <YouTube videoId={videoId} opts={opts} />
          </div>
          <button
            onClick={handleClear}
            className="text-[10px] text-[#CBC3D7]/30 hover:text-[#EF4444] transition-colors"
          >
            Remove video
          </button>
        </div>
      )}

      {/* Collapsed state — just show the title */}
      {videoId && collapsed && (
        <div className="px-4 py-2.5 text-[10px] text-[#CBC3D7]/40">
          Video embedded — click ↑ to expand
        </div>
      )}
    </div>
  );
}
