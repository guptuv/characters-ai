import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Character } from '@/types/character';
import { characters } from '@/data/characters';

interface CharacterCardProps {
  character: Character;
  onSelect: (character: Character) => void;
  image: string;
}

export const CharacterCard = ({ character, onSelect, image }: CharacterCardProps) => {
  const characterData = characters[character];
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-float bg-gradient-card border-2 border-primary/20 hover:border-primary/40">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={characterData.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground animate-heartbeat">
          {characterData.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {characterData.description}
        </p>
        <Button 
          onClick={() => onSelect(character)}
          variant="outline"
          className={`w-full transition-all duration-300 hover:animate-glow ${
            character === 'shizuka' 
              ? 'border-shizuka hover:bg-shizuka hover:text-white' 
              : 'border-yumiko hover:bg-yumiko hover:text-white'
          }`}
        >
          Chat with {characterData.name}
        </Button>
      </div>
    </Card>
  );
};