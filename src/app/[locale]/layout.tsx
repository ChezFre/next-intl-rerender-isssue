import { Link, locales } from "@/i18n";
import { ClientComponent } from "./client-component";
import { LanguageSwitcher } from "./language-switcher";
import { unstable_setRequestLocale } from "next-intl/server";

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
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/sub">Subpage</Link>
        </nav>
        {children}

        <ul>
          <li>Update the count by clicking the button</li>
          <li>Click either the button or the link to change the language</li>
          <li>Notice that the count has reset to 0 again</li>
        </ul>

        <ClientComponent />
        <LanguageSwitcher />
      </body>
    </html>
  );
}
