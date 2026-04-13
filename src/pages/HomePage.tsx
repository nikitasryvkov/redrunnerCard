import { Link } from "react-router-dom";
import { siteData } from "../data/site";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.32em] text-ember">{siteData.brand.role}</p>
            <h1 className="mt-6 max-w-5xl text-4xl font-display leading-[0.94] text-white sm:text-6xl lg:text-7xl">
              Визуальная система бренда, которая выглядит смело и считывается с первого экрана.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              {siteData.brand.intro} Проекты получают не просто красивую оболочку, а связный визуальный язык:
              от логики лендинга и интерфейсов до motion, контента и упаковки презентации.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteData.contacts.telegramHref}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#ff7167]"
              >
                Обсудить проект
              </a>
              <Link
                to="/documents"
                className="focus-ring inline-flex justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Открыть документы
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Metric value={siteData.pricingNotes.prepayment} label="формат оплаты" />
              <Metric value="3 правки" label="без доплаты" />
              <Metric value="Москва" label="база проекта" />
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full bg-ember/20 blur-3xl sm:block" />
            <div className="absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-cherry/20 blur-3xl" />

            <div className="glass-card relative overflow-hidden p-6 sm:p-7">
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-white/60">
                Dark editorial
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#131722] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-ember/80">Фокус</p>
                <h2 className="mt-3 text-2xl font-display leading-tight text-white">
                  Брендинг, веб и motion для запуска, обновления и усиления digital-продукта.
                </h2>
              </div>

              <div className="mt-5 grid gap-4">
                <FeatureCard
                  title="Что получает клиент"
                  copy="Концепцию, визуальную систему, страницы сайта, интерфейсные решения, презентационные материалы и понятную логику дальнейших доработок."
                />
                <FeatureCard
                  title="Как строится работа"
                  copy="Через бриф, согласование направления, рабочие макеты, правки и выпуск финальных материалов в удобном для передачи формате."
                />
                <FeatureCard
                  title="Где особенно полезно"
                  copy="При запуске бренда, обновлении имиджа, упаковке продукта, проектировании сайта и создании материалов для коммуникации с клиентом."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-ember">Услуги</p>
            <h2 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
              Набор услуг под бренд, сайт и визуальную подачу продукта.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/65">
            RedRuner работает на стыке брендинга, интерфейсов, контента и motion. Заказчик получает не разрозненные
            картинки, а визуальную систему, которую можно использовать в продажах и коммуникации.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {siteData.services.map((service) => (
            <article key={service.title} className="glass-card p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-ember/80">{service.title}</p>
              <p className="mt-4 text-sm leading-7 text-white/65">{service.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glass-card overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-ember">Стоимость услуг</p>
              <h2 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
                Стартовые ориентиры по задачам и формату оплаты.
              </h2>
              <div className="mt-6 space-y-3 text-sm leading-7 text-white/65">
                <p>{siteData.pricingNotes.prepayment}</p>
                <p>{siteData.pricingNotes.custom}</p>
                <p>{siteData.pricingNotes.revisions}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {siteData.rates.map((rate) => (
                <div key={rate.title} className="rounded-[24px] border border-white/10 bg-[#131722] p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/45">{rate.title}</div>
                  <div className="mt-4 text-2xl font-display text-white">{rate.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-ember">Контакт</p>
            <h2 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
              Если нужен дизайн, который не теряется на фоне типовых решений.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/65">
              Отправьте короткое описание задачи в Telegram или на email. В ответ можно обсудить формат работы,
              сроки, стартовую стоимость и состав первого этапа.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <div className="grid gap-4 text-sm">
              <ContactRow label="Телефон" value={siteData.contacts.phone} href={siteData.contacts.phoneHref} />
              <ContactRow label="Email" value={siteData.contacts.email} href={siteData.contacts.emailHref} />
              <ContactRow label="Telegram" value={siteData.contacts.telegram} href={siteData.contacts.telegramHref} />
              <ContactRow label="Локация" value={siteData.contacts.location} />
              <ContactRow label="График" value={siteData.contacts.schedule} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card p-4">
      <div className="text-xl font-display text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/45">{label}</div>
    </div>
  );
}

function FeatureCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <div className="text-xs uppercase tracking-[0.24em] text-ember/75">{title}</div>
      <p className="mt-3 text-sm leading-7 text-white/68">{copy}</p>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = href ? (
    <a href={href} className="focus-ring block font-semibold text-white transition hover:text-ember" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {value}
    </a>
  ) : (
    <span className="block font-semibold text-white">{value}</span>
  );

  return (
    <div className="rounded-[24px] border border-white/10 bg-[#131722] px-4 py-4">
      <div className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</div>
      <div className="mt-2 break-words text-sm leading-7 text-white/75">{content}</div>
    </div>
  );
}
