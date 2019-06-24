<template>
  <div>
    <b-container fluid>
      <component-header></component-header>
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
                    </b-col>
                    <b-col cols="4">
                      <br>
                      <b-row>
                        <b-col cols="12">
                          <b-list-group>
                            <b-list-group-item>
                              <span>Vulnerabilities</span>
                              <b-badge pill variant="secondary" style="float: right;">16</b-badge>
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
                </b-card-body>
              </b-tab>

               <b-tab>
                <template slot="title">
                  <font-awesome-icon icon="cubes" class="fa-1x"/>
                  <span>Vulnerabilities</span>
                </template>
                 <b-card-body>
                  <b-row>
                    <b-col>
                      <vul-table></vul-table>
                    </b-col>
                  </b-row>
                </b-card-body>
               </b-tab>

              <b-tab>
                <template slot="title">
                  <font-awesome-icon icon="tasks" class="fa-1x"/>
                  <span>Projects</span>
                </template>
                 <b-card-body>
                  <b-row>
                    <b-col>
                      <projects-table></projects-table>
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
  import ComponentHeader from "@/components/DepComponents/IndividualComponentHeader";
  import VulTable from "@/components/DepComponents/VulTable";
  import ProjectsTable from "@/components/DepComponents/ProjectsTable";
  import ApexStackedChart from "@/components/Charts/ApexStackedChart"

  export default {
    name: "IndividualComponent",
    components: {
      ComponentHeader,
      ApexStackedChart,
      VulTable,
      ProjectsTable
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
      }
    }
  }
</script>

<style scoped>

</style>
