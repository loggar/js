import "@js-joda/timezone";
import { Locale } from "@js-joda/locale_de";

// ...

// Formatting text with the DE locate: Okt. 1 2:52 PM
console.log(
  ldt3.format(
    DateTimeFormatter.ofPattern("MMM d h:m a").withLocale(Locale.GERMAN)
  )
);
