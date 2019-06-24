<template>
  <div>
    <b-container fluid style="background-color: #FFFFFF;">
      <br>
      <p class="title">{{ title }}</p>
      <hr>
      <apexchart height="300" type="area" :options="options" :series="chartData"></apexchart>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "ApexStackedChart",
    data() {
      return {
        options: {
          colors: ['#444444', '#357abd'],
          background: '#fff',
          // chart: {
          //   id: 'vuechart-example'
          // },
          responsive: [{
            // breakpoint: 480,
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
            categories: this.chartCategory,
            // lines: {
            //   show: false
            // }
          },
          fill: {
                opacity: 1
            },
          // yaxis: {
          //   lines: {
          //     show: true,
          //   }
          // },
        }
      }
    },
    props: {
      title: {
        type: String,
        required: false
      },
      chartData: {
        type: Array,
        required: true
      },
      chartCategory: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
