import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

// Layout
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import BrowseDeals from './pages/BrowseDeals'
import DealDetails from './pages/DealDetails'
import DealerSignUp from './pages/DealerSignUp'
import DealerDashboard from './pages/DealerDashboard'
import BuyerSignUp from './pages/BuyerSignUp'
import AboutPage from './pages/AboutPage'
import HowItWorks from './pages/HowItWorks'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowseDeals />} />
              <Route path="/deal/:id" element={<DealDetails />} />
              <Route path="/dealer/signup" element={<DealerSignUp />} />
              <Route path="/dealer/dashboard" element={<DealerDashboard />} />
              <Route path="/buyer/signup" element={<BuyerSignUp />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
