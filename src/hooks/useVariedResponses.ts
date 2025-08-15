import { useState, useCallback } from 'react';
import { Character } from '@/types/character';
import { characters } from '@/data/characters';

export const useVariedResponses = () => {
  const [usedResponses, setUsedResponses] = useState<Set<string>>(new Set());
  const [responseHistory, setResponseHistory] = useState<string[]>([]);

  const generateVariedResponse = useCallback((character: Character, userInput: string): string => {
    const characterData = characters[character];
    const inputLower = userInput.toLowerCase();
    
    // Determine response category based on user input
    let category: keyof typeof characterData.responses = 'romantic';
    
    if (inputLower.includes('care') || inputLower.includes('worry') || inputLower.includes('help')) {
      category = 'caring';
    } else if (inputLower.includes('fun') || inputLower.includes('play') || inputLower.includes('joke')) {
      category = 'playful';  
    } else if (inputLower.includes('think') || inputLower.includes('feel') || inputLower.includes('opinion')) {
      category = 'thoughtful';
    }
    
    const responses = characterData.responses[category];
    const availableResponses = responses.filter(response => !usedResponses.has(response));
    
    // If all responses in category are used, expand to other categories
    let finalResponses = availableResponses;
    if (availableResponses.length === 0) {
      const allResponses = Object.values(characterData.responses).flat();
      finalResponses = allResponses.filter(response => !usedResponses.has(response));
      
      // If ALL responses are used, clear history and start fresh
      if (finalResponses.length === 0) {
        setUsedResponses(new Set());
        finalResponses = responses;
      }
    }
    
    // Add variation to responses to prevent exact repetition
    const baseResponse = finalResponses[Math.floor(Math.random() * finalResponses.length)];
    const variations = [
      baseResponse,
      `Oh, ${baseResponse}`,
      `You know, ${baseResponse}`,
      `*smiles softly* ${baseResponse}`,
      `*blushes* ${baseResponse}`,
      `${baseResponse} *heart flutter*`,
      `${baseResponse} 💕`,
      `Mmm... ${baseResponse}`,
      `*giggles* ${baseResponse}`,
      `${baseResponse} *looks into your eyes*`
    ];
    
    const unusedVariations = variations.filter(v => !responseHistory.includes(v));
    const finalResponse = unusedVariations.length > 0 
      ? unusedVariations[Math.floor(Math.random() * unusedVariations.length)]
      : baseResponse;
    
    // Update tracking
    setUsedResponses(prev => new Set([...prev, baseResponse]));
    setResponseHistory(prev => [...prev.slice(-50), finalResponse]); // Keep last 50 responses
    
    return finalResponse;
  }, [usedResponses, responseHistory]);

  const getGreeting = useCallback((character: Character): string => {
    const greetings = characters[character].greetings;
    const availableGreetings = greetings.filter(greeting => !usedResponses.has(greeting));
    
    const finalGreetings = availableGreetings.length > 0 ? availableGreetings : greetings;
    const greeting = finalGreetings[Math.floor(Math.random() * finalGreetings.length)];
    
    // Don't update state here to prevent infinite loops
    return greeting;
  }, [usedResponses]);

  // Separate function to mark greeting as used
  const markGreetingAsUsed = useCallback((greeting: string) => {
    setUsedResponses(prev => new Set([...prev, greeting]));
  }, []);

  return { generateVariedResponse, getGreeting, markGreetingAsUsed };
};