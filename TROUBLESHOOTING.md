# 🔧 استكشاف الأخطاء - موقع بورتفوليو أحمد ياسر

## المشكلة: الصفحة بيضاء ولا يوجد شيء ظاهر

### الحلول السريعة:

#### 1. تحقق من الملفات
افتح `test.html` في المتصفح للتحقق من وجود جميع الملفات.

#### 2. افتح Developer Tools
- اضغط `F12` أو `Ctrl+Shift+I`
- اذهب إلى **Console** tab
- ابحث عن أي أخطاء (خطوط حمراء)

#### 3. تحقق من Network
- في Developer Tools، اذهب إلى **Network** tab
- أعد تحميل الصفحة (`F5`)
- ابحث عن ملفات بـ status code أحمر (404, 500, etc.)

### الحلول الشائعة:

#### ✅ الحل 1: تحقق من مسارات الملفات
تأكد من أن الملفات موجودة في المسارات الصحيحة:
```
portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
└── js/
    ├── main.js
    ├── animations.js
    └── three-scene.js
```

#### ✅ الحل 2: افتح الملف مباشرة
- افتح `index.html` مباشرة في المتصفح (double-click)
- أو استخدم خادم محلي:
  ```bash
  python -m http.server 8000
  ```
  ثم افتح: `http://localhost:8000`

#### ✅ الحل 3: تحقق من اتصال الإنترنت
Three.js يتم تحميله من CDN، تأكد من اتصال الإنترنت.

#### ✅ الحل 4: امسح Cache
- اضغط `Ctrl+Shift+Delete`
- امسح Cache و Cookies
- أعد تحميل الصفحة (`Ctrl+F5`)

#### ✅ الحل 5: تحقق من Console Errors
افتح Console (`F12`) وابحث عن:
- `Three.js not loaded` - مشكلة في تحميل Three.js
- `Cannot read property` - خطأ في JavaScript
- `404` - ملف مفقود

### إذا استمرت المشكلة:

1. **افتح `test.html`** للتحقق من الملفات
2. **افتح Console** (`F12`) وانسخ الأخطاء
3. **تحقق من Network tab** لمعرفة الملفات المفقودة
4. **أرسل لقطة شاشة** من Console و Network tabs

### اختبار سريع:

افتح `index.html` واضغط `F12`، ثم في Console اكتب:
```javascript
// تحقق من تحميل CSS
console.log(document.styleSheets.length);

// تحقق من تحميل Three.js
console.log(typeof THREE);

// تحقق من وجود العناصر
console.log(document.getElementById('hero'));
console.log(document.querySelector('.hero-content'));
```

إذا كانت النتائج:
- `document.styleSheets.length` = 0 → CSS لم يتم تحميله
- `typeof THREE` = "undefined" → Three.js لم يتم تحميله
- العناصر = `null` → HTML لم يتم تحميله بشكل صحيح

---

**ملاحظة**: إذا كنت تفتح الملف مباشرة من File System (file://)، قد تواجه مشاكل CORS. استخدم خادم محلي بدلاً من ذلك.

