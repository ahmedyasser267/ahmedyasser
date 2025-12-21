# 🚀 Ahmed Yasser Portfolio - موقع بورتفوليو احترافي

موقع بورتفوليو ثلاثي الأبعاد متطور ومحسّن بالكامل لمحركات البحث لـ **أحمد ياسر محمد** - مطور Flutter ومهندس برمجيات.

## ✨ المميزات

- 🎨 **تصميم ثلاثي الأبعاد**: مشهد 3D تفاعلي باستخدام Three.js مع نظام جزيئات ديناميكي
- 📱 **Responsive 100%**: يعمل بشكل مثالي على جميع الأجهزة (Mobile, Tablet, Desktop)
- 🌙 **Dark/Light Mode**: تبديل سلس بين الوضع الليلي والنهاري
- 🔍 **SEO محسّن**: محسّن بالكامل لمحركات البحث مع Schema Markup كامل
- ⚡ **أداء عالي**: تحميل سريع أقل من 2 ثانية
- 🎭 **Animations سلسة**: تأثيرات بصرية متقدمة مع GSAP
- ♿ **Accessible**: متوافق مع معايير WCAG 2.1 AA
- 📦 **PWA Ready**: جاهز للتثبيت كتطبيق على الموبايل

## 🛠️ التقنيات المستخدمة

- **HTML5** - بنية دلالية كاملة
- **CSS3** - Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+** - Vanilla JS بدون مكتبات خارجية
- **Three.js** - للرسوم ثلاثية الأبعاد
- **Schema.org** - Structured Data للـ SEO

## 📂 بنية المشروع

```
portfolio/
├── index.html              # الصفحة الرئيسية
├── css/
│   ├── style.css          # الأنماط الرئيسية
│   ├── animations.css     # التأثيرات والأنيميشن
│   └── responsive.css     # التصميم المتجاوب
├── js/
│   ├── main.js            # الوظائف الرئيسية
│   ├── three-scene.js     # مشهد Three.js
│   └── animations.js       # أنيميشن التمرير
├── assets/
│   ├── images/            # الصور
│   ├── icons/             # الأيقونات
│   └── models/            # نماذج 3D (اختياري)
├── sitemap.xml            # خريطة الموقع
├── robots.txt             # ملف robots
├── manifest.json          # PWA manifest
└── README.md              # هذا الملف
```

## 🚀 البدء السريع

### 1. استنساخ المشروع

```bash
git clone https://github.com/ahmedyasser/portfolio.git
cd portfolio
```

### 2. فتح المشروع

افتح `index.html` في المتصفح مباشرة، أو استخدم خادم محلي:

```bash
# باستخدام Python
python -m http.server 8000

# باستخدام Node.js (http-server)
npx http-server

# باستخدام PHP
php -S localhost:8000
```

### 3. الوصول للموقع

افتح المتصفح وانتقل إلى:
```
http://localhost:8000
```

## 📝 التخصيص

### تغيير المعلومات الشخصية

1. افتح `index.html`
2. ابحث عن الأقسام التالية وعدّل المعلومات:
   - Hero Section (السطر ~150)
   - About Section (السطر ~200)
   - Contact Section (السطر ~400)

### تغيير الألوان

افتح `css/style.css` وعدّل المتغيرات في `:root`:

```css
:root {
  --primary: #6366F1;      /* اللون الأساسي */
  --secondary: #EC4899;    /* اللون الثانوي */
  --accent: #14B8A6;      /* لون التمييز */
}
```

### إضافة مشاريع جديدة

في قسم Projects في `index.html`، أضف بطاقة مشروع جديدة:

```html
<article class="project-card">
  <div class="project-image">
    <!-- صورة المشروع -->
  </div>
  <div class="project-content">
    <h3 class="project-title">اسم المشروع</h3>
    <p class="project-description">وصف المشروع...</p>
    <!-- ... -->
  </div>
</article>
```

## 🔍 تحسين SEO

الموقع محسّن بالكامل لـ SEO ويتضمن:

- ✅ Meta tags كاملة (Title, Description, Keywords)
- ✅ Open Graph tags للسوشيال ميديا
- ✅ Schema.org JSON-LD markup
- ✅ Semantic HTML5 structure
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alt text للصور
- ✅ Structured data للمحتوى

### إضافة محتوى محسّن

1. **الكلمات المفتاحية**: استخدم الكلمات المفتاحية بشكل طبيعي في المحتوى
2. **العناوين**: استخدم H1, H2, H3 بشكل هرمي
3. **الروابط الداخلية**: اربط الأقسام ببعضها
4. **الصور**: أضف alt text وصفي لكل صورة

## ⚡ تحسين الأداء

### تحسين الصور

- استخدم WebP format مع fallback
- قم بضغط الصور قبل الرفع
- استخدم lazy loading للصور

### Minification

قبل النشر، قم بضغط الملفات:

```bash
# CSS
npx clean-css-cli -o css/style.min.css css/style.css

# JavaScript
npx terser js/main.js -o js/main.min.js
```

## 🌐 النشر

### GitHub Pages

1. ارفع المشروع إلى GitHub
2. اذهب إلى Settings > Pages
3. اختر Branch الرئيسي
4. الموقع سيكون متاحاً على `https://username.github.io/portfolio`

### Netlify

1. سجّل الدخول إلى [Netlify](https://netlify.com)
2. اسحب وأفلت مجلد المشروع
3. الموقع سيكون متاحاً فوراً

### Vercel

```bash
npm i -g vercel
vercel
```

## 📱 PWA Setup

الموقع جاهز كـ Progressive Web App. لإكمال الإعداد:

1. أضف الأيقونات في `assets/icons/` (أحجام مختلفة)
2. أنشئ `sw.js` (Service Worker) للـ caching
3. سجّل Service Worker في `js/main.js`

## 🐛 استكشاف الأخطاء

### Three.js لا يعمل

- تأكد من تحميل مكتبة Three.js من CDN
- تحقق من console للأخطاء
- تأكد من أن Canvas موجود في HTML

### الأنيميشن لا تعمل

- تأكد من تحميل ملفات CSS والـ JS
- تحقق من console للأخطاء
- تأكد من أن العناصر لها الكلاسات الصحيحة

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الحر.

## 👤 المؤلف

**أحمد ياسر محمد**
- 📧 Email: ahmedyasser100029@gmail.com
- 📱 Phone: +20 128 811 4906
- 🌐 Location: Alexandria, Egypt
- 💼 LinkedIn: [ahmedyasser](https://linkedin.com/in/ahmedyasser)
- 💻 GitHub: [ahmedyasser](https://github.com/ahmedyasser)

## 🙏 شكر وتقدير

- [Three.js](https://threejs.org/) - مكتبة الرسوم ثلاثية الأبعاد
- [Google Fonts](https://fonts.google.com/) - الخطوط

---

**صُنع بـ ❤️ بواسطة أحمد ياسر محمد**

