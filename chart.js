const options = {
  series: [
    {
      name: "Evoli",
      data: [67, 34, 38, 35, 90],
    },
  ],
  xaxis: {
    categories: ["Intelligence", "Strength", "Defense", "Speed", "Cuteness"],
    labels: {
      style: {
        colors: [],
        fontSize: "12px",
        fontFamily: "Raleway",
        fontWeight: 400,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  yaxis: {
    show: false,
  },
  colors: ["#C08C5B"],
  chart: {
    height: 500,
    type: "radar",
    animations: {
      enabled: true,
      easing: "linear",
      speed: 1000,
      animateGradually: {
        enabled: true,
        delay: 200,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 100,
      },
    },
  },
};

export {options};
