interface ThumbProps {
    left: number;
    onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
}

const Thumb = ({ left, onPointerDown }: ThumbProps) => {
  return (
    <div
      className="slider-thumb"
      style={{
        left: `${left}%`,
      }}
      onPointerDown={onPointerDown}
      tabIndex={0}
    />
  );
};

export default Thumb;