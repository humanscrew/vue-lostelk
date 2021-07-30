/* eslint-disable */
// 节流函数
function debounce(fn: () => any, wait = 1000): any {
  let timeout: NodeJS.Timeout;
  return function (): any {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  };
}

export default debounce;
