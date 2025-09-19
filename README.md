# HikingNusantara - Indonesian Mountain Hiking Platform

A comprehensive platform for discovering and planning mountain hiking adventures in Indonesia. Built with Next.js 14, TypeScript, and modern web technologies.

## 🏔️ Features

- **Mountain Discovery**: Browse and search through Indonesian mountains
- **Advanced Filtering**: Filter by difficulty, province, and elevation
- **Detailed Information**: Comprehensive mountain data including elevation, registration fees, and best seasons
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd back-to-nature
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   └── ui/               # shadcn/ui components
├── data/                 # Sample data
│   └── mountains.ts      # Mountain data
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── types/                # TypeScript type definitions
    └── index.ts          # Type interfaces
```

## 🎨 Design System

The project follows a nature-inspired design system with:

- **Color Palette**: Green and blue gradients representing nature
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Consistent shadcn/ui component library
- **Responsive**: Mobile-first approach with breakpoints

## 📱 Features Implemented

### Homepage

- Hero section with compelling messaging
- Search functionality with real-time filtering
- Filter options for difficulty and province
- Mountain cards with detailed information
- Responsive grid layout
- Professional footer

### Mountain Data

- 6 sample mountains with complete information
- Elevation, location, difficulty levels
- Registration fees in Indonesian Rupiah
- Best seasons for hiking
- Detailed descriptions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Quality

The project includes:

- ESLint configuration with Next.js and Prettier rules
- Prettier for consistent code formatting
- TypeScript for type safety
- Responsive design principles

## 🌟 Future Enhancements

Based on the PRD, future phases will include:

- User reviews and ratings
- Interactive maps integration
- Weather information
- User accounts and favorites
- Trip planning tools
- Mobile app development

## 📄 License

This project is part of the HikingNusantara platform development.

## 🤝 Contributing

This is a personal project for learning and development purposes.

---

Built with ❤️ for Indonesian mountain enthusiasts
