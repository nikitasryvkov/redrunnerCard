import { consentSections, siteData } from "../data/site";

export default function ConsentPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-card p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.32em] text-ember">Согласие</p>
        <h1 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
          Согласие на обработку персональных данных
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-white/65">
          Ниже собрана краткая и читаемая версия условий, размещенных на сайте RedRuner Design. Она описывает,
          какие данные могут обрабатываться и на каких основаниях это происходит.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {consentSections.map((section) => (
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
          <h2 className="text-xl font-display text-white sm:text-2xl">Оператор</h2>
          <p className="mt-4 text-sm leading-8 text-white/68">
            {siteData.legal.fullName}, ИНН {siteData.legal.inn}, ОГРНИП {siteData.legal.ogrnip}. Для обращений по
            вопросам персональных данных используется email {siteData.contacts.legalEmail}.
          </p>
        </article>
      </div>
    </main>
  );
}
