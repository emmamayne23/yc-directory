# YC Directory Next.js Application

A modern web application built with Next.js 15, featuring authentication, database integration, and a sleek user interface.

## 📸 Screenshots

<!-- Add your screenshots here -->
![Home Page](/public/screenshots/home.png)
![Authentication Page](/public/screenshots/auth.png)
![Dashboard](/public/screenshots/dashboard.png)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15 and React 19
- **Authentication**: Secure user authentication using NextAuth.js
- **Database Integration**: Uses Drizzle ORM with Neon Database
- **Type Safety**: Full TypeScript support
- **Styling**: Tailwind CSS for modern, responsive design
- **Development**: Enhanced development experience with Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.1
- **Language**: TypeScript
- **Authentication**: NextAuth.js v5
- **Database**: Neon Database with Drizzle ORM
- **Styling**: Tailwind CSS
- **Development**: Turbopack for faster development

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yc-directory-next-app.git
cd yc-directory-next-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add necessary environment variables.

4. Run the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
yc-directory-next-app/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and shared logic
├── db/              # Database related files
├── drizzle/         # Drizzle ORM configurations
├── public/          # Static assets
└── ...config files
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🔧 Configuration

The project uses several configuration files:
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `drizzle.config.ts` - Drizzle ORM configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:
```
AUTH_SECRET=[auth_secret]

AUTH_GOOGLE_ID=[google_id]
AUTH_GOOGLE_SECRET=[google_auth_secret]

DATABASE_URL=[database_url]
```

## 📝 License

[Your chosen license]

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yc-directory-next-app.git
cd yc-directory-next-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables as described above

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [NextAuth.js Documentation](https://next-auth.js.org/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
