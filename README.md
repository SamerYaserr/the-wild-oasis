# The Wild Oasis

The Wild Oasis is a robust admin dashboard for managing cabin rentals in a boutique resort. It enables seamless handling of bookings, guests, cabins, and settings, leveraging Supabase for authentication, data storage, and real-time updates.

## Key Features

- **Authentication**: Secure user signup, login, and password management with Supabase Auth.
- **Cabin Management**: Create, update, delete, and filter cabins with image uploads to Supabase Storage.
- **Booking Operations**: View, filter, check-in/out, and manage bookings with guest details and breakfast options.
- **Dashboard Analytics**: Real-time stats on sales, stays, and occupancy using Recharts for visualizations.
- **User & Settings Management**: Admin controls for user creation and global settings like breakfast pricing.
- **Dark Mode**: Toggleable theme with CSS variables for enhanced usability.
- **Error Handling**: Integrated React Error Boundary for graceful failure recovery.
- **Responsive Design**: Mobile-friendly UI built with Styled Components.

## Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router DOM
- **State Management & Data Fetching**: TanStack React Query
- **Styling**: Styled Components
- **Forms**: React Hook Form
- **Charts**: Recharts
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **Date Handling**: date-fns
- **Backend & Database**: Supabase (PostgreSQL, Auth, Storage)
- **Build Tool**: Vite
- **Environment**: Node.js 18+

## Project Structure

```
the-wild-oasis/
├── public/                  # Static assets
├── src/
│   ├── context/             # React Contexts (e.g., DarkModeContext)
│   ├── data/                # Seed data (cabins, bookings, guests)
│   ├── features/            # Feature modules
│   │   ├── authentication/  # Login, Signup, Update forms
│   │   ├── bookings/        # Booking table, details, operations
│   │   ├── cabins/          # Cabin table, forms, operations
│   │   ├── check-in-out/    # Check-in functionality
│   │   ├── dashboard/       # Stats, charts, recent activity
│   │   └── settings/        # Settings update form
│   ├── hooks/               # Custom hooks (e.g., useMoveBack, useSettings)
│   ├── pages/               # Routed pages (e.g., Dashboard, Bookings, Cabins)
│   ├── services/            # API services (Supabase integrations)
│   ├── styles/              # Global styles and themes
│   ├── ui/                  # Reusable UI components (e.g., Heading, Row, Button)
│   ├── utils/               # Helpers (e.g., formatCurrency)
│   ├── App.jsx              # Main app with routing and providers
│   └── main.jsx             # Entry point with ErrorBoundary
├── .env                     # Environment variables
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies
├── README.md                # This file
└── vite.config.js           # Vite configuration
```

## Installation & Setup

1. Clone the repository:

   ```
   git clone https://github.com/SamerYaserr/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up a Supabase project:

   - Create a new project on [Supabase](https://supabase.com).
   - Set up tables for `cabins`, `bookings`, `guests`, and `settings`.
   - Enable Row Level Security (RLS) policies as needed.
   - Seed initial data from `/src/data/` if desired.

4. Configure environment variables (see below).

5. Run the development server:

   ```
   npm run dev
   ```

   Access at `http://localhost:5173`.

6. For production build:
   ```
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root with:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-anon-key
VITE_ENV=development
```

## Usage Examples

- **Login**: Navigate to `/login` and use credentials (e.g., admin email/password from Supabase).
- **View Dashboard**: At `/dashboard`, see recent bookings and stats.
- **Manage Cabins**: Go to `/cabins` to add/edit cabins with image uploads.
- **Handle Bookings**: At `/bookings`, filter and check-in bookings.
- **Update Settings**: In `/settings`, adjust breakfast price or guest limits.
- **Dark Mode Toggle**: Use the button in the sidebar to switch themes.

Live Demo: [https://the-wild-oasis-six-mu.vercel.app/](https://the-wild-oasis-six-mu.vercel.app/)

## Architecture / Design Notes

- **Data Flow**: React Query handles caching, optimistic updates, and mutations for Supabase API calls, ensuring efficient data synchronization.
- **Authentication**: Supabase Auth integrates with protected routes via `ProtectedRoute` component.
- **Modular Design**: Features are isolated in `/features/` for scalability; UI components in `/ui/` promote reuse.
- **Error Management**: Global error boundary catches runtime errors, with toast notifications for API failures.
- **Performance**: Lazy loading via React Router, minimal re-renders with memoization.
- **Security**: All CRUD operations use Supabase's RLS; no sensitive data exposed client-side.
- **Extensibility**: Easily add features like real-time subscriptions via Supabase Realtime.
