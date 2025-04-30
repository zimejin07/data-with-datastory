# 🌍 Data with Datastory Dashboard

[Live GitHub Repo](https://github.com/zimejin07/data-with-datastory)

## 📜 Project Description

This is a simple, clean dashboard built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Apollo GraphQL Client**, and **D3.js** for data visualization.  
The dashboard displays country profiles and allows users to switch between different countries and supported measures (Life Expectancy, Population, Net Migration Rate).

---

## ✅ What was implemented

- [x] Full project setup using **Next.js 14** with App Router
- [x] GraphQL Apollo Client setup with queries to Datastory API
- [x] Fetch and display **countries** and **measures** dynamically
- [x] **D3.js line chart** for data visualization
- [x] Responsive and styled UI using **Tailwind CSS**
- [x] Error handling (graceful loading errors and empty states)
- [x] Basic **unit testing** using **Jest** and **Testing Library**
- [x] Dockerfile for easy deployment

---

## 🚫 What was not implemented (and why)

- Full **E2E (end-to-end) testing** with Cypress or Playwright
  > Reason: Given the 2-hour time limit, the focus was on core functionality and unit testing first.

- Advanced D3 interactions (e.g., zoom, tooltip)
  > Reason: Basic charting was prioritized to ensure solid core data visualization first.

- Internationalization (i18n) support
  > Reason: Single-language English version kept the solution simpler for this phase.

---

## ⏳ What would be done next with more time

- Implement full E2E testing with **Cypress** to simulate full user flows.
- Add **loading spinners** using TailwindCSS animation classes.
- Implement **responsive D3.js** graphs with dynamic resizing.
- Add **pagination** or **search/filter** functionality for countries.
- Enhance **graph interactions** with tooltips and hover states.
- Split GraphQL logic into reusable services/hooks for further scalability.
- Set up GitHub Actions CI pipeline to auto-run tests on PRs.

---

## ⚡ Decisions and Trade-offs

- **Client-Side Fetching**:  
  Apollo Client is used purely on the client side to simplify architecture. Server-side fetching could be added later if SEO was a priority.

- **Focus on Core Features**:  
  Prioritized clean structure, strong typing, and working functionality over extra visual polish.

- **Minimal Testing for Core Components**:  
  Chose to implement focused unit tests (`MeasureSelector`, `CountrySelector`) rather than trying to cover 100% immediately.

---

## 🐳 How to run with Docker

```bash
docker build -t data-with-datastory .
docker run -p 3000:3000 data-with-datastory
