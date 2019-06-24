<template>
  <div>
    <b-container fluid>
      <vulnerabilities-header :totalVul="totalVul"
                              :projectCount="projectCount"
                              :vulCompCount="vulCompCount" :riskScore="riskScore">
      </vulnerabilities-header>
      <br>
      <b-row>
        <b-col>
          <vulnerabilities-table></vulnerabilities-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import VulnerabilitiesHeader from "@/components/Vulnerabilities/Header"
  import VulnerabilitiesTable from "@/components/Vulnerabilities/VulnerabilitiesTable"

  export default {
    name: "VulnerabilityIndex",
    components: {
      VulnerabilitiesHeader,
      VulnerabilitiesTable
    },
    data() {
      return {
        totalVul: 16,
        projectCount: 2,
        vulCompCount: 14,
        riskScore: 55,
      }
    }
  }
</script>

<style scoped>

</style>
