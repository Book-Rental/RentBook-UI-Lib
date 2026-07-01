interface TrackProps {
    left: number;
    right: number;
    trackRef: React.RefObject<HTMLDivElement>;
}

const Track = ({
  left,
  right,
  trackRef,
}: TrackProps) => {
  return (
    <div
      ref={trackRef}
      className="slider-track-container"
    >
      <div className="slider-track" />

      <div
        className="slider-range"
        style={{
          left: `${left}%`,
          width: `${right - left}%`,
        }}
      />
    </div>
  );
};

export default Track;