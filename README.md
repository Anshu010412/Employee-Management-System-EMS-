# Employee Management System (EMS)

A lightweight React + Vite single-page application for managing employees and tasks. This repository contains a minimal Employee Management System used for learning and demonstration purposes: authentication, dashboards for different roles, and simple task workflows.

**Repository Snapshot**
- **Tech:** React, Vite, JavaScript (JSX)
- **Bundler:** Vite
- **Purpose:** Demo Employee / Task management UI with role-based dashboards and task lists

## Features
- Role-based dashboards: Admin and Employee
- Authentication scaffolding (login UI + context)
- Task management views: New, Accepted, Completed, Failed
- Task creation and listing components
- Local storage helper for small client-side persistence

## Project Structure

Top-level files
- [index.html](index.html) — app entry HTML
- [package.json](package.json) — scripts and dependencies
- [vite.config.js](vite.config.js) — Vite configuration

Source (`src`) overview
- [src/main.jsx](src/main.jsx) — application bootstrap (ReactDOM render, router/provider mounting)
- [src/App.jsx](src/App.jsx) — root app component and routes
- [src/index.css](src/index.css) — global CSS
- [src/App.css](src/App.css) — app-specific styles

Assets and static files
- [public](public/) — static assets served by Vite
- [src/assets](src/assets/) — images and static assets used by the app

Context and state
- [src/Context/AuthProvider.jsx](src/Context/AuthProvider.jsx) — authentication context and provider. Manages current user state and exposes login/logout helpers.

Authentication UI
- [src/components/Auth/Login.jsx](src/components/Auth/Login.jsx) — login form and authentication UI.

Dashboards
- [src/components/Dashboard/AdminDashboard.jsx](src/components/Dashboard/AdminDashboard.jsx) — admin landing/dashboard UI
- [src/components/Dashboard/EmployeeDashboard.jsx](src/components/Dashboard/EmployeeDashboard.jsx) — employee landing/dashboard UI

Task-related components
- [src/components/TaskList/TaskList.jsx](src/components/TaskList/TaskList.jsx) — main task list container and navigation
- [src/components/TaskList/NewTask.jsx](src/components/TaskList/NewTask.jsx) — UI for new/incoming tasks
- [src/components/TaskList/AcceptTask.jsx](src/components/TaskList/AcceptTask.jsx) — UI for accepted tasks
- [src/components/TaskList/CompleteTask.jsx](src/components/TaskList/CompleteTask.jsx) — UI for completed tasks
- [src/components/TaskList/FailedTask.jsx](src/components/TaskList/FailedTask.jsx) — UI for failed tasks

Other UI pieces
- [src/components/other/CreateTask.jsx](src/components/other/CreateTask.jsx) — form to create a new task
- [src/components/other/TaskListNumber.jsx](src/components/other/TaskListNumber.jsx) — small component showing task counts
- [src/components/other/Header.jsx](src/components/other/Header.jsx) — top header/navigation component
- [src/components/other/AllTask.jsx](src/components/other/AllTask.jsx) — combined/all tasks view

Utilities
- [src/utils/LocalStorage.jsx](src/utils/LocalStorage.jsx) — helper to read/write to `localStorage`

Notes on structure and conventions
- Components are organized by feature under `src/components/` (e.g., `TaskList`, `Dashboard`, `Auth`).
- `AuthProvider.jsx` centralizes auth state so components can access role and user info via context.
- The app is a client-only demo; there is no backend included. Replace the local-storage-based persistence with API calls to integrate with a real backend.

Response (201)
```json
{
	"id": "task-id-456",
	"title": "Fix payroll bug",
	"status": "new",
	"assignee": "employee-id-123",
	"creator": "admin-id-1",
	"createdAt": "2026-02-06T12:00:00Z"
}
```
## Where to Look
- Main app bootstrap: [src/main.jsx](src/main.jsx)
- Routing and UI skeleton: [src/App.jsx](src/App.jsx)
- Auth context: [src/Context/AuthProvider.jsx](src/Context/AuthProvider.jsx)
- Login UI: [src/components/Auth/Login.jsx](src/components/Auth/Login.jsx)
- Task views: [src/components/TaskList/TaskList.jsx](src/components/TaskList/TaskList.jsx)

