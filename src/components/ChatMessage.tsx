import { Message } from '@/types/character';
import { Card } from '@/components/ui/card';

interface ChatMessageProps {
  message: Message;
  characterName: string;
}

export const ChatMessage = ({ message, characterName }: ChatMessageProps) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <Card className={`max-w-xs lg:max-w-md p-4 transition-all duration-300 hover:scale-102 ${
        isUser 
          ? 'bg-user-message text-white ml-4' 
          : 'bg-character-message text-foreground mr-4 animate-heartbeat'
      }`}>
        {!isUser && (
          <div className="text-sm font-semibold mb-2 text-primary">
            {characterName}
          </div>
        )}
        <p className="leading-relaxed">{message.text}</p>
        <div className="text-xs opacity-70 mt-2">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </Card>
    </div>
  );
};