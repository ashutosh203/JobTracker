### Page 1: Dashboard

Is page par:

* Total Jobs
* Applied Count
* Interview Count
* Rejected Count
* Selected Count
* Job List
* Edit Button
* Delete Button

Sab kuch yahin dikhega.

```text
Dashboard
│
├── Status Cards
├── Search Bar (optional)
├── Job List
├── Edit Button
└── Delete Button
```

---

### Page 2: Add / Edit Job

Ek hi form ko Add aur Edit dono ke liye use karo.

```text
Company Name
Role
Status

[ Save ]
```

Jab Add button click hoga to blank form khulega.

Jab Edit button click hoga to wahi form data ke saath open hoga.

---

### Interview me tum bol sakte ho:

> "I kept the application simple with two pages. The first page is a Dashboard that displays all job applications and statistics. The second page is a reusable Add/Edit form where users can create new applications or update existing ones."

Ye professional bhi lagega aur unnecessary pages bhi nahi banenge.

### Database Structure

```js
{
  company: "TCS",
  role: "Frontend Developer",
  status: "Applied",
  appliedDate: "2026-06-02"
}
```

### Future Features (Baad me add kar sakte ho)

* Login / Signup
* Search Jobs
* Filter by Status
* Dark Mode
* Pagination

Abhi pehle **2-page CRUD application** complete karo. Ye React + Node + Express + MongoDB seekhne aur portfolio me dikhane ke liye kaafi strong project hai. 💯


Dashboard
Post Job
Applicants
Profile
Logout
