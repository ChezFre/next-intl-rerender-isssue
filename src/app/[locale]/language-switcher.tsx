"use client";

import { Link, locales, usePathname, useRouter } from "@/i18n";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            <button
              onClick={() => {
                router.replace(pathname, { locale });
              }}
            >
              {locale}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            <Link href="/" locale={locale}>
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { LanguageSwitcher };
