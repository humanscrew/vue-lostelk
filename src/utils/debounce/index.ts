// 节流函数
function debounce(fn: any, wait: any = '1000'): any {
    let timeout: any = null;
    return function () {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn, wait);
    }
}