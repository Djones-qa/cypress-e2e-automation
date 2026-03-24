# cypress-e2e-automation

End-to-end test automation suite built with **Cypress** and **TypeScript**, targeting a live web application with a full CI pipeline via GitHub Actions.

![CI](https://github.com/Djones-qa/cypress-e2e-automation/actions/workflows/cypress.yml/badge.svg)
![Tests](https://img.shields.io/badge/tests-10%2F10%20passing-brightgreen)
![Language](https://img.shields.io/badge/language-TypeScript-blue)
![Framework](https://img.shields.io/badge/framework-Cypress-17202C)

---

## Overview

This project demonstrates a production-ready Cypress E2E automation framework covering login flows, UI interactions, and regression scenarios. It is configured for reliability with retry logic, increased timeouts, and CI stability optimizations.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Cypress | Latest |
| TypeScript | Latest |
| GitHub Actions | CI/CD |
| Node.js | 18+ |

---

## Project Structure
```
cypress-e2e-automation/
├── .github/
│   └── workflows/         # GitHub Actions CI configuration
├── cypress/
│   ├── e2e/               # Test spec files
│   ├── fixtures/          # Test data
│   └── support/           # Custom commands and configuration
├── cypress.config.ts      # Cypress configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation
```bash
git clone https://github.com/Djones-qa/cypress-e2e-automation.git
cd cypress-e2e-automation
npm install
```

### Running Tests

**Open Cypress Test Runner (interactive mode):**
```bash
npx cypress open
```

**Run all tests headlessly:**
```bash
npx cypress run
```

**Run a specific spec:**
```bash
npx cypress run --spec "cypress/e2e/your-spec.cy.ts"
```

---

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions. The pipeline:

- Installs dependencies
- Runs the full test suite headlessly
- Reports pass/fail status on the commit

View the workflow in [.github/workflows/](./.github/workflows/).

---

## Key Features

- **TypeScript** — fully typed test code for better maintainability and IDE support
- **Retry logic** — configured retries on CI to handle transient flakiness
- **Stable test target** — suite runs against practicetestautomation.com to avoid third-party rate limiting
- **GitHub Actions integration** — automated runs on every push
- **10/10 tests passing** — full suite green

---

## Author

**Darrius Jones** — QA Automation Engineer
[GitHub](https://github.com/Djones-qa) · [LinkedIn](https://linkedin.com/in/darrius-jones-28226b350)
