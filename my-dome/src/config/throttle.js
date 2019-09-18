export default function throttle(handleName, handle, delay, argumentsVal) {
    if (!window.throttleFn) {
        window.throttleFn = {};
    }
    if (!window.throttleFn[handleName]) {
        window.throttleFn[handleName] = {};
    }
    var prev = 0;
    if (!window.throttleFn[handleName].fn) {
        window.throttleFn[handleName].fn = function () {
            var context = this;
            var args = argumentsVal || arguments;
            var now = Date.now();
            if (now - prev >= delay) {
                handle.apply(context, args);
                prev = Date.now();
            }
        };
        return window.throttleFn[handleName].fn;
    } else {
        return window.throttleFn[handleName].fn;
    }
}