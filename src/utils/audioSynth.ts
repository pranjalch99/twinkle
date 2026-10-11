// Ambient Procedural Techno & Melodic Pad Synthesizer (100% Web Audio API)
// Inspired by CamelPhat and Goa early-morning sunrise sets

class AmbientSynthEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = true;

    // Chords progression (F minor -> Ab major -> Eb major -> Bb minor - evocative melodic techno chords)
    const chords = [
      [174.61, 207.65, 261.63, 349.23], // Fm
      [207.65, 261.63, 311.13, 415.30], // Ab
      [155.56, 196.00, 233.08, 311.13], // Eb
      [116.54, 146.83, 174.61, 233.08], // Bbm
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const currentChord = chords[chordIndex];
      chordIndex = (chordIndex + 1) % chords.length;

      const chordGain = this.ctx.createGain();
      chordGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      chordGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 1.5);
      chordGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 4.8);
      chordGain.connect(this.masterGain);

      currentChord.forEach((freq) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 2.0);
        filter.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + 4.8);

        osc.connect(filter);
        filter.connect(chordGain);

        osc.start();
        osc.stop(this.ctx.currentTime + 5.0);
      });

      // Subtle heartbeat pulse
      this.playSubPulse();
    };

    playChord();
    this.intervalId = window.setInterval(playChord, 5000);
  }

  private playSubPulse() {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.7);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
    }
  }
}

export const synthEngine = new AmbientSynthEngine();
