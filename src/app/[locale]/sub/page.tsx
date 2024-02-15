import { unstable_setRequestLocale } from "next-intl/server";

export default function Sub({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <h1>Subpage</h1>;
}
