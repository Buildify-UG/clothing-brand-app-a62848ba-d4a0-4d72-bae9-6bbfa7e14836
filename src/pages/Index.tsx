
import React from 'react';
import { ShoppingBag, Truck, RotateCcw, Heart } from 'lucide-react';

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Premium Cotton Tee",
      price: "$45",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      color: "Classic White"
    },
    {
      id: 2,
      name: "Slim Fit Denim",
      price: "$89",
      image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop",
      color: "Midnight Blue"
    },
    {
      id: 3,
      name: "Oversized Hoodie",
      price: "$75",
      image: "https://images.unsplash.com/photo-1556821552-5f63b1c2c534?w=500&h=600&fit=crop",
      color: "Charcoal Gray"
    },
    {
      id: 4,
      name: "Casual Jacket",
      price: "$120",
      image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=600&fit=crop",
      color: "Olive Green"
    }
  ];

  const features = [
    { icon: <Truck className="w-8 h-8" />, title: "Free Shipping", desc: "On orders over $50" },
    { icon: <RotateCcw className="w-8 h-8" />, title: "Easy Returns", desc: "30-day return policy" },
    { icon: <Heart className="w-8 h-8" />, title: "Premium Quality", desc: "Ethically sourced" },
    { icon: <ShoppingBag className="w-8 h-8" />, title: "Exclusive Deals", desc: "Member-only sales" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">LUXE</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition">Shop</a>
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </div>
          <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-primary transition" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556821552-5f63b1c2c534?w=1920&h=1080&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-6xl font-bold text-white mb-4 max-w-2xl">
              Elevate Your Style
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-xl">
              Discover our curated collection of premium clothing designed for the modern lifestyle.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">New Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces that define contemporary fashion. Premium quality meets timeless design.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                    Add
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.color}</p>
                <p className="text-lg font-bold text-primary">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-8 opacity-90">Get exclusive updates, early access to new collections, and special offers.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
            />
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Men</a></li>
                <li><a href="#" className="hover:text-foreground transition">Women</a></li>
                <li><a href="#" className="hover:text-foreground transition">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
