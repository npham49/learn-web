import { type Context } from "elysia";

export function redirect(
  {
    set,
    headers,
  }: {
    headers: Record<string, string | null>;
    set: Context["set"];
  },
  href: string,
) {
  if (Boolean(headers["hx-request"]) === true) {
    set.headers["HX-Location"] = href;
  } else {
    set.redirect = href;
  }
}
