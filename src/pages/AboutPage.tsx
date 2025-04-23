import React from 'react';
import { Shield, Heart, Brain, Clock, Lock, MessageSquare } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      title: "Advanced AI Technology",
      description: "Powered by Google's Gemini AI, offering sophisticated natural language understanding and emotional intelligence."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary mb-4" />,
      title: "Empathetic Support",
      description: "Designed to provide compassionate, understanding responses while maintaining professional boundaries."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary mb-4" />,
      title: "Safe & Secure",
      description: "Your privacy is our priority. All conversations are encrypted and confidential."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary mb-4" />,
      title: "24/7 Availability",
      description: "Access support whenever you need it, day or night, from anywhere in the world."
    },
    {
      icon: <Lock className="h-12 w-12 text-primary mb-4" />,
      title: "Private & Confidential",
      description: "Your data is protected with enterprise-grade security and never shared with third parties."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary mb-4" />,
      title: "Natural Conversations",
      description: "Experience fluid, context-aware dialogues that feel natural and understanding."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Our AI Therapist</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing mental health support through advanced artificial intelligence,
            making professional-grade therapeutic conversations accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="card mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                We believe that everyone deserves access to mental health support. Our AI-powered
                virtual therapist breaks down barriers to mental healthcare, providing immediate,
                affordable, and accessible support to anyone who needs it.
              </p>
              <p className="text-gray-300">
                By combining advanced artificial intelligence with therapeutic principles,
                we've created a safe space for you to explore your thoughts, feelings, and
                challenges without judgment.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-25"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2000"
                alt="Mental Health Support"
                className="rounded-lg w-full h-[300px] object-cover relative"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold gradient-text mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;