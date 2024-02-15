"use client";

import { locales, usePathname, useRouter } from "@/i18n";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
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
  );
};

export { LanguageSwitcher };
