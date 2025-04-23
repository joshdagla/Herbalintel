import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import AboutContact from './Pages/AboutContact';

function App() {
    const [result, setResult] = useState(null);

    const handleFormSubmit = async (formData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/predict/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };

    return (
        <Router>
            <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
                    <Routes>
                        <Route path="/" element={
                            <div className="w-full max-w-3xl md:max-w-4xl bg-white rounded-3xl shadow-[0_4px_60px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_80px_rgba(16,185,129,0.5)] transition-all duration-500 p-10">
                                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-fade-in-up">
                                    Ayurvedic Recommendation Assistant 🌿
                                </h1>
                                <InputForm onSubmit={handleFormSubmit} />
                                {result && <ResultCard result={result} onReset={() => setResult(null)} />}
                            </div>
                        } />
                        <Route path="/about" element={<AboutContact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
