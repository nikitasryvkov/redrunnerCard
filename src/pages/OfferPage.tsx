import { offerSections, siteData } from "../data/site";

export default function OfferPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Intro
        eyebrow="Публичная оферта"
        title="Общие условия оказания услуг"
        copy="Адаптированная редакция на основе информации с сайта RedRuner Design: услуги, порядок работы, расчеты и базовые условия взаимодействия."
      />

      <div className="mt-8 space-y-5">
        {offerSections.map((section) => (
          <article key={section.title} className="glass-card p-5 sm:p-6">
            <h2 className="text-xl font-display text-white sm:text-2xl">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-8 text-white/68">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}

        <article className="glass-card p-5 sm:p-6">
          <h2 className="text-xl font-display text-white sm:text-2xl">Реквизиты исполнителя</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Info label="Исполнитель" value={siteData.legal.fullName} />
            <Info label="ИНН" value={siteData.legal.inn} />
            <Info label="ОГРНИП" value={siteData.legal.ogrnip} />
            <Info label="Email" value={siteData.contacts.legalEmail} />
            <Info label="Телефон" value={siteData.contacts.phone} />
            <Info label="Банк" value={siteData.legal.bankName} />
          </div>
        </article>
      </div>
    </main>
  );
}

function Intro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="glass-card p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.32em] text-ember">{eyebrow}</p>
      <h1 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-white/65">{copy}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#131722] px-4 py-4">
      <div className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</div>
      <div className="mt-2 break-words text-sm leading-7 text-white/78">{value}</div>
    </div>
  );
}
