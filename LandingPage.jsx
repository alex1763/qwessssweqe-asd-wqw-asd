import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold">FinTrack</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <Button className="md:hidden">Menu</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-gray-100">
        <motion.div 
          className="max-w-xl space-y-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Take Control of Your Finances with FinTrack
          </h2>
          <p className="text-lg text-gray-700">
            FinTrack helps you manage your expenses, set budgets, and reach your financial goals effortlessly.
          </p>
          <Button className="px-6 py-3 text-lg">Get Started</Button>
        </motion.div>
        <motion.img
          src="/fintrack-hero.png"
          alt="FinTrack App Preview"
          className="mt-8 md:mt-0 md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </section>

      {/* Features Section */}
      <section className="p-6 md:p-16 grid gap-8 md:grid-cols-3 bg-white">
        {[
          {
            title: "Track Expenses",
            desc: "Easily monitor where your money goes with detailed analytics.",
            img: "/feature1.png"
          },
          {
            title: "Set Budgets",
            desc: "Create and manage custom budgets to stay on track.",
            img: "/feature2.png"
          },
          {
            title: "Smart Insights",
            desc: "Get personalized financial tips based on your spending.",
            img: "/feature3.png"
          },
        ].map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Card className="hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-6 space-y-4 flex flex-col items-center text-center">
                <img src={feature.img} alt={feature.title} className="w-16 h-16" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-white text-center">
        &copy; {new Date().getFullYear()} FinTrack. All rights reserved.
      </footer>
    </div>
  );
}
