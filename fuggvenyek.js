export function dispatchAddEvent(eventName, detailValue) {
    const event = new CustomEvent(eventName, { 
        detail: { value: detailValue } 
    });
    window.dispatchEvent(event);
    return event;
}

export function dispatchRemoveEvent(eventName, detailIndex) {
    const event = new CustomEvent(eventName, { 
        detail: { index: detailIndex } 
    });
    window.dispatchEvent(event);
    return event;
}

export function markAsReady(textElem) {
    textElem.style.textDecoration = 'line-through';
}

export function attachRemoveListener(list, renderCallback) {
    const handler = (e) => {
        list.splice(e.detail.index, 1);
        renderCallback();
    };
    window.addEventListener('remove', handler);
    return handler;
}

export function attachAddListener(list, renderCallback) {
    const handler = (e) => {
        list.push(e.detail.value);
        renderCallback();
    };
    window.addEventListener('add', handler);
    return handler;
}