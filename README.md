# Social Media Platform Mobile

A React Native mobile app built with Expo, Apollo Client, and GraphQL for a social media platform.

## Tech Stack

- **Framework**: React Native 0.74 + Expo SDK 51
- **Language**: TypeScript
- **API**: GraphQL with Apollo Client
- **State Management**: Apollo Cache with custom type policies

## Project Structure

```
src/
├── components/         # Shared UI components
│   └── ui/
├── features/           # Feature-based modules
│   ├── Auth/           # Authentication (login, register)
│   ├── Comments/       # Comment functionality
│   ├── Feed/           # Main feed
│   ├── Follows/        # Follow/unfollow users
│   ├── Likes/          # Like/unlike posts
│   ├── Notifications/  # Push notifications
│   ├── Posts/          # Post CRUD operations
│   └── Profile/        # User profiles
├── graphql/            # Shared GraphQL fragments
├── screens/            # Screen components
│   ├── Auth/
│   ├── Feed/
│   ├── Post/
│   └── Profile/
├── services/           # Apollo client setup
├── store/              # Global state (if needed)
├── types/              # TypeScript interfaces
└── utils/              # Helper functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

### Running the App

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Configuration

1. Update the GraphQL endpoint in `src/services/apollo.ts`:
   ```typescript
   const httpLink = createHttpLink({
     uri: "YOUR_GRAPHQL_ENDPOINT",
   });
   ```

2. Configure authentication token retrieval in the same file.

## Features

Each feature module follows a consistent structure:
- `components/` - Feature-specific UI components
- `graphql/` - Queries, mutations, and fragments
- `hooks/` - Custom React hooks

## Path Aliases

The project uses `@/*` as a path alias for `src/*`:
```typescript
import { User } from "@/types";
```
