import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, CheckCircle2, Circle, Plus, Sparkles, Heart } from 'lucide-react';

const STORAGE_KEY = 'twinkle_mumbai_date_wishlist';

interface DateIdea {
  id: string;
  title: string;
  location: string;
  vibe: string;
  selected: boolean;
}

const DEFAULT_IDEAS: DateIdea[] = [
  {
    id: 'idea-1',
    title: 'Late Night Marine Drive Drive & Sea Breeze',
    location: 'South Mumbai',
    vibe: 'Queens Necklace at 1:00 AM',
    selected: true,
  },
  {
    id: 'idea-2',
    title: 'Authentic Bombay Melodic Techno Gig',
    location: 'Lower Parel / Bandra',
    vibe: 'Just like Dynamo & Salud, round two',
    selected: true,
  },
  {
    id: 'idea-3',
    title: 'Specialty Coffee & Breakfast in Bandra',
    location: 'Bandra West',
    vibe: 'Cortinga morning sequel',
    selected: false,
  },
  {
    id: 'idea-4',
    title: 'Recreating the Sand Slip (With Proper Footing!)',
    location: 'Juhu / Versova Beach',
    vibe: 'Zero slipping allowed this time',
    selected: true,
  },
  {
    id: 'idea-5',
    title: 'Mulund Chai & Unrushed Conversation',
    location: 'Mulund West',
    vibe: 'Her home turf & hours of talking',
    selected: false,
  },
];

export const DistanceBridge: React.FC = () => {
  const [ideas, setIdeas] = useState<DateIdea[]>(DEFAULT_IDEAS);
  const [customInput, setCustomInput] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setIdeas(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveIdeas = (nextIdeas: DateIdea[]) => {
    setIdeas(nextIdeas);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIdeas));
    } catch {
      // ignore
    }
  };

  const toggleIdea = (id: string) => {
    const updated = ideas.map((idea) =>
      idea.id === id ? { ...idea, selected: !idea.selected } : idea
    );
    saveIdeas(updated);
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const newIdea: DateIdea = {
      id: `custom-${Date.now()}`,
      title: customInput.trim(),
      location: 'Mumbai Pick',
      vibe: 'Twinkle’s Suggestion',
      selected: true,
    };
    saveIdeas([...ideas, newIdea]);
    setCustomInput('');
  };

  const selectedCount = ideas.filter((i) => i.selected).length;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101014] border-t border-[#A7A0A0]/10 text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#D5BD9B]">
          Two Cities · One Shared Memory
        </span>

        {/* Minimal Editorial Bridge */}
        <div className="relative py-8 px-6 sm:px-12 rounded-2xl bg-[#18171B] border border-[#A7A0A0]/15 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Bhopal: Pranjal */}
            <div className="text-center md:text-left space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#B88C91] uppercase tracking-wider font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bhopal, MP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">Pranjal</h3>
              <p className="text-xs text-[#A7A0A0]">23.2599° N, 77.4126° E · Home</p>
            </div>

            {/* Connecting Vector */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-[#D5BD9B] uppercase">
                ~ 780 km · West by South
              </span>
              <div className="relative w-full flex items-center justify-center">
                <div className="h-[1px] w-full bg-gradient-to-r from-[#682D3A] via-[#D5BD9B] to-[#682D3A]" />
                <div className="absolute p-1.5 rounded-full bg-[#101014] border border-[#D5BD9B]">
                  <Navigation className="w-3.5 h-3.5 text-[#D5BD9B] rotate-45" />
                </div>
              </div>
              <span className="text-xs font-serif italic text-[#A7A0A0]">
                Until November 22, 2026
              </span>
            </div>

            {/* Mumbai: Twinkle */}
            <div className="text-center md:text-right space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#D5BD9B] uppercase tracking-wider font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mulund West, Mumbai</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">Twinkle</h3>
              <p className="text-xs text-[#A7A0A0]">19.1726° N, 72.9425° E · 27th Year</p>
            </div>
          </div>
        </div>

        {/* Interactive Nov 22 Date Planner / Wishlist */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#141317] border border-[#A7A0A0]/15 text-left shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D5BD9B] font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#B88C91]" />
                <span>November 22 Mumbai Date Wishlist</span>
              </div>
              <h4 className="text-xl font-serif text-[#F4EEE5] mt-1">
                Vote or add activities for our Mumbai reunion
              </h4>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18171B] border border-[#D5BD9B]/30 text-xs font-mono text-[#D5BD9B]">
              <Heart className="w-3 h-3 text-[#E11D48] fill-[#E11D48]" />
              <span>{selectedCount} Selected</span>
            </div>
          </div>

          {/* Interactive Wishlist Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                onClick={() => toggleIdea(idea.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                  idea.selected
                    ? 'bg-[#18171B] border-[#D5BD9B]/50 shadow-md ring-1 ring-[#D5BD9B]/20'
                    : 'bg-[#101014] border-[#A7A0A0]/15 hover:border-[#A7A0A0]/30 opacity-70 hover:opacity-100'
                }`}
              >
                {idea.selected ? (
                  <CheckCircle2 className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-4 h-4 text-[#A7A0A0] shrink-0 mt-0.5" />
                )}
                <div>
                  <h5 className="text-sm font-serif font-medium text-[#F4EEE5] leading-snug">
                    {idea.title}
                  </h5>
                  <div className="flex items-center gap-2 text-[11px] text-[#A7A0A0] font-mono mt-1">
                    <span>{idea.location}</span>
                    <span>·</span>
                    <span className="text-[#D5BD9B]">{idea.vibe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Custom Date Suggestion */}
          <form onSubmit={handleAddCustom} className="pt-2 flex gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Suggest your own Mumbai date idea for Nov 22..."
              className="flex-1 px-4 py-2 text-xs bg-[#101014] border border-[#A7A0A0]/20 rounded-lg text-[#F4EEE5] placeholder-[#A7A0A0]/50 focus:outline-none focus:border-[#D5BD9B]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#682D3A] hover:bg-[#7D3847] text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
