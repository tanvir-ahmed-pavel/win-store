# WinStore

A modern e-commerce application built with Next.js 16, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, pnpm, yarn, or bun package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd win-store
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Environment Setup:
   Create a `.env` file in the root directory and add the following environment variable:

   ```env
   API_BASE_URL=your_api_base_url_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Explanation

This project follows the **Next.js App Router** architecture, leveraging the latest features of React 19 and Next.js 16.

### Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling.
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography.
- **State Management**: React Context API (located in `/context`) for global state like the Shopping Cart.

### Project Structure

- **`app/`**: Contains the application routes, layouts, and pages. Follows the Next.js App Router conventions.
- **`components/`**: Reusable UI components.
  - `layout/`: Global layout components like Header, Footer.
  - `sections/`: Different sections of the app.
  - `ui/`: Generic UI elements.
- **`context/`**: React Context providers for managing application state (e.g., `CartContext`).
- **`lib/`**: Utility functions and server actions.
  - `actions/`: Server actions for data fetching and mutations, securely handling API requests on the server side.
- **`types/`**: TypeScript type definitions for API responses, entities (Product, Category), and props.
- **`public/`**: Static assets like images and fonts.

### Data Flow

Data fetching is primarily handled via **Server Actions** in `lib/actions/`. These actions communicate with an external API defined by `API_BASE_URL`. React Server Components (RSC) fetch data directly on the server, ensuring faster initial page loads and better SEO. Client-side interactivity is handled through standard React hooks and the Context API.

## Assumptions Taken

1. **Environment**: The application is expected to run in a Node.js environment (versions supporting Next.js 16).
2. **API Availability**: A valid `API_BASE_URL` is provided in the environment variables, and the API endpoints (e.g., `/products`, `/products/categories`) return data in the expected `ApiResponse<T>` format.
3. **Responsive Design**: The design is mobile-responsive by default, utilizing Tailwind's responsive prefixes.
4. **Browser Support**: The application targets modern browsers that support ES6+ features and recent CSS capabilities.
