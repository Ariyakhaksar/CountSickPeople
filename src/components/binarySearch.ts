function binarySearch(arr: number[], target: number): number {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low; // تعداد افرادی که دمای قابل تحمل‌شان کمتر از target هستند
}
export default binarySearch