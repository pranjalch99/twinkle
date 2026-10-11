import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Clock, Compass } from 'lucide-react';

interface TokenItem {
  id: string;
  number: string;
  title: string;
  date: string;
  category: string;
  frontSnippet: string;
  secretDetail: string;
  pranjalThought: string;
}

const TOKENS: TokenItem[] = [
  {
    id: 'token-01',
    number: '01',
    title: 'The Paneer & Rice Swipe',
    date: 'Oct 2, 2026',
    category: 'The Beginning',
    frontSnippet: 'Bored before the rave, waiting for our dinner order, scrolling Hinge.',
    secretDetail: 'The instant realization: hot, techno baddie, and fellow SDE. The Instagram DM was sent with almost zero expectation.',
    pranjalThought: '“Three for three. Even if she replies cold, I had to shoot my shot.”',
  },
  {
    id: 'token-02',
    number: '02',
    title: 'Dynamo: 30 Minutes Vanished',
    date: 'Oct 2, 6:00 AM',
    category: 'The Encounter',
    frontSnippet: 'Popped a pill, having the time of my life, phone in pocket.',
    secretDetail: 'Twinkle arriving from Salud. Dancing from 6:00 to 6:30 AM without noticing the seconds tick by.',
    pranjalThought: '“For five seconds I thought she drove all the way just for me. Doesn’t matter—that dance made the whole trip.”',
  },
  {
    id: 'token-03',
    number: '03',
    title: 'The Aura Afterparty',
    date: 'Oct 2, 6:45 AM',
    category: 'Afterhours',
    frontSnippet: 'Wasn’t initially in the mood for another club, but she asked.',
    secretDetail: 'Paying entry for the boys, chasing the bass just because Twinkle invited me.',
    pranjalThought: '“When a girl like that invites you, you don’t go home to sleep. You go straight in.”',
  },
  {
    id: 'token-04',
    number: '04',
    title: 'Salud Sunrise Till 8:00 AM',
    date: 'Oct 3, 7:00 AM',
    category: 'Patience & Sun',
    frontSnippet: 'Dancing all night wondering where she was, waiting for hours.',
    secretDetail: 'She arrived at 7:00 AM and somehow convinced all of us to stay till 8:00 AM on the quiet terrace as the light shifted.',
    pranjalThought: '“Other people were around, but my head was locked in on her. I needed to take her on a proper date.”',
  },
  {
    id: 'token-05',
    number: '05',
    title: 'The One-Hour Date Wait',
    date: 'Oct 4, 9:30 PM',
    category: 'The Date',
    frontSnippet: 'Arrived sharply on time at 9:30 PM. Waited an entire extra hour.',
    secretDetail: 'Zero frustration, zero impatience. When a man genuinely likes a woman, waiting an hour is the easiest choice in the world.',
    pranjalThought: '“Take your time, Twinkle. I’m not going anywhere.”',
  },
  {
    id: 'token-06',
    number: '06',
    title: 'Nihala, Patrick & Hilltop Humidity',
    date: 'Oct 4, Late Night',
    category: 'Techno Raves',
    frontSnippet: 'Nihala’s set at Salud, Patrick at Hilltop, thick Goa humidity.',
    secretDetail: 'Smoking a hash joint with Puppet, meeting her DJ friends, and happily dancing solo while she greeted everyone.',
    pranjalThought: '“I loved the music, but I loved seeing her show up for her friends even more.”',
  },
  {
    id: 'token-07',
    number: '07',
    title: 'The Sand Slip beside Aura',
    date: 'Oct 5, 2:00 AM',
    category: 'The Centerpiece',
    frontSnippet: 'Secret lane to the beach, beers, cigarettes, and deep conversation.',
    secretDetail: 'Heavy making out in the dark. Picking her up with total confidence—only for my foot to slide in the Goa sand!',
    pranjalThought: '“I can literally lift thrice her bodyweight in the gym, but the sand had other comedic plans haha.”',
  },
  {
    id: 'token-08',
    number: '08',
    title: 'Cuddles & The 10:00 AM Meeting',
    date: 'Oct 5, Morning',
    category: 'Tenderness',
    frontSnippet: 'Curling up to sleep, fighting every urge to kiss her so she could rest.',
    secretDetail: 'Barely sleeping because of a crucial 10 AM client meeting. Finishing work, then gently waking her up for checkout.',
    pranjalThought: '“Holding her was the easiest thing in the world. Rushing to a meeting after... not so much.”',
  },
  {
    id: 'token-09',
    number: '09',
    title: 'Guest-Listing the Boys at Titlee',
    date: 'Oct 5, Breakfast',
    category: 'The Thoughtfulness',
    frontSnippet: 'Breakfast at Café Cortinga after dropping her at her new place.',
    secretDetail: 'Finding out she added every single one of my friends to the Titlee guest list for her 27th birthday celebration.',
    pranjalThought: '“She was under crazy stress organizing her party, and she still made space for my people. That’s special.”',
  },
  {
    id: 'token-10',
    number: '10',
    title: '5:08 AM Airport WhatsApp',
    date: 'Oct 6, 5:08 AM',
    category: 'The Promise',
    frontSnippet: 'Cab ride on ecstasy listening to CamelPhat, flight departing soon.',
    secretDetail: 'Standing under the departure board: “thankyou for everything twinkle... if it’s meant to be, we will cross paths again <33”.',
    pranjalThought: '“We are definitely not done yet. See you on November 22.”',
  },
];

