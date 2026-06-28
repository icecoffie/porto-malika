import { useState, useEffect } from 'react';
import { 
  Code2, Database, Palette, Zap, Globe, Lock, 
  Cpu, Cloud, Terminal
} from 'lucide-react';

interface Card {
  id: number;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const techIcons = [
  { name: 'Code2', component: Code2 },
  { name: 'Database', component: Database },
  { name: 'Palette', component: Palette },
  { name: 'Zap', component: Zap },
  { name: 'Globe', component: Globe },
  { name: 'Lock', component: Lock },
  { name: 'Cpu', component: Cpu },
  { name: 'Cloud', component: Cloud },
];

export default function TechPlayground() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isWon, setIsWon] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const gameCards = [...techIcons, ...techIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon: icon.name,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsWon(false);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      checkMatch(newFlippedCards);
    }
  };

  const checkMatch = (flipped: number[]) => {
    const [first, second] = flipped;
    
    if (cards[first].icon === cards[second].icon) {
      // Match found
      setTimeout(() => {
        const newCards = [...cards];
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
        
        const newMatches = matches + 1;
        setMatches(newMatches);
        
        if (newMatches === techIcons.length) {
          setIsWon(true);
        }
      }, 500);
    } else {
      // No match
      setTimeout(() => {
        const newCards = [...cards];
        newCards[first].isFlipped = false;
        newCards[second].isFlipped = false;
        setCards(newCards);
        setFlippedCards([]);
      }, 1000);
    }
  };

  const getIconComponent = (iconName: string) => {
    const icon = techIcons.find(i => i.name === iconName);
    return icon ? icon.component : Code2;
  };

  return (
    <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#ffffff10] p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-[#ffffff10]">
            <p className="text-[10px] text-[var(--white-icon)]">Moves</p>
            <p className="text-base font-bold text-white">{moves}</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-[#ffffff10]">
            <p className="text-[10px] text-[var(--white-icon)]">Matches</p>
            <p className="text-base font-bold text-[var(--sec)]">{matches}/{techIcons.length}</p>
          </div>
        </div>
        
        <button
          onClick={initializeGame}
          className="px-3 py-1.5 rounded-lg bg-[var(--sec)] text-white text-xs font-medium hover:bg-[var(--sec)]/80 transition-all hover:scale-105 active:scale-95"
        >
          New Game
        </button>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {cards.map((card) => {
          const IconComponent = getIconComponent(card.icon);
          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched || card.isFlipped}
              className={`aspect-square rounded-lg border transition-all duration-300 flex items-center justify-center ${
                card.isFlipped || card.isMatched
                  ? 'bg-gradient-to-br from-[var(--sec)] to-blue-400 border-[var(--sec)] scale-100 shadow-lg shadow-[var(--sec)]/50'
                  : 'bg-[#1a1a1a] border-[#ffffff10] hover:border-[var(--sec)]/50 hover:scale-105 hover:shadow-md'
              } ${card.isMatched ? 'opacity-60 scale-95' : ''} ${
                card.isFlipped && !card.isMatched ? 'animate-flip' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {card.isFlipped || card.isMatched ? (
                <IconComponent className="w-5 h-5 text-white" />
              ) : (
                <Terminal className="w-5 h-5 text-[var(--white-icon)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Win Message */}
      {isWon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md rounded-xl animate-fadeIn">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[var(--sec)]/20 to-transparent border-2 border-[var(--sec)] shadow-2xl shadow-[var(--sec)]/50 animate-scaleIn">
            <h3 className="text-2xl font-bold text-white mb-2">🎉 You Won!</h3>
            <p className="text-[var(--white-icon)] text-sm mb-3">
              Completed in <span className="text-[var(--sec)] font-bold">{moves}</span> moves
            </p>
            <button
              onClick={initializeGame}
              className="px-4 py-2 rounded-lg bg-[var(--sec)] text-white text-sm font-medium hover:bg-[var(--sec)]/80 transition-all hover:scale-105 active:scale-95"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="text-center">
        <p className="text-xs text-[var(--white-icon)]">
          Click cards to flip and match all tech icons to win!
        </p>
      </div>
    </div>
  );
}
