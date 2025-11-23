'use client'; // Required for onClick state management (if we add it)

export interface Props {
  title?: string;
  subtitle?: string;
  /** @description If true, the banner will not be rendered */
  hide?: boolean;
}

export default function Banner({
  title = "Welcome!",
  subtitle = "This is a promotional banner that can be dismissed.",
  hide = false,
}: Props) {
  if (hide) {
    return null;
  }

  return (
    <div className="bg-primary text-primary-content p-4 text-center relative">
      <div className="container mx-auto">
        <span className="font-bold">{title}</span>
        <span className="ml-2">{subtitle}</span>
      </div>
      {/*
        A functional dismiss button would require state management (e.g., React.useState and cookies)
        which is beyond the scope of a purely presentational component for Builder.io.
        The visual element is included for layout purposes.
      */}
      <button
        aria-label="Close banner"
        className="btn btn-ghost btn-sm btn-circle absolute top-1/2 right-4 -translate-y-1/2"
      >
        ✕
      </button>
    </div>
  );
}
