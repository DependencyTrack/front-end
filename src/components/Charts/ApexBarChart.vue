<template>
  <div>
    <b-container fluid style="background-color: #FFFFFF">
      <br>
      <p class="title">{{ title }}</p>
      <hr>
      <apexchart  type="bar" :options="options" :series="series"></apexchart>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "ApexBarChart",
    data() {
      return {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
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
