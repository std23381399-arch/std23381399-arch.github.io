// 1. منع النقر الأيمن في كل الموقع
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. تعطيل اختصارات لوحة المفاتيح
document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Inspect
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; // Console
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; // Element Selector
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // View Source
};
