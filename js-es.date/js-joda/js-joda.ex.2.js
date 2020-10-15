// Returns a copy of the LocalDate with the value 2020/12/3
const ld2 = ld1.withDayOfMonth(3);
// Returns a copy of the Instant object with the specified seconds but without changing the nanoseconds part
const i2 = i1.withFieldValue(ChronoField.INSTANT_SECONDS, 923232434);
