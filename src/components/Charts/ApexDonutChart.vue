<template>
  <div>
    <b-container fluid style="background-color: #FFFFFF">
      <br>
      <p>{{ title }}</p>
      <hr>
      <apexchart width="380" height="300" type="donut" :options="chartOptions" :series="chartData"></apexchart>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "ApexDonutChart",
    data() {
      return {
        chartOptions: {
          labels: this.chartLabel,
          colors: ['#DD342F', '#F28C3c', '#f9c546', '#4fae4c'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
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
