import { Link } from "react-router-dom";
import { siteData } from "../data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-ember">RedRuner Design</p>
          <h2 className="mt-4 text-2xl font-display text-white">{siteData.brand.founder}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">{siteData.brand.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href={siteData.contacts.phoneHref} className="focus-ring rounded-full border border-white/10 px-4 py-2 font-semibold text-white transition hover:border-white/25">
              {siteData.contacts.phone}
            </a>
            <a href={siteData.contacts.emailHref} className="focus-ring rounded-full border border-white/10 px-4 py-2 font-semibold text-white transition hover:border-white/25">
              {siteData.contacts.email}
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-ember/80">Навигация</p>
            <div className="mt-4 space-y-3 text-sm">
              <Link className="block font-semibold text-white transition hover:text-ember" to="/documents">
                Документы
              </Link>
              <Link className="block font-semibold text-white transition hover:text-ember" to="/offer">
                Публичная оферта
              </Link>
              <Link className="block font-semibold text-white transition hover:text-ember" to="/consent">
                Согласие на обработку данных
              </Link>
              <Link className="block font-semibold text-white transition hover:text-ember" to="/requisites">
                Реквизиты
              </Link>
              <Link className="block font-semibold text-white transition hover:text-ember" to="/payment">
                Оплата и возврат
              </Link>
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-ember/80">Контакты</p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <div>{siteData.contacts.location}</div>
              <div>{siteData.contacts.schedule}</div>
              <a className="block font-semibold text-white transition hover:text-ember" href={siteData.contacts.telegramHref} target="_blank" rel="noreferrer">
                {siteData.contacts.telegram}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/45">
        {siteData.brand.signature}
      </div>
    </footer>
  );
}
