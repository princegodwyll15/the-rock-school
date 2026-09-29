export function MapPlaceholder() {
  return (
    <div className="flex h-60 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-linear-to-br from-surface to-surface-alt">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C9.24 2 7 4.24 7 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
            stroke="var(--color-primary)"
            strokeWidth="1.6"
          />
        </svg>
      </div>
      <div className="text-center font-body text-[0.9rem] text-text-muted">
        The Rock School
        <br />
        <span className="text-[0.8rem]">Accra, Ghana</span>
      </div>
      <a
        href="https://maps.app.goo.gl/mEYjKnAuyJadPHWq7?g_st=ac"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border-[1.5px] border-primary px-4 py-1.75 font-body text-[0.8125rem] font-semibold text-primary no-underline transition-colors hover:bg-primary hover:text-white"
      >
        Get Directions →
      </a>
    </div>
  );
}
