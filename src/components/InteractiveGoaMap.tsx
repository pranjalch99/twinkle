import React, { useState } from 'react';
import { MapPin, Clock, Compass, Sparkles, Navigation } from 'lucide-react';

interface Venue {
  id: string;
  name: string;
  area: string;
  date: string;
  time: string;
  vibe: string;
  cx: number;
  cy: number;
  storySnippet: string;
  quote: string;
}

const VENUES: Venue[] = [
  {
    id: 'pre-rave',
    name: 'Pre-Rave Dinner Spot',
    area: 'Anjuna',
    date: 'Oct 2, 2026',
    time: 'Dinner',
    vibe: 'Paneer & Rice + Hinge Scroll',
    cx: 410,
    cy: 390,
    storySnippet:
      'Waiting for dinner with the boys, bored, swiping on Hinge. Spotting Twinkle—hot, techno baddie, fellow SDE. The Instagram DM that started it all.',
    quote: '“Romance, apparently, begins with dinner plans and questionable screen time.”',
  },
  {
    id: 'dynamo',
    name: 'Dynamo Club',
    area: 'Vagator',
    date: 'Oct 2, 2026',
    time: '6:00 AM – 6:30 AM',
    vibe: 'Crimson Lights & First Dance',
    cx: 460,
    cy: 280,
    storySnippet:
      'Popping a pill, having the time of my life, when Twinkle walks in from Salud. Dancing together for thirty unforgettable minutes that just disappeared.',
    quote: '“Those thirty minutes flew by. I kissed her goodbye as she went.”',
  },
  {
    id: 'aura',
    name: 'Aura',
    area: 'Anjuna',
    date: 'Oct 2, 2026',
    time: '6:45 AM',
    vibe: 'After-Hours Energy',
    cx: 400,
    cy: 350,
    storySnippet:
      'She invited me to the afterparty at Aura. Wasn’t originally in the mood, but because she asked, the boys and I sorted our entry and went straight in.',
    quote: '“Suddenly the night had an entirely different centre of gravity.”',
  },
  {
    id: 'salud',
    name: 'Salud',
    area: 'Ozran / Vagator Cliff',
    date: 'Oct 3 & 4, 2026',
    time: '7:00 AM – 8:00 AM & Night',
    vibe: 'Sunrise Terrace & Nihala’s Set',
    cx: 490,
    cy: 240,
    storySnippet:
      'Waiting all night for her to arrive. Twinkle convincing us to stay till 8:00 AM on the terrace. Returning the next night for Nihala & Zubin’s performance.',
    quote: '“By then, I had reached a simple conclusion: I needed to take you on a proper date.”',
  },
  {
    id: 'hilltop',
    name: 'Hilltop',
    area: 'Vagator',
    date: 'Oct 4, 2026',
    time: 'Midnight',
    vibe: 'Patrick’s Set, Heavy Humidity & Hash',
    cx: 520,
    cy: 210,
    storySnippet:
      'Humid as anything, but seeing Twinkle show up for her friends. Meeting Puppet, smoking a hash joint, and seeing their childhood bond and pre-birthday stress.',
    quote: '“I admired how much you showed up for the people you care about.”',
  },
  {
    id: 'beach-lane',
    name: 'Secret Beach Lane beside Aura',
    area: 'Anjuna Beach',
    date: 'Oct 5, 2026',
    time: 'Late Night / Dawn',
    vibe: 'Beers, Deep Talks & Sand Slip',
    cx: 350,
    cy: 370,
    storySnippet:
      'Grabbing beers and cigarettes. Hours of real conversation. Heavy making out, picking her up—and my foot slipping in the sand despite being able to lift 3x her weight!',
    quote: '“Somewhere between the music and the sea, I stopped thinking about the night and started thinking about you.”',
  },
  {
    id: 'cafe-cortinga',
    name: 'Café Cortinga',
    area: 'Anjuna',
    date: 'Oct 5, 2026',
    time: 'Morning',
    vibe: 'Breakfast & Guest List Surprise',
    cx: 420,
    cy: 420,
    storySnippet:
      'Morning breeze and breakfast after dropping her off. Discovering she had put all of my friends on the guest list for her 27th birthday at Titlee.',
    quote: '“I notice the little things. And that small gesture said so much about who you are.”',
  },
  {
    id: 'titlee',
    name: 'Titlee',
    area: 'Vagator',
    date: 'Oct 6, 2026',
    time: 'Birthday Night',
    vibe: 'Twinkle turns 27 · Birthday Girl Sash',
    cx: 480,
    cy: 260,
    storySnippet:
      'Finding her looking gorgeous in her Birthday Girl sash. Tripping on LSD while gracefully managing her own celebration. Breathtaking and unforgettable.',
    quote: '“Watching you pull off an entire party while tripping on LSD was nothing short of legendary.”',
  },
  {
    id: 'pandeys',
    name: 'Pandey’s House Party',
    area: 'Vagator',
    date: 'Oct 6, 2026',
    time: '3:30 AM',
    vibe: 'After-Party & Flight Dilemma',
    cx: 510,
    cy: 270,
    storySnippet:
      'House party with close friends. Debating for one crazy second whether to cancel my flight before the boys would kill me. A tight hug and goodbye.',
    quote: '“For a second I considered canceling my flight. You had made it very hard to leave.”',
  },
  {
    id: 'airport',
    name: 'Goa International Airport',
    area: 'Dabolim / Mopa',
    date: 'Oct 6, 2026',
    time: '5:08 AM',
    vibe: 'CamelPhat & The 5:08 AM Text',
    cx: 300,
    cy: 530,
    storySnippet:
      'Ecstasy afterglow in the cab listening to CamelPhat. Sending the 5:08 AM text under the departure screens: “if it’s meant to be, we will cross paths again <33”.',
    quote: '“And standing there with my boarding pass, I knew right then: we weren’t done yet.”',
  },
];

