import { ReactNode, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

type sliderChart = {
  saleCartSliderItem: ReactNode[];
};
function ChartSlider({ saleCartSliderItem }: sliderChart) {
  const [ChartIndex, setChartIndex] = useState(0);

  function PrevSlide() {
    setChartIndex((index) => {
      if (index === 0) return saleCartSliderItem.length - 1;
      return index - 1;
    });
  }

  function NextSlide() {
    setChartIndex((index) => {
      if (index === saleCartSliderItem.length - 1) return 0;
      return index + 1;
    });
  }

  console.log(saleCartSliderItem);

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="sliderButton " onClick={PrevSlide}>
        <GrPrevious />
      </div>

      <main>{saleCartSliderItem[ChartIndex]}</main>
      <div className="sliderButton " onClick={NextSlide}>
        <GrNext />
      </div>
    </div>
  );
}

export default ChartSlider;
