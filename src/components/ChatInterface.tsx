import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ChatMessage } from './ChatMessage';
import { Character, Message } from '@/types/character';
import { characters } from '@/data/characters';
import { useVariedResponses } from '@/hooks/useVariedResponses';
import { ArrowLeft, Send, Heart } from 'lucide-react';

interface ChatInterfaceProps {
  character: Character;
  onBack: () => void;
  characterImage: string;
}

export const ChatInterface = ({ character, onBack, characterImage }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { generateVariedResponse, getGreeting, markGreetingAsUsed } = useVariedResponses();
  
  const characterData = characters[character];

  useEffect(() => {
    // Initial greeting - only run once when character changes
    if (messages.length === 0) {
      const greeting = getGreeting(character);
      const initialMessage: Message = {
        id: '1',
        text: greeting,
        sender: 'character',
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  }, [character]); // Remove getGreeting from dependencies to prevent infinite loop

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateVariedResponse(character, inputValue);
      const characterMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'character',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, characterMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-card border-b border-primary/20 p-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-3 flex-1">
            <img 
              src={characterImage} 
              alt={characterData.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 animate-glow"
            />
            <div>
              <h2 className="text-xl font-bold text-foreground">{characterData.name}</h2>
              <p className="text-sm text-muted-foreground">
                {isTyping ? 'Typing...' : 'Online'}
              </p>
            </div>
          </div>
          <Heart className="w-6 h-6 text-primary animate-heartbeat" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 pb-24 max-w-4xl mx-auto">
        {messages.map(message => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            characterName={characterData.name}
          />
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <Card className="bg-character-message text-foreground mr-4 p-4 animate-pulse">
              <div className="text-sm font-semibold mb-2 text-primary">
                {characterData.name}
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </Card>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-card border-t border-primary/20 p-4">
        <div className="flex space-x-3 max-w-4xl mx-auto">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Send a message to ${characterData.name}...`}
            className="flex-1 border-primary/30 focus:border-primary"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isTyping}
            className="transition-all duration-300 hover:animate-glow"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};