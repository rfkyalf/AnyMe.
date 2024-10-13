import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Slider = ({
  handleNext,
  handlePrev,
}: {
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  return (
    <>
      <button
        onClick={handlePrev}
        className="absolute left-[18px] top-1/2 transform -translate-y-1/2 text-neutral-500 hover:scale-110 transition-all duration-300 ease-in-out hover:text-neutral-300"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:scale-110 transition-all duration-300 ease-in-out hover:text-neutral-300"
      >
        <ChevronRight size={40} />
      </button>
    </>
  );
};

export const Indicatior = ({
  topAnime,
  activeIndex,
  handleIndicatorClick,
}: {
  topAnime: any;
  activeIndex: number;
  handleIndicatorClick: (index: number) => void;
}) => {
  return (
    <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-x-2">
      {topAnime.map((_: any, index: number) => (
        <button
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`size-2 rounded-full ${
            activeIndex === index
              ? 'bg-neutral-100 size-[10px]'
              : 'bg-neutral-500'
          }`}
        />
      ))}
    </div>
  );
};
