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
// تحديث الأيقونة (Favicon) لجميع الصفحات التي تستخدم هذا الملف
(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'L5.svg'; // تأكد أن اسم ملفك هو L5.svg ومرفوع في المجلد الرئيسي
    document.getElementsByTagName('head')[0].appendChild(link);

    // تحديث أيقونة أجهزة أبل (iPhone) أيضاً
    let appleLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = 'L5.svg';
    document.getElementsByTagName('head')[0].appendChild(appleLink);
})();
