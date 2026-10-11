import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  wittyResponseCorrect: string;
  wittyResponseWrong: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What was Pranjal eating when he first stumbled across your Hinge profile?',
    options: [
      'Butter Chicken & Garlic Naan',
      'Paneer & Rice (Pre-Rave fuel)',
      'Midnight Maggi & Chai',
      'Wood-fired Margherita Pizza',
    ],
    correctIndex: 1,
    wittyResponseCorrect: 'Bingo! The most glamorous romantic origin story in history: waiting for paneer and rice.',
    wittyResponseWrong: 'Nope! It was paneer and rice of all things. Romance starts in the most random food orders.',
  },
  {
    id: 2,
    question: 'Why did you actually walk into Dynamo at 6:00 AM?',
    options: [
      'You drove all the way just to see Pranjal',
      'Your DJ friend was there & Salud/Aura was boring',
      'You got completely lost looking for your stay',
      'Pranjal begged you 100 times in DMs',
    ],
    correctIndex: 1,
    wittyResponseCorrect: 'Spot on! For five seconds Pranjal flattered himself, until you set the record straight haha.',
    wittyResponseWrong: 'Nice try! As you made sure to clarify, your DJ friend was playing and Salud had gotten slow.',
  },
  {
    id: 3,
    question: 'What superpower did you pull off at Salud the next morning?',
    options: [
      'Convinced Pranjal and the boys to stay till 8:00 AM on the terrace',
      'Took over the Pioneer CDJ console yourself',
      'Ordered breakfast for 15 strangers',
      'Disappeared like a ninja at 6:01 AM',
    ],
    correctIndex: 0,
    wittyResponseCorrect: 'Exactly. You effortlessly convinced us to wait till 8:00 AM just to spend time together.',
    wittyResponseWrong: 'Nope! You kept all the boys on the terrace till 8:00 AM in the morning sun.',
  },
  {
    id: 4,
    question: 'What happened on the beach when Pranjal tried to sweep you off your feet?',
    options: [
      'A rogue wave hit both of your shoes',
      'His foot slipped in the sand despite gym strength',
      'He dropped his beer bottle into the tide',
      'You were too heavy to lift',
    ],
    correctIndex: 1,
    wittyResponseCorrect: 'Haha yes! He can lift 3x your weight in the gym, but the Goa sand had other comedic plans.',
    wittyResponseWrong: 'Incorrect! The sand betrayed him and his foot slid right out from under him haha.',
  },
  {
    id: 5,
    question: 'What time was the famous airport departure WhatsApp text sent?',
    options: ['2:45 AM', '4:15 AM', '5:08 AM', '7:30 AM'],
    correctIndex: 2,
    wittyResponseCorrect: '5:08 AM sharp! “if it’s meant to be, we will cross paths again <33”.',
    wittyResponseWrong: 'Wrong clock! It was 5:08 AM while listening to CamelPhat at the gate.',
  },
];

export const GoaQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#141317] border-t border-[#A7A0A0]/15">
      <div className="max-w-2xl mx-auto space-y-10 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BD9B] font-medium">
          <HelpCircle className="w-3.5 h-3.5 text-[#B88C91]" />
          <span>Twinkle’s Memory Check · Interactive Trivia</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4EEE5] tracking-tight">
            How Well Do You Remember Goa?
          </h2>
          <p className="text-sm font-serif italic text-[#A7A0A0]">
            A 5-question test of our chaos, music, and comedy in Goa.
          </p>
        </div>

        {!isFinished ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#18171B] border border-[#A7A0A0]/20 shadow-2xl text-left space-y-6">
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs font-mono text-[#D5BD9B]">
              <span>Question {currentIdx + 1} of {QUESTIONS.length}</span>
              <span>Score: {score}</span>
            </div>

            <div className="w-full bg-[#101014] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#682D3A] via-[#B88C91] to-[#D5BD9B] h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-serif text-[#F4EEE5] leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, optIdx) => {
                const isChosen = selectedOption === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;
                let btnStyle = 'bg-[#101014] border-[#A7A0A0]/15 text-[#F4EEE5] hover:border-[#D5BD9B]/40 hover:bg-[#1E1D22]';

                if (selectedOption !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-[#064E3B]/60 border-[#10B981] text-[#86EFAC]';
                  } else if (isChosen) {
                    btnStyle = 'bg-[#881337]/60 border-[#F43F5E] text-[#FECDD3]';
                  } else {
                    btnStyle = 'opacity-40 border-transparent bg-[#101014] text-[#A7A0A0]';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={selectedOption !== null}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-sans flex items-center justify-between transition-all ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {selectedOption !== null && isCorrect && (
                      <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                    )}
                    {selectedOption !== null && isChosen && !isCorrect && (
                      <XCircle className="w-4 h-4 text-[#F43F5E] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback Note */}
            {showExplanation && (
              <div className="p-4 rounded-xl bg-[#101014] border border-[#A7A0A0]/15 space-y-3 animate-fade-in">
                <p className="text-sm font-serif italic text-[#D5BD9B]">
                  {selectedOption === currentQ.correctIndex
                    ? currentQ.wittyResponseCorrect
                    : currentQ.wittyResponseWrong}
                </p>
                <div className="text-right">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 text-xs font-medium rounded-lg bg-[#682D3A] text-white hover:bg-[#831843] transition-colors"
                  >
                    {currentIdx < QUESTIONS.length - 1 ? 'Next Question →' : 'See Final Score 🏆'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#18171B] border border-[#D5BD9B]/40 shadow-2xl space-y-6 text-center animate-fade-in">
            <Trophy className="w-12 h-12 text-[#D5BD9B] mx-auto animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EEE5]">
              You scored {score} out of {QUESTIONS.length}!
            </h3>
            <p className="text-base font-serif italic text-[#D5BD9B]">
              {score >= 4
                ? 'Certified Goa Techno Legend! You clearly paid attention to every moment.'
                : 'Not bad! Some memories got lost in the bass, but November 22 will give us plenty more.'}
            </p>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101014] hover:bg-[#682D3A] border border-[#A7A0A0]/20 text-xs font-medium text-[#F4EEE5] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Play Again</span>
              </button>
              <a
                href="#wishlist"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#682D3A] hover:bg-[#831843] text-xs font-medium text-white transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Build November 22 Wishlist →</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
