# Gacha Simulator Admin Frontend

The gacha-simulator-admin-front is the admin panel for the Gacha Simulator project. It provides a user-friendly interface for managing banners, promocodes, advertisements, and other essential features of the Gacha Simulator system. Built with Vue.js, this application allows administrators to efficiently manage and monitor the system’s content and functionality.

## Features

- Authentication:
  - Secure login system with route guards to protect administrative pages.
- Banner Management:
  - View, create, edit, and delete gacha banners.
  - Configure banner details, including featured characters and drop rates.
- Promocode Management:
  - Manage promocodes for users.
  - Add, edit, and remove promocodes with ease.
- Advertisement Management:
  - Manage in-app advertisements.
  - Add, edit, and delete advertisement entries.
- User-Friendly Interface:
  - Responsive design using Bootstrap and BootstrapVue.
  - Notifications for user feedback during actions like saving or deleting.

Installation

1. Clone the repository:

```bash
git clone https://github.com/RegisRivijski/gacha-simulator-admin-front.git
cd gacha-simulator-admin-front
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run serve
```

4. Build the project for production:

```bash
npm run build
```

## Core Technologies

- Vue.js: The primary JavaScript framework for building the admin panel.
- Vue Router: Manages navigation between pages and secures routes with authentication guards.
- Vuex: For state management and efficient data handling.
- BootstrapVue: Ensures responsive and modern UI components.
- Axios: For seamless communication with backend APIs.

## Security

- Authentication Guards:
- The authGuard ensures only authenticated administrators can access protected routes.
- Protected Routes:
- Pages under /gacha-simulator/admin/ are secured and require login.

## Dependencies

- Vue.js: Framework for building the admin panel.
- BootstrapVue: Styling and responsive layout.
- Axios: HTTP client for API communication.
- Vue Router: Navigation and route protection.
- Vuex: Centralized state management for data handling.

## Contribution

Feel free to contribute by submitting issues or pull requests to improve the admin panel’s functionality or UI.

## Disclaimer

This project is part of the Gacha Simulator ecosystem and is designed for administrative use only. Unauthorized access is prohibited.
