import { Link, locales } from "@/i18n";
import { ClientComponent } from "./client-component";
import { LanguageSwitcher } from "./language-switcher";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/sub">Subpage</Link>
        </nav>
        {children}
        <ClientComponent />
        <LanguageSwitcher />
      </body>
    </html>
  );
}
