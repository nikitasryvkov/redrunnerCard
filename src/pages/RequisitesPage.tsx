import { type ReactNode } from "react";
import { siteData } from "../data/site";

export default function RequisitesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-card p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.32em] text-ember">Реквизиты</p>
        <h1 className="mt-4 text-3xl font-display leading-tight text-white sm:text-5xl">
          Юридические и банковские данные
        </h1>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Panel title="Исполнитель">
          <Info label="Полное наименование" value={siteData.legal.fullName} />
          <Info label="ИНН" value={siteData.legal.inn} />
          <Info label="ОГРНИП" value={siteData.legal.ogrnip} />
        </Panel>

        <Panel title="Адреса">
          <Info label="Юридический адрес" value={siteData.legal.legalAddress} />
          <Info label="Фактический адрес" value={siteData.legal.businessAddress} />
          <Info label="Почтовый адрес" value={siteData.legal.postalAddress} />
        </Panel>

        <Panel title="Контакты">
          <Info label="Телефон" value={siteData.contacts.phone} />
          <Info label="Email" value={siteData.contacts.email} />
          <Info label="Telegram" value={siteData.contacts.telegram} />
        </Panel>

        <Panel title="Банк">
          <Info label="Банк" value={siteData.legal.bankName} />
          <Info label="БИК" value={siteData.legal.bankBik} />
          <Info label="Номер счета" value={siteData.legal.bankAccount} />
          <Info label="Корреспондентский счет" value={siteData.legal.bankCorr} />
          <Info label="Валюта" value={siteData.legal.bankCurrency} />
        </Panel>
      </div>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="glass-card p-6">
      <h2 className="text-2xl font-display text-white">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[#131722] px-4 py-4">
      <div className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</div>
      <div className="mt-2 break-words text-sm leading-7 text-white/78">{value}</div>
    </div>
  );
}
