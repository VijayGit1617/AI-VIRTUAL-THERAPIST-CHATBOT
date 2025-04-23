import React from 'react';
import { Brain, Heart, Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI-Powered Mental Health Support</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of mental health support with our advanced AI therapist, 
            designed to provide compassionate and personalized care whenever you need it.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-25"></div>
            <div className="relative card">
              <img 
                src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&q=80&w=2000"
                alt="AI Therapy Session"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Why Choose AI Therapy?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Advanced AI Technology</h3>
                  <p className="text-gray-300">Powered by state-of-the-art language models for natural, understanding conversations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Empathetic Support</h3>
                  <p className="text-gray-300">Experience compassionate, judgment-free conversations tailored to your needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Available 24/7</h3>
                  <p className="text-gray-300">Get support whenever you need it, day or night, from anywhere in the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="card text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
            <div className="text-gray-300">Active Users</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-300">Availability</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-300">User Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;