<template>
  <div>
    <b-container fluid style="background-color: #FFFFFF;">
      <br>
      <p class="title">{{ title }}</p>
      <hr>
      <apexchart height= "300" type="line" :options="options" :series="chartData"></apexchart>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "ApexSplineChart",
    data() {
      return {
        options: {
          colors: ['#444444', '#357abd'],
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
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
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
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
