type SmoothScrollOptions = {
  duration?: number;
  offset?: number;
};

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const animateScroll = (targetY: number, duration = 900) => {
  if (typeof window === "undefined") return;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = Math.min(1, (currentTime - startTime) / duration);
    const easedProgress = easeInOutCubic(elapsed);
    window.scrollTo(0, startY + distance * easedProgress);

    if (elapsed < 1) {
      requestAnimationFrame(step);
    }
  };

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    window.scrollTo({ top: targetY });
    return;
  }

  requestAnimationFrame(step);
};

const extractHash = (urlOrHash: string) => {
  const hashIndex = urlOrHash.indexOf("#");
  return hashIndex === -1 ? urlOrHash : urlOrHash.slice(hashIndex + 1);
};

export const smoothScrollToHash = (
  urlOrHash: string,
  options?: SmoothScrollOptions
) => {
  if (typeof window === "undefined") return false;

  const hash = extractHash(urlOrHash).trim();
  if (!hash) return false;

  const element = document.getElementById(hash);
  if (!element) return false;

  const offset = options?.offset ?? 0;
  const targetY =
    element.getBoundingClientRect().top + window.scrollY - offset;

  animateScroll(targetY, options?.duration);
  return true;
};
