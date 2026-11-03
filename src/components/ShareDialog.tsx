import { appConfig } from "../config";
import { PxlKitIcon } from "@pxlkit/core";
import { Check, Copy } from "@pxlkit/ui";
import {
  PixelButton,
  PixelIconButton,
  PixelInput,
  PixelModal,
  PixelTooltip,
  useToast,
} from "@pxlkit/ui-kit";
import { useEffect, useRef, useState } from "react";

type ShareDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function ShareDialog({ open, onClose }: ShareDialogProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);
  const [url] = useState(() => window.location.href);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(
        () => setCopied(false),
        appConfig.sharing.feedbackDurationMs,
      );
      toast.info("Link copied");
    } catch {
      toast.error("Couldn't copy the link");
    }
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(appConfig.sharing.text);
  const xUrl = `https://x.com/intent/post?url=${encodedUrl}&text=${encodedText}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <PixelModal
      open={open}
      onClose={onClose}
      title="Share"
      description="Send this page to someone, or post it on your favorite network."
      footer={
        <div className="flex flex-wrap justify-end gap-2">
          <PixelButton asChild variant="outline" tone="neutral" size="sm">
            <a href={xUrl} target="_blank" rel="noreferrer">
              Share on X
            </a>
          </PixelButton>
          <PixelButton asChild variant="outline" tone="neutral" size="sm">
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              Share on Facebook
            </a>
          </PixelButton>
        </div>
      }
    >
      <div className="flex items-center gap-2">
        <div className="min-w-0 flex-1">
          <PixelInput
            readOnly
            aria-label="Page link"
            value={url}
            onFocus={(event) => event.currentTarget.select()}
          />
        </div>

        <PixelTooltip content={copied ? "Copied" : "Copy link"} position="top">
          <PixelIconButton
            label={copied ? "Link copied" : "Copy link"}
            tone={copied ? "green" : "neutral"}
            icon={
              <PxlKitIcon icon={copied ? Check : Copy} size={14} appearance="solid" decorative />
            }
            onClick={() => void copyLink()}
          />
        </PixelTooltip>
      </div>
    </PixelModal>
  );
}
