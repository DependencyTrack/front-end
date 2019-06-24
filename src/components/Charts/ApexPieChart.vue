<template>
  <div>
    <b-container fluid style="background-color: #FFFFFF">
      <br>
      <p class="title">{{ title }}</p>
      <hr>
      <apexchart type=pie width=430 height="300" :options="chartOptions" :series="chartData"/>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "ApexPieChart",
    data() {
      return {
        chartOptions: {
          labels: this.chartLabel,
          colors: ['#444444', '#357abd'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 400
              }
            }
          }],
          legend: {
            show: true,
            position: 'bottom'
          }
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
        required: false
      },
      chartLabel: {
        type: Array,
        required: false
      }
    }
  }
</script>

<style scoped>

</style>
