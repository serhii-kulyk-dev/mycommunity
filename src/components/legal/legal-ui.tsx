import Link from "next/link";
import type { ReactNode } from "react";

/* Presentational primitives for the legal pages (/privacy, /terms).
   Server components — static content, no client interactivity.
   Typography mirrors the landing design system (globals.css tokens). */

const PROSE = 820;

/** Placeholder-aware value: strings in [brackets] render as a highlighted chip. */
export function V({ children }: { children: string }) {
  const isPlaceholder = typeof children === "string" && children.trim().startsWith("[");
  if (!isPlaceholder) return <>{children}</>;
  return (
    <span
      title="Потребує заповнення перед публікацією"
      style={{
        background: "#fff4ed",
        color: "#c2410c",
        borderRadius: 4,
        padding: "0 6px",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

export function A({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls = "text-[#29abe2] hover:text-[#1a96cc] hover:underline transition-colors";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Outer article wrapper: page title, "last updated", optional intro, then sections. */
export function LegalArticle({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="w-full flex flex-col items-center px-4 md:px-6 pt-10 md:pt-14 lg:pt-[64px] pb-16 md:pb-24">
      <div className="w-full" style={{ maxWidth: PROSE }}>
        <h1
          className="text-[30px] md:text-[40px] font-semibold text-[#141414]"
          style={{ letterSpacing: "-0.01em", lineHeight: 1.15 }}
        >
          {title}
        </h1>
        <p className="text-[14px] md:text-[15px] text-[#9ca3af]" style={{ marginTop: 14 }}>
          Редакція від {updated}
        </p>
        {intro ? <div style={{ marginTop: 28 }}>{intro}</div> : null}
        <div style={{ marginTop: 8 }}>{children}</div>
      </div>
    </article>
  );
}

export function Section({
  n,
  title,
  id,
  children,
}: {
  n: number;
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} style={{ marginTop: 40, scrollMarginTop: 96 }}>
      <h2
        className="text-[19px] md:text-[22px] font-semibold text-[#141414]"
        style={{ letterSpacing: "-0.01em", lineHeight: 1.3 }}
      >
        {n}. {title}
      </h2>
      <div className="flex flex-col gap-3" style={{ marginTop: 14 }}>
        {children}
      </div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[15px] md:text-[16px] text-[#4b5563]" style={{ lineHeight: 1.7 }}>
      {children}
    </p>
  );
}

/** Larger lead paragraph for the page intro. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-[16px] md:text-[18px] text-[#4b5563]" style={{ lineHeight: 1.7 }}>
      {children}
    </p>
  );
}

export function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul
      className="text-[15px] md:text-[16px] text-[#4b5563]"
      style={{ listStyle: "disc", paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8, lineHeight: 1.65 }}
    >
      {items.map((it, i) => (
        <li key={i} style={{ paddingLeft: 4 }}>
          {it}
        </li>
      ))}
    </ul>
  );
}

/** Soft highlighted callout for key concepts (e.g. controller/processor split). */
export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div
      style={{
        background: "#f7fbfe",
        border: "1px solid #d8eefb",
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {title ? (
        <p className="text-[15px] md:text-[16px] font-semibold text-[#141414]">{title}</p>
      ) : null}
      {children}
    </div>
  );
}

export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div style={{ overflowX: "auto", marginTop: 4 }}>
      <table
        className="text-[13px] md:text-[14px] text-[#4b5563]"
        style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}
      >
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  fontWeight: 600,
                  color: "#141414",
                  background: "#f9fafb",
                  border: "1px solid #e5e6ea",
                  padding: "10px 12px",
                  verticalAlign: "top",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  style={{
                    border: "1px solid #e5e6ea",
                    padding: "10px 12px",
                    verticalAlign: "top",
                    lineHeight: 1.55,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ContactBlock({ rows }: { rows: { label: string; value: ReactNode }[] }) {
  return (
    <div
      style={{
        border: "1px solid #e5e6ea",
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {rows.map((r, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:gap-3">
          <span className="text-[14px] md:text-[15px] font-semibold text-[#141414]" style={{ minWidth: 200 }}>
            {r.label}
          </span>
          <span className="text-[14px] md:text-[15px] text-[#4b5563]">{r.value}</span>
        </div>
      ))}
    </div>
  );
}
