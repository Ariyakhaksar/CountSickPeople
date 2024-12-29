import binarySearch from "./binarySearch";

const OptimizeSickCount = (Cip: number[], D: number[]) => {
  const n = Cip.length;
  const m = D.length;

  Cip.sort((a, b) => a - b);
  let result: number[] = [];
  // برای هر روز
  for (let i = 0; i < m; i++) {
    // برای هر روز، تعداد افراد بیمار را با جستجوی دودویی پیدا می‌کنیم
    const dayTemperature = D[i];
    // پیدا کردن تعداد افرادی که دمای قابل تحمل‌شان کمتر از دمای هوا است
    const sickCount = binarySearch(Cip, dayTemperature);
    result.push(sickCount);
  }

  return result;
};
export default OptimizeSickCount
