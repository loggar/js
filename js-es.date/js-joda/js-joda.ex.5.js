// Add 10 minutes: 10:11:00.123456789
const lt2 = lt1.plusMinutes(10);
// Add a duration
const ldt3 = ldt1.plus(d1);
// Subtract one hour: 09:01:00.123456789
const lt3 = lt1.minus(1, ChronoUnit.HOURS);
// Substract a period
const zdt3 = zdt1.minusAmount(p1);
