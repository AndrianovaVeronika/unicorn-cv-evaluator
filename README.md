# 🦄 How much of a Unicorn are you?

> Evaluate your CV against any job description and get your **Unicorn Score** — with matched skills, missing skills, and personalized improvement suggestions!

---

## 📦 Project Structure

This is a **monorepo** powered by `pnpm workspaces`, containing two main parts:

unicorn-cv-evaluator/
│
├── frontend/ # Chrome Extension UI (TypeScript + Webpack)
├── backend/ # Express.js server with OpenAI integration
├── pnpm-workspace.yaml
└── README.md

---

## ✨ Features

- 📋 Analyze how well your resume fits a job posting
- 🧠 Get a Unicorn Score (0–100)
- ✅ See matched skills and what's missing
- 💡 Get AI-generated suggestions for improvement
- 🧩 Built as a Chrome Extension (Manifest V3)
- 🔐 Uses a secure backend proxy for OpenAI API

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AndrianovaVeronika/unicorn-cv-evaluator.git
cd unicorn-cv-evaluator
