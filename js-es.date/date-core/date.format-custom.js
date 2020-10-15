function formatDate(date, format) {
  return format
    .replace("mm", date.getMonth() + 1)
    .replace("yy", date.getFullYear())
    .replace("dd", date.getDate());
}

const today = new Date();

const formatted = formatDate(today, "yy/mm/dd");
console.log(formatted);
