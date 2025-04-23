import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight, Heart, Shield, MessageCircle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Emotional Support",
      description: "24/7 compassionate AI-powered support for your mental well-being"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe Space",
      description: "Completely private and secure environment for your conversations"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Guided Conversations",
      description: "Structured therapeutic dialogues based on proven techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="animate-float">
            <Brain className="h-24 w-24 text-primary mx-auto mb-8" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Welcome to</span>
            <br />
            <span className="text-white">Virtual Therapist</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your personal AI companion for mental wellness. Experience confidential, 
            judgment-free conversations anytime, anywhere.
          </p>

          <button
            onClick={() => navigate('/login')}
            className="btn-primary group"
          >
            Get Started
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card group hover:transform hover:-translate-y-2"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;