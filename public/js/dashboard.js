// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [ 
        // 10, 8, 6, 4, 2
        totalbeans.stockQuantity,
        totalmaize.stockQuantity,
        totalcowpeas.stockQuantity,
        totalgnuts.stockQuantity,
        totalrice.stockQuantity,
        totalsoybeans.stockQuantity,
        
      ],
      name: 'Products',
    },
  ],
  
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Beans', 'Grain-maize', 'Soybeans', 'Gnuts', 'Cowpeas'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// AGGREGATIONS

router.get("/dashboardm",  async (req, res) => {
  // req.session.user = req.user;
  // if (req.user.role == 'manager') {
    try {

      // instantiate a crop variable you will use to select a crop.
      let selectedProduce;
      if (req.query.searchProduce)
        selectedProduce = req.query.searchProduce
      // Query for returning all tonnage and revenue of a produce
      let items = await Procurement.find({ cropName: selectedProduce });

      // console.log("products from the db", goods)
      // console.log("products from the db after search", items)

      let totalBeans = await Procurement.aggregate([
        { $match: { cropName: 'beans' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalMaize = await Procurement.aggregate([
        { $match: { cropName: 'maize' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } },
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },


          }
        }
      ])
      let totalRice = await Procurement.aggregate([
        { $match: { cropName: 'rice' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, 
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalSoy = await Procurement.aggregate([
        { $match: { cropName: 'soy' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalGnuts = await Procurement.aggregate([
        { $match: { cropName: 'g-nuts' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalCowpeas = await Procurement.aggregate([
        { $match: { cropName: 'cow-peas' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      // Get total quantity and cost of a produce
      let totalCrop = await Procurement.aggregate([
        { $match: { cropName: selectedProduce } },
        {
          $group: {
            _id: "$cropName",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } },
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      res.render("stock", {
        title: 'Stock',
        produces: items,
        totalbeans: totalBeans[0],
        totalmaize: totalMaize[0],
        totalrice: totalRice[0],
        totalsoy: totalSoy[0],
        totalgnuts: totalGnuts[0],
        totalcowpeas: totalCowpeas[0],
        totalcrop: totalCrop[0],
      });
    } catch (error) {
      res.status(400).send("unable to find items in the database");
      console.log(error)
    }
  // } else {
  //   res.send("This page is only accessed by managers")
  // }
});

