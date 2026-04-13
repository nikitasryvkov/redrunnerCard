import { Link, useLocation } from "react-router-dom";

const navItems = [
  { href: "/#services", label: "Услуги" },
  { href: "/#pricing", label: "Стоимость" },
  { href: "/documents", label: "Документы" },
  { href: "/#contact", label: "Контакты" },
];

export default function SiteHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm text-white">
            RR
          </div>
          <div className="min-w-0">
            <div className="truncate font-display text-base text-white sm:text-lg">RedRuner Design</div>
            <div className="hidden text-xs uppercase tracking-[0.28em] text-white/45 sm:block">Brand • Web • Motion</div>
          </div>
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === location.pathname || (location.pathname === "/" && item.href !== "/documents" && location.hash && item.href.endsWith(location.hash));

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition ${active ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="https://t.me/thefuckerguy"
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex rounded-full bg-ember px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-[#ff7167]"
        >
          Написать в Telegram
        </a>
      </div>

      <div className="border-t border-white/10 md:hidden">
        <nav aria-label="Мобильная навигация" className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {navItems.map((item) => {
            const active =
              item.href === location.pathname || (location.pathname === "/" && item.href !== "/documents" && location.hash && item.href.endsWith(location.hash));

            return (
              <a
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  active
                    ? "border-white/25 bg-white/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