const FAVORITES_STORAGE_KEY = 'twinkle_fav_tokens';

export const MemoryTokens: React.FC = () => {
  const [activeTokenId, setActiveTokenId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) setFavorites(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = { ...favorites, [id]: !favorites[id] };
    setFavorites(updated);
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <section id="memories" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101014] border-t border-[#A7A0A0]/15">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BD9B] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#B88C91]" />
            <span>Interactive Memory Vault · 10 Moments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F4EEE5] tracking-tight">
            Ten Unforgettable Goa Tokens
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base font-serif italic text-[#A7A0A0]">
            Tap any memory token to open the inner story and Pranjal&apos;s unfiltered thoughts from that exact moment.
          </p>
        </div>

        {/* Tokens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOKENS.map((token) => {
            const isExpanded = activeTokenId === token.id;
            const isFav = Boolean(favorites[token.id]);

            return (
              <div
                key={token.id}
                onClick={() => setActiveTokenId(isExpanded ? null : token.id)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between text-left ${
                  isExpanded
                    ? 'bg-gradient-to-b from-[#18171B] to-[#121115] border-[#D5BD9B]/50 shadow-[0_10px_35px_rgba(213,189,155,0.1)] ring-1 ring-[#D5BD9B]/30'
                    : 'bg-[#141317] border-[#A7A0A0]/15 hover:border-[#D5BD9B]/30 hover:bg-[#18171B]'
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-mono text-[#D5BD9B] tracking-wider uppercase">
                      Moment #{token.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#A7A0A0]">{token.category}</span>
                      <button
                        onClick={(e) => toggleFavorite(e, token.id)}
                        className="p-1 rounded-full hover:bg-white/5 transition-colors"
                        title={isFav ? 'Favorited memory' : 'Mark as favorite memory'}
                      >
                        <Heart
                          className={`w-4 h-4 transition-transform ${
                            isFav
                              ? 'text-[#E11D48] fill-[#E11D48] scale-110'
                              : 'text-[#A7A0A0] group-hover:text-white'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-[#F4EEE5] mb-2 leading-snug">
                    {token.title}
                  </h3>

                  {/* Date & Time */}
                  <div className="flex items-center gap-1.5 text-xs text-[#B88C91] font-mono mb-4">
                    <Clock className="w-3 h-3" />
                    <span>{token.date}</span>
                  </div>

                  {/* Front Snippet */}
                  <p className="text-sm font-sans text-[#F4EEE5]/80 leading-relaxed mb-4">
                    {token.frontSnippet}
                  </p>

                  {/* Expanded Secret Detail & Pranjal's Thought */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-[#A7A0A0]/15 space-y-3 animate-fade-in">
                      <div className="text-xs text-[#D5BD9B] font-serif leading-relaxed">
                        <strong className="block font-mono text-[10px] uppercase tracking-wider text-[#A7A0A0] mb-1">
                          The Unfiltered Detail:
                        </strong>
                        {token.secretDetail}
                      </div>

                      <div className="p-3 rounded-lg bg-[#101014] border border-[#A7A0A0]/15 text-xs font-serif italic text-[#E2E8F0]">
                        {token.pranjalThought}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Prompt */}
                <div className="mt-4 pt-3 border-t border-[#A7A0A0]/10 flex items-center justify-between text-[11px] text-[#A7A0A0]">
                  <span className="font-mono">
                    {isExpanded ? 'Tap to collapse' : 'Tap to reveal secret note'}
                  </span>
                  <Compass className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180 text-[#D5BD9B]' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
