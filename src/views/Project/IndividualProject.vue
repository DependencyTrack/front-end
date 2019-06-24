<template>
  <div>
    <b-container fluid>
      <individual-project-header></individual-project-header>
      <br>
      <b-row>
        <b-col>
          <b-card no-body>
            <b-tabs card>
              <b-tab active>
                <template slot="title">
                  <font-awesome-icon icon="chart-line" class="fa-1x"/>
                  <span>Overview</span>
                </template>
                <b-card-body>
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
                      <br>
                      <b-row>
                        <b-col cols="12">
                          <b-list-group>
                            <b-list-group-item>
                              <span>Components (total)</span>
                              <b-badge pill variant="secondary" style="float: right;">981</b-badge>
                            </b-list-group-item>
                            <b-list-group-item>
                              <span>Vulnerable Components</span>
                              <b-badge pill variant="secondary" style="float: right;">14</b-badge>
                            </b-list-group-item>
                            <b-list-group-item>
                              <span>Vulnerabilities</span>
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
                    </b-col>
                  </b-row>
                  <br>
                </b-card-body>
              </b-tab>
              <b-tab>
                <template slot="title">
                  <font-awesome-icon icon="cubes" class="fa-1x"/>
                  <span>Dependencies</span>
                </template>
                <b-card-body>
                  <b-row>
                    <b-col>
                      <dependency-table></dependency-table>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-tab>
              <b-tab>
                <template slot="title">
                  <font-awesome-icon icon="tasks" class="fa-1x"/>
                  <span>Audit</span>
                </template>
                <b-card-body>
                  <b-row>
                    <b-col>
                      <audit-table></audit-table>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import IndividualProjectHeader from "@/components/Project/IndividualProjectHeader"
  import ApexStackedChart from "@/components/Charts/ApexStackedChart"
  import DependencyTable from "@/components/Project/DependencyTable"
  import AuditTable from "@/components/Project/AuditTable"

  export default {
    name: 'IndividualProject',
    components: {
      IndividualProjectHeader,
      ApexStackedChart,
      DependencyTable,
      AuditTable
    },
    data() {
      return {
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
      }
    }
  }
</script>

<style scoped>

</style>
