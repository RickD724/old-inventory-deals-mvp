# 🚗 Old Inventory Deals - MVP

A marketplace connecting dealerships with buyers for aged inventory deals.

## 🎯 Core Features (MVP)

- **Dealer Portal**: Sign up, verify, and post inventory
- **Buyer Portal**: Browse deals, filter, and unlock dealer contacts
- **Anonymous Listings**: VIN-masked until unlock
- **Payment Integration**: Stripe-ready for unlocks
- **Admin Dashboard**: Approve dealers and manage listings

## 🛠 Tech Stack

- **Frontend**: React 18 + React Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context
- **Payments**: Stripe (integration ready)
- **Backend Ready**: Firebase/Supabase compatible structure

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🚀 Quick Start

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Main page components
├── context/           # React Context for state
├── data/              # Mock data (JSON)
├── utils/             # Helper functions
└── App.jsx            # Main app component
```

## 🎨 Design System

- **Primary Color**: Blue (#3B82F6)
- **Accent**: Green (#10B981)
- **Alert**: Red (#EF4444)
- **Typography**: Inter font family
- **Spacing**: Tailwind's 4px base unit

## 🔐 User Roles

1. **Dealer**: Post inventory, manage listings
2. **Buyer**: Browse and unlock deals
3. **Admin**: Approve dealers, moderate listings

## 📊 Mock Data Structure

See `src/data/mockListings.json` for complete data structure.

## 🚧 Future Enhancements

- Real-time messaging
- Advanced analytics
- AI-powered "Deal Sniffer"
- Mobile app
- Dealer performance metrics

## 📝 License

MIT License - feel free to modify and use commercially.

---

Built with ❤️ for the automotive industry
