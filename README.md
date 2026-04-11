#  City Alert System

A smart web application that helps users stay updated with city developments like roads, parks, bridges, etc.

Users can register, choose their city and keyword, and receive updates via email automatically.

---

#  Features

- 🔐 Authentication using NextAuth
- 🏙️ Select city and keyword
- 📡 Fetch updates from government websites
- 📧 Email notifications using Nodemailer
- ⚡ Modern SaaS UI (Next.js + Tailwind CSS)
- 🧠 Scheduler-ready system (for automation)

---

# Tech Stack

- Frontend + Backend: **Next.js (App Router)**
- Database: **MongoDB Atlas**
- Authentication: **NextAuth**
- Styling: **Tailwind CSS**
- Email Service: **Nodemailer**

---

# Project Structure
city-alert/
│── app/
│ ├── login/
│ ├── register/
│ ├── dashboard/
│ ├── api/
│ ├── auth/
│ ├── user/
│ ├── subscribe/
│
│── models/
│ ├── User.ts
│ ├── Subscription.ts
│
│── lib/
│ ├── db.ts
│ ├── mailer.ts
│ ├── scraper.ts
│
│── data/
│ ├── cities.ts