import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const API_KEY = "xxxxxxxxx";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      role: 'user' as const,
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemInstruction = `
        You are a friendly AI therapist. Keep your responses brief and natural:
        - For greetings: Respond warmly but briefly
        - For emotional concerns: Show empathy and offer support
        - For serious issues: Recommend professional help
        - Keep all responses under 2 sentences unless the topic requires more detail
      `;

      const data = {
        contents: [{
          parts: [
            { text: systemInstruction },
            { text: input }
          ]
        }]
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const responseData = await response.json();
      const botResponse = responseData.candidates[0].content.parts[0].text;

      setMessages(prev => [...prev, {
        role: 'bot',
        content: botResponse,
        timestamp: new Date(),
      }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, {
        role: 'bot',
        content: "I apologize, but I'm having trouble processing your message right now. Please try again in a moment.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto h-[calc(100vh-4rem)]">
        <div className="h-full flex flex-col bg-dark-lighter rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-white">AI Therapist</h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' ? 'bg-primary' : 'bg-gray-600'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-dark-light text-gray-200'
                    }`}
                  >
                    {message.content}
                    <div
                      className={`text-xs mt-1 ${
                        message.role === 'user' ? 'text-white/70' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="p-3 rounded-lg bg-dark-light">
                    <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-dark-light text-white pl-4 pr-12 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary-light transition-colors disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;