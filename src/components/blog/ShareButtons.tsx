export function ShareButtons() {
  const buttons = ["X", "LinkedIn", "Copy link", "Bookmark"];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-text-tertiary mr-2">Share</span>
      {buttons.map((label) => (
        <button
          key={label}
          type="button"
          className="inline-flex h-10 items-center rounded-lg border border-border-default px-4 text-sm text-text-secondary hover:bg-bg-tertiary hover:text-text-primary transition-colors"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
