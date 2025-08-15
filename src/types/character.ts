export type Character = 'shizuka' | 'yumiko';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'character';
  timestamp: Date;
}

export interface CharacterData {
  name: string;
  description: string;
  personality: string;
  greetings: string[];
  responses: {
    romantic: string[];
    caring: string[];
    playful: string[];
    thoughtful: string[];
  };
}