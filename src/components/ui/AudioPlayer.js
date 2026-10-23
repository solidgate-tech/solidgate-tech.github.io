import { useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";

// Only one clip plays at a time across the page
let playingAudio = null;

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
};

export function AudioPlayer({ src, label }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      if (playingAudio === audio) playingAudio = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      // play() rejects when interrupted (e.g. navigating away); nothing to recover
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const onPlay = () => {
    const audio = audioRef.current;
    if (playingAudio && playingAudio !== audio) playingAudio.pause();
    playingAudio = audio;
    setPlaying(true);
  };

  const onSeek = (e) => {
    const audio = audioRef.current;
    audio.currentTime = Number(e.target.value);
    setCurrent(audio.currentTime);
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={onPlay}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
      >
        Your browser does not support the audio element.
      </audio>
      <button
        type="button"
        className={styles.play}
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"}: ${label}`}
      >
        {playing ? (
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <rect x="4" y="3" width="4" height="14" rx="1" />
            <rect x="12" y="3" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5 2.5v15l13-7.5z" />
          </svg>
        )}
      </button>
      <div className={styles.track}>
        <input
          type="range"
          className={styles.range}
          min="0"
          max={duration || 0}
          step="0.1"
          value={current}
          onChange={onSeek}
          aria-label={`Seek: ${label}`}
          aria-valuetext={`${formatTime(current)} of ${formatTime(duration)}`}
          style={{ "--progress": `${progress}%` }}
        />
        <div className={styles.times}>
          <span>{formatTime(current)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
