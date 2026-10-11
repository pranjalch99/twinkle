export interface StoryChapterData {
  id: string;
  chapterNumber: string;
  chapterLabel: string;
  date: string;
  title: string;
  location: string;
  paragraphs: string[];
  pullQuote?: string;
  photoIds?: string[];
  theme: 'dark' | 'paper' | 'deep-noir';
  privateFootnote: {
    label: string;
    note: string;
    quote: string;
  };
  metric: {
    value: string;
    label: string;
    sublabel: string;
  };
  vibeTag: string;
}

export const DEDICATION = {
  kicker: 'FOR TWINKLE · OCTOBER 6, 2026',
  heading: 'For Twinkle.',
  body: [
    'Happy 27th birthday, Twinkle.',
    'I wanted to give you something a little different. Not another thing to store on a shelf or lose in a drawer, but a small piece of a memory.',
    'A reminder of a few unexpectedly beautiful days in Goa, of the music, the madness, the early-morning conversations, and the girl I first came across while doing something as ordinary as scrolling through Hinge and waiting for my paneer and rice.',
    'Funny how life works sometimes.',
    'This little corner of the internet is my way of keeping those moments somewhere we can always revisit them. Made with love, a touch of nostalgia, and a rather ridiculous amount of affection.',
  ],
  signoff: '— Pranjal',
};

