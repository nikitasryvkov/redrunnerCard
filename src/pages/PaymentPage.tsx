import { paymentSections, siteData } from "../data/site";

export default function PaymentPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-card p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.32em] text-ember">Оплата и возврат</p>
        <h1 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
          Как проходят расчеты по проекту
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-white/65">
          Ниже — компактная версия платежных условий, собранная на основе опубликованных страниц RedRuner Design.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {paymentSections.map((section) => (
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
          <h2 className="text-xl font-display text-white sm:text-2xl">Для связи по платежам</h2>
          <p className="mt-4 text-sm leading-8 text-white/68">
            По вопросам счетов и документов можно написать на {siteData.contacts.legalEmail} или связаться по
            телефону {siteData.contacts.phone}.
          </p>
        </article>
      </div>
    </main>
  );
}
