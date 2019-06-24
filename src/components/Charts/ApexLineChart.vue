<template>
  <div>
          <apexchart width="500" height= "300" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  export default {
    name: "ApexLineChart",
    data() {
      return {
        chartOptions: {
          // chart: {
          //   id: 'vuechart-example'
          // },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 400
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      }
    }
  }
</script>

<style scoped>

</style>
