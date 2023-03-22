const options = {
  series: [
    {
      name: "Evoli",
      data: [67, 34, 38, 35, 90],
    },
    {
      name: "Voltali",
      data: [34, 93, 42, 89, 37],
    },
    {
      name: "Pyroli",
      data: [56, 78, 54, 74, 56],
    },
    {
      name: "Aquali",
      data: [65, 60, 89, 53, 40],
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
  colors: ["#C08C5B", "#E9BC2E", "#FFA948", "#879CC6"],
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
