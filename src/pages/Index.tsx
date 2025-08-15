import { useState } from 'react';
import { CharacterCard } from '@/components/CharacterCard';
import { ChatInterface } from '@/components/ChatInterface';
import { Character } from '@/types/character';
import { Heart, Sparkles } from 'lucide-react';
import shizukaImage from '@/assets/shizuka-portrait.jpg';
import yumikoImage from '@/assets/yumiko-portrait.jpg';

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  if (selectedCharacter) {
    return (
      <ChatInterface
        character={selectedCharacter}
        onBack={() => setSelectedCharacter(null)}
        characterImage={selectedCharacter === 'shizuka' ? shizukaImage : yumikoImage}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="w-8 h-8 text-primary animate-heartbeat" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Anime Romance Chat
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-float" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose your perfect companion for a romantic conversation that feels genuine, 
            caring, and full of endless variety. Each character brings their unique charm 
            with thousands of different expressions of love.
          </p>
        </div>

        {/* Character Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CharacterCard
            character="shizuka"
            onSelect={setSelectedCharacter}
            image={shizukaImage}
          />
          <CharacterCard
            character="yumiko"
            onSelect={setSelectedCharacter}
            image={yumikoImage}
          />
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Why You'll Love This Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 animate-float">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Endless Variety</h3>
              <p className="text-muted-foreground">
                Over 100,000 unique expressions ensure no repetition in your romantic conversations
              </p>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 animate-float" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Authentic Personalities</h3>
              <p className="text-muted-foreground">
                Each character stays true to their nature while expressing genuine romantic feelings
              </p>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 animate-float" style={{ animationDelay: '1s' }}>
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Natural Romance</h3>
              <p className="text-muted-foreground">
                Experience conversations that feel real, caring, and beautifully romantic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
