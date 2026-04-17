import { privacyPolicySections, siteData } from "../data/site";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-card p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.32em] text-ember">Политика ПДн</p>
        <h1 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
          Политика обработки персональных данных
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-white/65">
          Документ определяет правила обработки персональных данных на сайте RedRuner Design и применяется к
          посетителям сайта, а также к лицам, которые обращаются к исполнителю по контактам, указанным на сайте.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {privacyPolicySections.map((section) => (
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
          <h2 className="text-xl font-display text-white sm:text-2xl">Оператор и контакты</h2>
          <div className="mt-4 space-y-3 text-sm leading-8 text-white/68">
            <p>
              {siteData.legal.fullName}, ИНН {siteData.legal.inn}, ОГРНИП {siteData.legal.ogrnip}.
            </p>
            <p>Юридический адрес: {siteData.legal.legalAddress}.</p>
            <p>
              Для обращений по вопросам обработки персональных данных: {siteData.contacts.legalEmail} и{" "}
              {siteData.contacts.phone}.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
