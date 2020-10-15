// Combines a LocalDate and a LocalTime object to create a new LocalDateTime
const ldt2 = ld1.atTime(lt1);
// Combines a LocalDateTime object and a time zone to create a ZonedDateTime object
const zdt2 = ldt1.atZone(ZoneId.of("+04:00"));
