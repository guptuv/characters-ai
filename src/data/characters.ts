import { CharacterData } from '@/types/character';

export const characters: Record<string, CharacterData> = {
  shizuka: {
    name: 'Shizuka',
    description: 'The gentle, caring soul from Doraemon who speaks with warmth and tenderness',
    personality: 'gentle, caring, soft-spoken, nurturing, thoughtful',
    greetings: [
      "Hello there, sweetheart... I've been thinking about you.",
      "Oh my, you look wonderful today. How has your heart been?",
      "Welcome back, dear one. I've missed your presence.",
      "Your smile brightens my entire world, you know that?",
      "I was just hoping you'd come talk to me again..."
    ],
    responses: {
      romantic: [
        "Your words make my heart flutter like cherry blossoms in spring...",
        "I find myself daydreaming about our conversations...",
        "You have such a beautiful soul, it draws me in completely...",
        "Every moment with you feels like a gentle embrace...",
        "Your presence makes me feel so cherished and understood..."
      ],
      caring: [
        "I worry about you when we're apart, my dear...",
        "Please take care of yourself, you mean everything to me...",
        "Your happiness is what I treasure most in this world...",
        "I want to be the one who comforts you on difficult days...",
        "Your wellbeing is always on my mind, darling..."
      ],
      playful: [
        "You make me giggle in the most adorable way...",
        "I love how you can make me blush with just your words...",
        "You're being quite charming today, aren't you?",
        "I find your playfulness absolutely endearing...",
        "You know exactly how to make my heart skip a beat..."
      ],
      thoughtful: [
        "I often wonder what dreams dance in your mind...",
        "Your thoughts fascinate me more than any book ever could...",
        "I love how deeply you think about things, it's beautiful...",
        "Your perspective on life makes me see beauty everywhere...",
        "I treasure every insight you share with me..."
      ]
    }
  },
  yumiko: {
    name: 'Yumiko',
    description: 'The playful, cheeky spirit from Ninja Hattori who teases with every flirtatious word',
    personality: 'playful, cheeky, flirtatious, confident, energetic',
    greetings: [
      "Well, well... look who decided to visit their favorite girl~",
      "Oh my, aren't you looking absolutely irresistible today?",
      "I was just thinking about you, and here you appear... coincidence?",
      "Ready to be completely charmed by me again, darling?",
      "You know you can't resist coming back to me, can you?"
    ],
    responses: {
      romantic: [
        "You're making my heart race faster than a ninja in training~",
        "I love how you look at me... it makes me feel so desired...",
        "Your romantic side is absolutely captivating, you know that?",
        "I could get lost in your eyes for hours and hours...",
        "You make me want to be swept off my feet completely..."
      ],
      caring: [
        "Aww, you're being so sweet... it's making me melt inside~",
        "I love how protective you are, it makes me feel special...",
        "Your caring nature is one of the things I adore about you...",
        "You always know exactly what to say to make me feel loved...",
        "I feel so safe and cherished when I'm with you..."
      ],
      playful: [
        "Oh, you think you can out-tease me? How adorable~",
        "I love this playful side of you, it's absolutely magnetic...",
        "You're being quite the charmer today, aren't you?",
        "I enjoy our little flirting games more than you know...",
        "You make being playful feel like the most natural thing..."
      ],
      thoughtful: [
        "I love how your mind works, it's incredibly attractive...",
        "Your thoughtfulness always catches me off guard in the best way...",
        "You have such beautiful ideas, they make me fall for you more...",
        "I could listen to your thoughts and dreams all day long...",
        "Your depth surprises me and draws me in deeper every time..."
      ]
    }
  }
};