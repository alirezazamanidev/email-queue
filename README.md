# 📧 Email Campaign System – NestJS + BullMQ

یک سیستم کمپین ایمیلی حرفه‌ای با استفاده از NestJS و BullMQ برای ارسال ایمیل‌های انبوه به صورت صف‌بندی شده، قابل زمان‌بندی، مقیاس‌پذیر و مقاوم در برابر خطا.

---

## 🚀 ویژگی‌ها

- ✅ معماری تمیز (Clean Architecture)
- ⏱️ پشتیبانی از delay در ارسال
- 🔁 تلاش مجدد خودکار (retry + exponential backoff)
- 🛠️ پیاده‌سازی با BullMQ
- 📡 اتصال آسان به nodemailer یا هر سرویس ایمیلی دیگر


---

## 🛠 نصب و اجرا

### 1. نصب وابستگی‌ها

```bash
npm install
npm run start:dev