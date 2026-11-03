import { appConfig } from "../config";
import { useToast } from "@pxlkit/ui-kit";
import { useEffect, useRef, useState } from "react";
import type { IconEntry } from "./catalog";

export function useCopyIcon() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copy(icon: IconEntry) {
    try {
      const response = await fetch(icon.url);
      if (!response.ok) throw new Error(`Failed to load ${icon.url}`);
      const svg = await response.text();
      await navigator.clipboard.writeText(svg);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(
        () => setCopied(false),
        appConfig.sharing.feedbackDurationMs,
      );
      toast.info(`${icon.name} copied`);
    } catch {
      toast.error(`Couldn't copy ${icon.name}`);
    }
  }

  return { copied, copy };
}
