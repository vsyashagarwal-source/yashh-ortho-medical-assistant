import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, User, Stethoscope, Send, Menu, X, Heart, Shield, Clock, 
  Activity, AlertTriangle, Phone, Mail, MapPin, Star, ChevronDown,
  Mic, MicOff, Download, Upload, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: 'Hello! I\'m Yashh Ortho, your AI medical assistant. I specialize in orthopedic care and general health guidance. I can help with:\n\n• Joint and bone health questions\n• Pain assessment and management advice\n• Exercise and rehabilitation guidance\n• General medical information\n• Emergency care guidance\n\nHow can I assist you today?',
      timestamp: new Date().toLocaleTimeString(),
      category: 'greeting'
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Patient',
    lastVisit: new Date().toLocaleDateString()
  });
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { text: "I'm experiencing joint pain", category: "pain" },
    { text: "Tell me about bone health", category: "education" },
    { text: "Exercise recommendations", category: "exercise" },
    { text: "Emergency symptoms to watch for", category: "emergency" },
    { text: "Post-surgery care guidance", category: "recovery" }
  ];

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: messageText,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setShowQuickActions(false);

    // Enhanced AI response simulation
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'assistant',
        content: generateEnhancedMedicalResponse(messageText),
        timestamp: new Date().toLocaleTimeString(),
        category: categorizeMessage(messageText)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const categorizeMessage = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('pain') || lowerMessage.includes('hurt')) return 'pain';
    if (lowerMessage.includes('exercise') || lowerMessage.includes('therapy')) return 'exercise';
    if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) return 'emergency';
    if (lowerMessage.includes('bone') || lowerMessage.includes('joint')) return 'orthopedic';
    return 'general';
  };

  const generateEnhancedMedicalResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('pain') || lowerQuery.includes('hurt')) {
      return `I understand you're experiencing pain. Here's what I recommend:

**Immediate Steps:**
• Rate your pain on a scale of 1-10
• Note the location and type of pain (sharp, dull, throbbing)
• Apply ice for acute injuries, heat for muscle tension
• Avoid activities that worsen the pain

**When to Seek Immediate Care:**
• Severe pain (8-10/10)
• Numbness or tingling
• Loss of function
• Signs of infection (fever, redness, swelling)

**Important:** This is general guidance. For persistent or severe pain, please consult with a healthcare professional for proper diagnosis and treatment.

Would you like specific advice based on the location of your pain?`;
    }
    
    if (lowerQuery.includes('exercise') || lowerQuery.includes('therapy')) {
      return `Exercise is crucial for orthopedic health! Here are some general guidelines:

**For Joint Health:**
• Low-impact activities (swimming, cycling, walking)
• Range of motion exercises
• Strength training with proper form
• Balance and stability work

**Recovery Exercises:**
• Start slowly and progress gradually
• Focus on pain-free range of motion
• Include both strengthening and flexibility
• Listen to your body

**Red Flags - Stop Exercise If:**
• Sharp, shooting pain
• Significant swelling
• Loss of range of motion
• Numbness or tingling

Always consult with a physical therapist or healthcare provider before starting a new exercise program, especially after injury or surgery.

What specific area would you like exercise recommendations for?`;
    }
    
    if (lowerQuery.includes('emergency') || lowerQuery.includes('urgent')) {
      return `🚨 **ORTHOPEDIC EMERGENCIES - Seek Immediate Medical Attention:**

**Call 911 or Go to ER Immediately:**
• Bone protruding through skin (open fracture)
• Complete loss of function in limb
• Severe deformity
• Loss of pulse or circulation
• Severe trauma with multiple injuries

**Urgent Care Needed (Within Hours):**
• Suspected fracture
• Joint dislocation
• Severe sprains
• Deep cuts near joints
• Signs of infection (fever, red streaking)

**First Aid While Waiting:**
• Don't move the injured area
• Apply ice wrapped in cloth
• Elevate if possible
• Control bleeding with direct pressure
• Stay calm and keep patient comfortable

**Remember:** When in doubt, seek professional medical care. It's better to be cautious with potential serious injuries.

Are you currently experiencing an emergency situation?`;
    }
    
    if (lowerQuery.includes('bone') || lowerQuery.includes('joint') || lowerQuery.includes('orthopedic')) {
      return `Great question about orthopedic health! Here's comprehensive information:

**Bone Health Essentials:**
• Calcium: 1000-1200mg daily (dairy, leafy greens, fortified foods)
• Vitamin D: 600-800 IU daily (sunlight, supplements)
• Regular weight-bearing exercise
• Avoid smoking and excessive alcohol

**Joint Health Tips:**
• Maintain healthy weight to reduce joint stress
• Stay active with low-impact exercises
• Include omega-3 fatty acids in diet
• Practice good posture
• Use proper body mechanics

**Common Orthopedic Conditions:**
• Arthritis (osteoarthritis, rheumatoid)
• Fractures and stress fractures
• Tendinitis and bursitis
• Ligament sprains and muscle strains

**Prevention Strategies:**
• Regular exercise and stretching
• Proper nutrition
• Adequate rest and recovery
• Ergonomic workplace setup
• Protective equipment during sports

What specific aspect of bone or joint health would you like to explore further?`;
    }
    
    return `Thank you for your question. As your AI medical assistant, I'm here to provide evidence-based health information and guidance.

**I can help with:**
• General health and wellness advice
• Orthopedic condition information
• Exercise and rehabilitation guidance
• Symptom assessment and when to seek care
• Preventive health measures

**Important Reminders:**
• This information is for educational purposes only
• Always consult healthcare professionals for diagnosis and treatment
• Seek immediate care for emergencies
• Your health and safety are the top priority

**For the most accurate assistance, please provide:**
• Specific symptoms or concerns
• Duration and severity
• Any relevant medical history
• Current medications or treatments

How can I provide more specific guidance for your health concern?`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition not supported in this browser');
    }
  };

  const exportChat = () => {
    const chatData = messages.map(msg => 
      `[${msg.timestamp}] ${msg.type === 'user' ? 'You' : 'Yashh Ortho'}: ${msg.content}`
    ).join('\n\n');
    
    const blob = new Blob([chatData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `yashh-ortho-consultation-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${sidebarOpen ? 'fixed' : 'relative'} inset-y-0 left-0 z-50 w-80 bg-white shadow-xl lg:relative`}
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-green-600">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Yashh Ortho</span>
                  <p className="text-xs text-blue-100">AI Medical Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-md text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* User Profile */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Welcome, {userProfile.name}</p>
                    <p className="text-sm text-gray-600">Last visit: {userProfile.lastVisit}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <Activity className="h-4 w-4" />
                  <span>Health Status: Active</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Health First</p>
                  <p className="text-xs text-gray-600">Always prioritize professional care</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Shield className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Secure</p>
                  <p className="text-xs text-gray-600">Your privacy is protected</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Available 24/7</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Instant Responses</p>
                      <p className="text-xs text-gray-600">Get medical guidance anytime</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Star className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Expert Knowledge</p>
                      <p className="text-xs text-gray-600">Evidence-based medical information</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-red-900">Emergency</span>
                </div>
                <p className="text-sm text-red-700 mb-3">For life-threatening emergencies:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-red-500" />
                    <span className="font-medium">Call 911</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>Go to nearest ER</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={exportChat}
                  className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Download className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Export Consultation</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Settings className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Settings</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">AI Medical Consultation</h1>
                <p className="text-sm text-gray-500">Orthopedic Specialist Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Online & Ready</span>
              </div>
              <div className="text-sm text-gray-400">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-4xl space-x-4 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-r from-green-500 to-green-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Stethoscope className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div className={`px-6 py-4 rounded-2xl shadow-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}>
                    <div className="prose prose-sm max-w-none">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {message.content}
                      </pre>
                    </div>
                    <div className={`flex items-center justify-between mt-3 pt-2 border-t ${
                      message.type === 'user' ? 'border-blue-400' : 'border-gray-200'
                    }`}>
                      <p className={`text-xs ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                      {message.category && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          message.type === 'user' ? 'bg-blue-400 text-blue-100' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {message.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex max-w-4xl space-x-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <div className="px-6 py-4 rounded-2xl bg-white shadow-sm border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Analyzing your query...</p>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <AnimatePresence>
          {showQuickActions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="px-6 py-4 bg-white border-t border-gray-200"
            >
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(action.text)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message Input */}
        <div className="border-t border-gray-200 bg-white p-6">
          <div className="flex items-end space-x-4">
            <button
              onClick={() => setShowQuickActions(!showQuickActions)}
              className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronDown className={`h-5 w-5 transform transition-transform ${showQuickActions ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your symptoms, ask about treatments, or request health guidance..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-50"
                rows="3"
                disabled={isLoading}
              />
              <button
                onClick={handleVoiceInput}
                disabled={isLoading}
                className={`absolute right-3 bottom-3 p-2 rounded-full transition-colors ${
                  isListening 
                    ? 'bg-red-500 text-white' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
            </div>
            
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-2xl hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-all"
            >
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <p>
              ⚠️ For informational purposes only. Always consult healthcare professionals for medical advice.
            </p>
            <div className="flex items-center space-x-4">
              <span>Press Enter to send</span>
              <span>•</span>
              <span>Shift + Enter for new line</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;