export const InteractiveGoaMap: React.FC = () => {
  const [activeVenueId, setActiveVenueId] = useState<string>('dynamo');
  const activeVenue = VENUES.find((v) => v.id === activeVenueId) || VENUES[0];

  return (
    <section id="goa-map" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D12] border-t border-[#A7A0A0]/15">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BD9B] font-medium">
            <Compass className="w-3.5 h-3.5 text-[#B88C91]" />
            <span>Interactive Goa Nightlife Radar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F4EEE5] tracking-tight">
            The Places That Built Our Story
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base font-serif italic text-[#A7A0A0]">
            Click on any stop along our Goa route to retrace the exact memories, timestamps, and moments.
          </p>
        </div>

        {/* Map + Detail Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Vector Map (Col 7) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#141317] border border-[#A7A0A0]/15 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-[#A7A0A0]/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D5BD9B]">
                North Goa Coastline · Vagator &amp; Anjuna
              </span>
              <span className="text-[11px] text-[#A7A0A0] flex items-center gap-1">
                <Navigation className="w-3 h-3 text-[#B88C91]" /> Click a marker
              </span>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="relative aspect-[4/3] w-full rounded-xl bg-[#09090C] border border-[#A7A0A0]/10 overflow-hidden">
              <svg viewBox="0 0 700 600" className="w-full h-full select-none">
                <defs>
                  <linearGradient id="coastGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1E1B4B" stop-opacity="0.3" />
                    <stop offset="50%" stop-color="#172554" stop-opacity="0.2" />
                    <stop offset="100%" stop-color="#020617" stop-opacity="0.4" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ocean Area */}
                <rect width="250" height="600" fill="#030712" />
                <path
                  d="M 220 0 Q 320 180 280 320 T 240 600 L 0 600 L 0 0 Z"
                  fill="url(#coastGrad)"
                />

                {/* Coastline outline */}
                <path
                  d="M 220 0 Q 320 180 280 320 T 240 600"
                  stroke="#38BDF8"
                  stroke-width="1.5"
                  stroke-opacity="0.3"
                  fill="none"
                />

                {/* Atmospheric grid lines */}
                <line x1="0" y1="150" x2="700" y2="150" stroke="#334155" stroke-opacity="0.15" stroke-dasharray="4 4" />
                <line x1="0" y1="300" x2="700" y2="300" stroke="#334155" stroke-opacity="0.15" stroke-dasharray="4 4" />
                <line x1="0" y1="450" x2="700" y2="450" stroke="#334155" stroke-opacity="0.15" stroke-dasharray="4 4" />
                <line x1="350" y1="0" x2="350" y2="600" stroke="#334155" stroke-opacity="0.15" stroke-dasharray="4 4" />

                {/* Regional Labels */}
                <text x="290" y="80" fill="#64748B" font-size="11" font-family="monospace" letter-spacing="3">CHAPORA RIVER</text>
                <text x="460" y="160" fill="#94A3B8" font-size="12" font-family="sans-serif" font-weight="600" letter-spacing="2">VAGATOR</text>
                <text x="360" y="440" fill="#94A3B8" font-size="12" font-family="sans-serif" font-weight="600" letter-spacing="2">ANJUNA</text>
                <text x="120" y="300" fill="#38BDF8" font-size="10" font-family="monospace" letter-spacing="4" opacity="0.4">ARABIAN SEA</text>

                {/* Connecting Route Arc between venues */}
                <path
                  d="M 410 390 L 460 280 L 400 350 L 490 240 L 520 210 L 350 370 L 420 420 L 480 260 L 510 270 L 300 530"
                  stroke="#682D3A"
                  stroke-width="2"
                  stroke-opacity="0.5"
                  stroke-dasharray="5 5"
                  fill="none"
                />

                {/* Venue Markers */}
                {VENUES.map((venue) => {
                  const isSelected = venue.id === activeVenueId;
                  return (
                    <g
                      key={venue.id}
                      onClick={() => setActiveVenueId(venue.id)}
                      className="cursor-pointer transition-all duration-300"
                    >
                      {/* Pulse circle for selected */}
                      {isSelected && (
                        <circle
                          cx={venue.cx}
                          cy={venue.cy}
                          r="16"
                          fill="#D5BD9B"
                          opacity="0.25"
                          className="animate-ping"
                        />
                      )}

                      {/* Pin Outer */}
                      <circle
                        cx={venue.cx}
                        cy={venue.cy}
                        r={isSelected ? 9 : 6}
                        fill={isSelected ? '#F4EEE5' : '#682D3A'}
                        stroke={isSelected ? '#D5BD9B' : '#B88C91'}
                        stroke-width="2"
                        filter={isSelected ? 'url(#glow)' : undefined}
                      />

                      {/* Text label near pin */}
                      <text
                        x={venue.cx + 12}
                        y={venue.cy + 4}
                        fill={isSelected ? '#F4EEE5' : '#94A3B8'}
                        font-size={isSelected ? '11' : '9'}
                        font-family="sans-serif"
                        font-weight={isSelected ? 'bold' : 'normal'}
                      >
                        {venue.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Venue Tabs Bar */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {VENUES.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVenueId(v.id)}
                  className={`px-2.5 py-1 text-[11px] rounded transition-all whitespace-nowrap ${
                    v.id === activeVenueId
                      ? 'bg-[#682D3A] text-white font-medium shadow-md'
                      : 'bg-[#18171B] text-[#A7A0A0] hover:text-[#F4EEE5] hover:bg-[#222126]'
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          {/* Venue Detail Card (Col 5) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#18171B] border border-[#A7A0A0]/20 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#A7A0A0]/10 pb-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D5BD9B] font-mono">
                <MapPin className="w-4 h-4 text-[#B88C91]" />
                <span>{activeVenue.area} · Goa</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#A7A0A0] font-mono">
                <Clock className="w-3.5 h-3.5 text-[#D5BD9B]" />
                <span>{activeVenue.time}</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#B88C91] font-semibold block mb-1">
                {activeVenue.date}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5] tracking-tight">
                {activeVenue.name}
              </h3>
              <p className="mt-1 text-xs text-[#D5BD9B] font-mono">
                Vibe: {activeVenue.vibe}
              </p>
            </div>

            <p className="text-base font-serif text-[#F4EEE5]/90 leading-relaxed text-pretty">
              {activeVenue.storySnippet}
            </p>

            <blockquote className="p-4 rounded-xl bg-[#101014] border border-[#A7A0A0]/15 text-sm font-serif italic text-[#D5BD9B]">
              {activeVenue.quote}
            </blockquote>

            <div className="pt-2 flex items-center justify-between text-xs text-[#A7A0A0]">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D5BD9B]" /> Real Memory Verified
              </span>
              <span className="font-mono text-[#D5BD9B]">
                Pranjal &amp; Twinkle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
