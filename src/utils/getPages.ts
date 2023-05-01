export default function getPages(current: number, last: number) {
  const length = last > 7 ? 7 : last;
  const pages = Array(length)
    .fill(0)
    .map((_, idx) => idx + 1);

  if (last > 7) {
    if (current < 5) {
      pages[5] = 0;
      pages[6] = last;
    } else if (current < last - 3) {
      pages[1] = 0;
      pages[2] = current - 1;
      pages[3] = current;
      pages[4] = current + 1;
      pages[5] = 0;
      pages[6] = last;
    } else {
      pages[1] = 0;
      pages[2] = last - 4;
      pages[3] = last - 3;
      pages[4] = last - 2;
      pages[5] = last - 1;
      pages[6] = last;
    }
  }

  return pages;
}
