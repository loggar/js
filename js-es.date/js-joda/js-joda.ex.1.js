// Creates a LocalDate object from a year, month, and dayOfMonth value
const ld1 = LocalDate.of(2020, Month.DECEMBER, 1);
// Creates a LocalTime object from an ISO 8601 string
const lt1 = LocalTime.parse("10:01:00.123456789");
// Creates a LocalDateTime object from the current datetime in UTC time
const ldt1 = LocalDateTime.now(ZoneOffset.UTC);
// Creates a ZonedDateTime ojbect from from a local date, time, and a time zone
const zdt1 = ZonedDateTime.of(ld1, lt1, ZoneId.of("Europe/Paris"));
// Creates an instant from the ZonedDateTime object
const i1 = Instant.from(zdt1);
// Creates a Period object from a text string such as PnYnMnD
const p1 = Period.parse("P1Y10M");
// Creates a Duration object from a number of standard hours (positive or negative)
const d1 = Duration.ofHours(-48);
