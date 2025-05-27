# 🦄 How much of a Unicorn are you?

> Evaluate your CV against any job description and get your **Unicorn Score** — with matched skills, missing skills, and personalized improvement suggestions!

---

## 📦 Project Structure

This is a **monorepo** powered by `pnpm workspaces`, containing two main parts:

unicorn-cv-evaluator/
│
├── frontend/ # Chrome Extension UI (TypeScript + Webpack)
├── backend/ # Express.js server with AI (mistral LLM) integration
├── pnpm-workspace.yaml
└── README.md

---

## ✨ Features

- 📋 Analyze job descriptions directly on the browser page – no need to switch tabs
- 💬 Extract only the essentials – skip the fluff, keep the value
- 🧠 Unicorn Score – see how well your resume matches the job
- ✅ Skill Matching – view what fits and what's missing
- 💡 Smart Suggestions – AI-powered tips to improve your resume
- 🧩 Chrome Extension (Manifest V3)
- 🔐 100% local AI – Your resume and job data never leave your device

## !!!
- ⚙️ Requires local setup of Mistral 7B via Ollama – GPU recommended for best performance

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AndrianovaVeronika/unicorn-cv-evaluator.git
cd unicorn-cv-evaluator
