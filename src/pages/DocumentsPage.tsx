import { Link } from "react-router-dom";
import { siteData } from "../data/site";

export default function DocumentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-card p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.32em] text-ember">Документы</p>
        <h1 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
          Юридическая и платежная информация для работы с заказчиком.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-white/65">
          Здесь собраны страницы, которые удобно использовать для согласования условий сотрудничества, проверки
          контрагента и подготовки проекта к оплате.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {siteData.documentCards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="glass-card group p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-ember/75">Открыть страницу</div>
            <h2 className="mt-4 text-2xl font-display text-white transition group-hover:text-[#ffd8d4]">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">{card.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
