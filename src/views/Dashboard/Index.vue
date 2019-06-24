<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="4">
          <apex-donut-chart
            :title="sevChartTitle" :chartData="sevChartData" :chartLabel="sevChartLabel">
          </apex-donut-chart>
        </b-col>
        <b-col cols="5">
          <apex-pie-chart :title="projectChartTitle" :chartData="projectChartData"
                          :chartLabel="projectChartLabel"></apex-pie-chart>
        </b-col>
        <b-col cols="3" style="background-color: #FFFFFF">
          <p style="margin-top: 30%;font-family: Avenir;"><b>Vulnerable Project Ratio</b></p>
          <progress-chart></progress-chart>
          <br>
          <br>
          <p style="font-family: Avenir;"><b>Vulnerable Component Ratio</b></p>
          <progress-chart></progress-chart>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col cols="8">
          <apex-stacked-chart :title="componentChartTitle" :chartData="componentChartData"
                              :chartCategory="componentCategory"></apex-stacked-chart>
          <br>
          <apex-stacked-chart :title="dependencyChartTitle" :chartData="dependencyChartData"
                              :chartCategory="dependencyCategory"></apex-stacked-chart>
          <br>
          <br>
          <apex-stacked-chart :title="auditingChartTitle" :chartData="auditingChartData"
                              :chartCategory="auditingCategory"></apex-stacked-chart>

        </b-col>
        <b-col cols="4">
          <b-row style="background-color: #FFFFFF;">
            <b-col cols="4">
              <font-awesome-icon icon="thermometer-half" class="fa-3x" style="margin-top: 25%;"/>
            </b-col>
            <b-col cols="8">
              <p>
                <strong class="project-risk">
                  10
                </strong>
              </p>
              <p>
                <strong style="float: right;" class="title">Projects at Risk</strong>
                <br>
                <br>
                <br>
              </p>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col cols="12">
              <b-list-group>
                <b-list-group-item>
                  <span>Projects (total)</span>
                  <b-badge pill variant="secondary" style="float: right;">2</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Vulnerable Projects</span>
                  <b-badge pill variant="secondary" style="float: right;">2</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Dependencies (total)</span>
                  <b-badge pill variant="secondary" style="float: right;">1033</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Vulnerable Dependencies</span>
                  <b-badge pill variant="secondary" style="float: right;">14</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Components (total)</span>
                  <b-badge pill variant="secondary" style="float: right;">981</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Vulnerable Components</span>
                  <b-badge pill variant="secondary" style="float: right;">14</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Portfolio Vulnerabilities</span>
                  <b-badge pill variant="secondary" style="float: right;">16</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Findings Audited</span>
                  <b-badge pill variant="secondary" style="float: right;">0</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Findings Audited %</span>
                  <b-badge pill variant="secondary" style="float: right;">0%</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Suppressed</span>
                  <b-badge pill variant="secondary" style="float: right;">0</b-badge>
                </b-list-group-item>
                <b-list-group-item>
                  <span>Last Measurement</span>
                  <span style="float: right;">Refresh triggered </span>
                </b-list-group-item>
              </b-list-group>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col>
                <apex-bar-chart :title="vulStatTitle"></apex-bar-chart>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <br>
    </b-container>
  </div>

</template>

<script>
  import ApexBarChart from "@/components/Charts/ApexBarChart"
  import ApexDonutChart from "@/components/Charts/ApexDonutChart"
  import ApexPieChart from "@/components/Charts/ApexPieChart"
  import ApexStackedChart from "@/components/Charts/ApexStackedChart"
  import ProgressChart from "@/components/Charts/ProgressChart"

  export default {
    name: "DashboardIndex",
    components: {
      ApexBarChart,
      ApexDonutChart,
      ApexPieChart,
      ApexStackedChart,
      ProgressChart
    },
    data() {
      return {
        sevChartTitle: 'Portfolio Vulnerabilities',
        sevChartData: [44, 55, 41, 17],
        sevChartLabel: ["Critical", "High", "Medium", "Low"],
        projectChartTitle: 'Projects',
        projectChartLabel: ['Total Projects', 'Vulnerable Projects'],
        projectChartData: [10, 20],
        componentChartTitle: 'Components',
        componentChartData: [
          {
            name: "Total Components",
            data: [10, 20, 3]
          },
          {
            name: "Vulnerable Components",
            data: [13, 80, 20]
          }
        ],
        componentCategory: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        vulProjRatioVal: 10,
        maxRatio: 100,
        dependencyChartTitle: 'Dependencies',
        dependencyChartData: [
          {
            name: "Total Dependencies",
            data: [10, 20, 3]
          },
          {
            name: "Vulnerable Dependencies",
            data: [13, 80, 20]
          }
        ],
        dependencyCategory: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        auditingChartTitle: 'Auditing Progress',
        auditingChartData: [
          {
            name: "Finding Audited",
            data: [10, 20, 3]
          }
        ],
        auditingCategory: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        vulStatTitle: 'Vulnerability Stats'
      }
    }
  }
</script>

<style scoped>
  .title {
    font-family: 'Avenir';
    font-size: 16px;
    line-height: 1.33;
    color: #000000;
    float: right;
    margin-top: 18%;
    text-align: right;
  }

  .project-risk {
    font-family: 'Avenir';
    color: #000000;
    /*text-align: right;*/
    font-size: 54px;
    font-weight: 300;
    line-height: 0.33;
    float: right;
    margin-top: 19%;
  }
</style>
