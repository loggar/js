moment.parseZone("2013-01-01T00:00:00-13:00").utcOffset(); // -780 ("-13:00" in total minutes)
moment.parseZone("2013 01 01 05 -13:00", "YYYY MM DD HH ZZ").utcOffset(); // -780  ("-13:00" in total minutes)
moment.parseZone("2013-01-01-13:00", ["DD MM YYYY ZZ", "YYYY MM DD ZZ"]).utcOffset(); // -780  ("-13:00" in total minutes);

moment.parseZone("2013 01 01 -13:00", "YYYY MM DD ZZ", true).utcOffset(); // -780  ("-13:00" in total minutes)
moment.parseZone("2013-01-01-13:00", "YYYY MM DD ZZ", true).utcOffset(); // NaN (doesn't pass the strictness check)
moment.parseZone("2013 01 01 -13:00", "YYYY MM DD ZZ", "fr", true).utcOffset(); // -780 (with locale and strictness argument)
moment.parseZone("2013 01 01 -13:00", ["DD MM YYYY ZZ", "YYYY MM DD ZZ"], "fr", true).utcOffset(); // -780 (with locale and strictness argument alongside an array of formats)

var s = "2013-01-01T00:00:00-13:00";
moment(s).utcOffset(s);