export const STORY_CHAPTERS: StoryChapterData[] = [
  {
    id: 'chapter-01',
    chapterNumber: '01',
    chapterLabel: 'THE UNLIKELY BEGINNING',
    date: 'October 2, 2026 · Goa',
    location: 'Anjuna Pre-Rave',
    title: 'It started with paneer and rice.',
    paragraphs: [
      'I was sitting with the boys before the rave, waiting for our food order to arrive—paneer and rice, of all things—and scrolling through Hinge mostly because I was bored and killing time.',
      'That’s when I saw you for the first time. The immediate thought that crossed my mind was instant: this girl is gorgeous, she’s a techno baddie, and she’s a software engineer just like me. Three for three.',
      'I found your Instagram and decided to shoot my shot with a DM. You took your time to reply, and to be completely honest, our opening exchange was pretty chilly. There was almost zero reason to expect our paths would ever actually cross that week.',
      'Romance, apparently, begins with dinner plans, high hopes, and questionable screen time.',
    ],
    pullQuote: 'Romance, apparently, begins with dinner plans and questionable screen time.',
    theme: 'dark',
    vibeTag: 'Pre-Rave Anticipation · Anjuna',
    metric: {
      value: '3 for 3',
      label: 'Compatibility Check',
      sublabel: 'Gorgeous + Techno Baddie + Fellow SDE',
    },
    privateFootnote: {
      label: 'Pranjal’s Mind at Dinner',
      note: 'I actually stared at my screen for two full minutes wondering what line would make an impression. The DM was sent with very little expectation because you seemed way out of reach, but sometimes taking the chance is the only move.',
      quote: '“Even with the cold initial reply, I was quietly glad I shot my shot.”',
    },
  },
  {
    id: 'chapter-02',
    chapterNumber: '02',
    chapterLabel: 'THE UNEXPECTED APPEARANCE',
    date: 'October 2, 2026 · 6:00 AM',
    location: 'Dynamo & Aura, Goa',
    title: 'Thirty minutes that disappeared.',
    paragraphs: [
      'I went back home, showered, got dressed, and headed straight to Dynamo with the crew. I popped a pill, the music took over, and I was genuinely having the time of my life. My phone was the last thing on my radar.',
      'At some point you had texted asking how Dynamo was. I dropped a quick reply, you said "nice," and I went right back to dancing. Little did I imagine that you would actually walk through those doors.',
      'You had come all the way from Salud. For about five flattering seconds, I flattered myself thinking you had shown up just to see me. You quickly set the record straight: one of your DJ friends was playing here and you were bored at Salud. Fair enough.',
      'We danced together from 6:00 to 6:30 AM, and those thirty minutes simply evaporated. We smiled, we flirted, we moved to the bass. When you had to leave, I kissed you goodbye. Then you invited me to the afterparty at Aura—and even though I wasn’t initially planning on it, the moment you asked, I just had to go.',
    ],
    pullQuote: 'Those thirty minutes simply evaporated. We danced, we smiled, and suddenly the night had an entirely different centre of gravity.',
    theme: 'dark',
    vibeTag: 'Dynamo Red Lights · 128 BPM Techno',
    metric: {
      value: '30 Mins',
      label: 'Time on Dance Floor',
      sublabel: 'Felt like 3 seconds · 6:00 AM to 6:30 AM',
    },
    privateFootnote: {
      label: 'Behind The Scenes at 6:15 AM',
      note: 'When you walked in through that red lighting, I completely forgot about the rest of the club. And when you invited me to Aura afterparty, there was zero hesitation—the boys and I paid the entry fee without a grumble just to be where you were.',
      quote: '“I kissed you goodbye as you left Dynamo, but my night was already rewired around you.”',
    },
  },
  {
    id: 'chapter-03',
    chapterNumber: '03',
    chapterLabel: 'THE NIGHT BECAME ABOUT YOU',
    date: 'October 3, 2026 · 7:00 AM',
    location: 'Salud, Goa',
    title: 'I kept looking for you.',
    paragraphs: [
      'Salud happened the next night on October 3. You weren’t there when we got in. I was dancing, having a blast with my friends, and plenty of people were around—but my head and heart were already stuck on one question: where were you?',
      'I spent hours anticipating you walking through the crowd. And then, right around 7:00 in the morning as the sun was beginning to break, you finally arrived.',
      'You somehow possessed this effortless superpower to convince me and the boys to stay all the way until 8:00 AM just so we could spend time together. We wandered up to a quiet spot on the terrace, had the sweetest conversation as the light changed, and I kissed you goodbye.',
      'By the time I walked down those stairs, I had arrived at a very simple, unavoidable conclusion: I needed to take you out on a proper date.',
    ],
    pullQuote: 'By then, I had reached a fairly simple conclusion. I needed to take you on a proper date.',
    theme: 'dark',
    vibeTag: 'Sunrise Terrace · Ozran Cliff',
    metric: {
      value: '8:00 AM',
      label: 'Stayed Till Sunrise',
      sublabel: 'Effortlessly convinced us to stay for quiet talks',
    },
    privateFootnote: {
      label: 'Pranjal’s Morning Revelation',
      note: 'Waiting until 7:00 AM in a club isn’t something I normally do for anyone. But the moment you walked onto that terrace and we leaned against the railing in the morning sunlight, every minute of waiting made total sense.',
      quote: '“Plenty of people were around, but you were the only one I kept scanning the room for.”',
    },
  },
  {
    id: 'chapter-04',
    chapterNumber: '04',
    chapterLabel: 'YOUR WORLD, MY KIND OF NIGHT',
    date: 'October 4, 2026 · 9:30 PM',
    location: 'Salud & Hilltop, Goa',
    title: 'I came for the date. I stayed for all of it.',
    paragraphs: [
      'The date was set for 9:30 PM. I showed up right on time, looking sharp and ready. You made me wait for another hour. But my heart was already locked in; when a man genuinely likes a woman, waiting an hour isn’t patience—it’s an easy choice.',
      'I took you and Nihala to Salud where Nihala was playing an incredible set alongside Zubin. I met your DJ friends, soaked in the crowd, and honestly loved the music so much that I didn’t care in the slightest when you slipped away to catch up with them. Seeing you in your element was half the fun.',
      'From there we moved to Hilltop for Patrick’s set. Lord, Hilltop was suffocatingly humid, but I admired how much you showed up for the people you care about. I met Puppet, we shared a hash joint, and despite the chaos, I could see how deeply rooted your friendship was.',
      'You and Puppet were stressing over your upcoming birthday party at Titlee, but even in that tension, there was something undeniably sweet about the way you held everything together.',
    ],
    pullQuote: 'And somewhere between the music, the humidity, and the chaos of Goa, I found myself wanting to know the person behind that beautiful face.',
    theme: 'dark',
    vibeTag: 'Nihala’s Set & Patrick at Hilltop',
    metric: {
      value: '60 Mins',
      label: 'Wait Time with Zero Complaints',
      sublabel: 'When you like someone, patience comes easy',
    },
    privateFootnote: {
      label: 'Standing Outside Waiting',
      note: 'Most people would get annoyed waiting an hour. I just smiled to myself, listened to the distant beats, and felt happy that the date was happening at all. And seeing you show up for your DJ friends made me respect you even more.',
      quote: '“Seeing you in your element was worth every minute of the wait.”',
    },
  },
  {
    id: 'chapter-05',
    chapterNumber: '05',
    chapterLabel: 'WHEN THE MUSIC FINALLY FELL QUIET',
    date: 'October 5, 2026 · Late Night',
    location: 'Secret Lane by Aura & The Beach',
    title: 'Just you, me, and a little corner of Goa.',
    paragraphs: [
      'After Hilltop, we finally decided to actually begin our date in earnest. We walked toward a quiet, narrow lane right beside Aura that opened up directly to the beach.',
      'We grabbed a couple of beers and cigarettes, sat down near the water, and talked for hours. The clubs, the basslines, the crowds—all of it faded into the background. For the first time, it was just the two of us discovering each other.',
      'We made out heavily at the corner until we noticed footsteps approaching. In a moment of pure confidence, I picked you up—and my foot immediately slipped in the sand. I know for a fact I can lift thrice your bodyweight, but the Goa sand clearly had its own comedic timing.',
      'We laughed, headed to your place so you could grab your things and change, and then went back to mine where we curled up to cuddle and sleep. It was almost impossible to just lie there holding you without wanting to kiss you every two seconds, but I knew you needed rest.',
      'I barely slept myself—I had an important 10:00 AM meeting to run. I handled my call, woke you up gently so you could check out, and helped you get sorted for your next stay.',
    ],
    pullQuote: 'Somewhere between the music and the sea, I stopped thinking about the night and started thinking about you.',
    theme: 'paper',
    vibeTag: 'Secret Beach Lane · Waves & Beers',
    metric: {
      value: '3x Weight',
      label: 'Gym Strength vs Goa Sand',
      sublabel: 'Lost all friction in the tide, gained a core memory',
    },
    privateFootnote: {
      label: 'The Sand Slip & The Cuddle',
      note: 'I will never live down that sand slip! I deadlift heavy in the gym, but that wet sand betrayed me right as I went for the cinematic hero lift haha. But lying next to you after, fighting the urge to kiss you so you could get your sleep—that was pure warmth.',
      quote: '“Holding you was the easiest thing in the world. Rushing to a 10 AM client call right after... not so much.”',
    },
  },
  {
    id: 'chapter-06',
    chapterNumber: '06',
    chapterLabel: 'THE LITTLE THINGS',
    date: 'October 5, 2026 · Morning',
    location: 'Café Cortinga, Goa',
    title: 'A sleepy morning and a thoughtful invitation.',
    paragraphs: [
      'The boys and I dropped you off at your new stay, and then we headed over to Café Cortinga for breakfast in the morning breeze.',
      'That’s when I noticed another thing about you: you had invited me and all my friends to your birthday party at Titlee the following night, putting every single one of them on the guest list.',
      'You were already juggling a hundred moving parts, organizing your own party, and handling the stress—and yet you made sure my people were welcomed as your people.',
      'I notice the little things. And that small gesture said so much about who you are.',
    ],
    pullQuote: 'I notice the little things. And that small gesture said so much about who you are.',
    theme: 'paper',
    vibeTag: 'Café Cortinga Breakfast · Morning Sun',
    metric: {
      value: 'All Boys',
      label: 'Titlee Guest List',
      sublabel: 'Welcomed my crew like your own lifelong friends',
    },
    privateFootnote: {
      label: 'Over Morning Coffee',
      note: 'Most people in the middle of birthday stress would barely remember someone they met two nights ago. You took care of my friends without even having to think twice. It was one of the sweetest gestures of the trip.',
      quote: '“That quiet kindness told me more about your heart than anything else.”',
    },
  },
  {
    id: 'chapter-07',
    chapterNumber: '07',
    chapterLabel: 'YOUR BIRTHDAY, YOUR PEOPLE',
    date: 'October 6, 2026 · Twinkle turns 27',
    location: 'Titlee & House Party, Goa',
    title: 'Getting to see you in your element.',
    paragraphs: [
      'Walking into Titlee on October 6, my eyes went straight to finding you. When I did, you looked breathtaking in your black dress and your "Birthday Girl" sash, smiling from ear to ear.',
      'I intentionally gave you space because it was your night, your milestone, and your friends. Watching you pull off an entire party while tripping on LSD was nothing short of legendary.',
      'After Titlee wrapped up, we migrated over to Pandey’s place for the after-hours house party. You were surrounded by your close friends, and the clock was ticking down with brutal speed—I had an airport cab waiting in barely an hour.',
      'For one crazy second, I genuinely debated canceling my flight and staying in Goa. My friends would have murdered me on the spot, but the thought crossed my mind nonetheless. I found you, hugged you tight, and kissed you goodbye.',
    ],
    pullQuote: 'For a second I considered canceling my flight. My friends would have killed me, but you had made it very hard to leave.',
    theme: 'dark',
    vibeTag: 'Titlee Crimson Lighting · Birthday Girl Sash',
    metric: {
      value: '27th',
      label: 'Milestone Birthday',
      sublabel: 'Black dress, birthday sash & legendary composure',
    },
    privateFootnote: {
      label: 'Pandey’s Living Room at 3:30 AM',
      note: 'Standing by the door watching the clock tick toward my 4:30 AM cab, I actually opened the airline app to see what it would cost to stay another 48 hours. The rational side of my brain won, but only barely.',
      quote: '“You made it very, very hard to get into that airport cab.”',
    },
  },
  {
    id: 'chapter-08',
    chapterNumber: '08',
    chapterLabel: 'THE PART WHERE I DIDN’T WANT TO LEAVE',
    date: 'October 6, 2026 · 5:08 AM',
    location: 'Goa International Airport',
    title: 'I went home, but my mind stayed in Goa.',
    paragraphs: [
      'The car ride to the airport was surreal. The post-festival rush, friends dozing off, and CamelPhat’s emotional techno playing through the speakers. All I could think about was how ridiculously lucky I had been to run into you.',
      'I hadn’t come to Goa looking for someone. It had started with paneer and rice, a random Hinge profile, and an Instagram DM. And now, on my way to the gate, you were all I could think about.',
      'At 5:08 AM, standing under the departure board with the IndiGo and Akasa flights flashing above me, I took a picture and sent it to you on WhatsApp:',
      '“thankyou for everything twinkle, had some of the most beautiful times with you. if it’s meant to be, we will cross paths again <33”',
      'You wished me a safe flight. And standing there with my boarding pass, I knew right then: we weren’t done yet.',
    ],
    pullQuote: 'One last message from Goa. One more reason to look forward to what comes next.',
    theme: 'deep-noir',
    vibeTag: 'Airport Gate · 5:08 AM Departure Text',
    metric: {
      value: '5:08 AM',
      label: 'The Airport Text',
      sublabel: '“if it’s meant to be, we will cross paths again <33”',
    },
    privateFootnote: {
      label: 'Standing Under the Boarding Screen',
      note: 'The terminal was cold and fluorescent after five days of warm bass and humid air. Typing out that WhatsApp text was my way of keeping the door open. When you replied wishing me a safe flight with that warm signoff, I smiled all the way to my seat.',
      quote: '“Walking onto the plane, I already knew Mumbai was on my schedule.”',
    },
  },
  {
    id: 'chapter-09',
    chapterNumber: '09',
    chapterLabel: 'TO BE CONTINUED',
    date: 'Present Day · October 2026',
    location: 'Bhopal ⟵ 1,000 km ⟶ Mumbai (Mulund West)',
    title: 'From Bhopal to Mumbai.',
    paragraphs: [
      'And here we are.',
      'I’m back in Bhopal. You’re in Mumbai.',
      'Goa has settled into a collection of vivid memories: the red lights at Dynamo, the 8:00 AM sunrise terrace at Salud, the heavy humidity at Hilltop, the secret lane beside Aura, the beach sand, the laughter, the cuddles, and that 5:08 AM airport message.',
      'Your twenty-seventh birthday has passed, and I wanted to give you something that wasn’t just another store-bought object you’d place on a shelf. I wanted to give you a little piece of the beginning.',
      'Something you can open whenever you want to revisit those days. Something to remind you of how unexpectedly you entered my world, and how much I enjoyed discovering the real person behind the profile I first saw while waiting for my dinner.',
      'I don’t know what the future holds, and I don’t believe every beautiful beginning needs a hundred heavy promises. But I do know that meeting you made Goa unforgettable. I know that I loved spending time with you. And I know that you became someone I am genuinely, happily looking forward to seeing again.',
      'November 22. That’s the next date on my calendar with a little extra spark attached to it.',
      'Until then, you have Mumbai, I have Bhopal, and we have this piece of Goa that no flight home can take away. Happy 27th birthday, Twinkle.',
    ],
    pullQuote: 'Here’s to finding out what happens when the music fades, the sun comes up, and two people decide to meet one more time.',
    theme: 'paper',
    vibeTag: 'Bhopal to Mulund West · November 22 Countdown',
    metric: {
      value: 'Nov 22',
      label: 'Reunion in Mumbai',
      sublabel: 'Marked on the calendar with extra excitement',
    },
    privateFootnote: {
      label: 'Writing this from Bhopal',
      note: 'Building this web app was the most fun project I worked on all year. Every line of code, every memory token, and every quote came straight from that week in Goa. Can’t wait to see your smile in Mumbai.',
      quote: '“See you on November 22, Twinkle.”',
    },
  },
];
