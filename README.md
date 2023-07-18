# Javascript

## Lesson 06

### Manipulate DOM Elements. دستکاری المانهای داخل صفحه

با جاواسکریپت میتونیم استایل یک المان رو داخل صفحه تغییر بدیم


```js
element.style.backgroundColor = "#eee";
```

همچنین میتوانیم با جی اس کلاسهای یک المان رو کم یا زیاد کنیم.

```js
element.classList.add("folan-class");

element.classList.remove("folan-class");
```

اگر بخواهیم یک کلاس رو در صورتیکه موجود است حذف کنیم و در صورتیکه موجود نیست اضافه کنیم.

```js
element.classList.toggle("dark");
```

<p dir="rtl"  >
در مثال بالا اگر <code>element</code> کلاس <code>dark</code> داشته باشد آنرا حذف میکند و اگر نداشته باشد آنرا اضافه میکند.
</p>

