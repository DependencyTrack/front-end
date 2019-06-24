<template>
  <div>
    <b-container fluid>
      <license-header :totalVul="totalVul"
                      :projectCount="projectCount"
                      :vulCompCount="vulCompCount" :riskScore="riskScore"></license-header>
      <br>
      <b-row>
        <b-col>
          <license-table></license-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

  import LicenseHeader from "@/components/License/Header"
  import LicenseTable from "@/components/License/LicenseTable"

  export default {
    name: "LicenseIndex",
    components: {
      LicenseHeader,
      LicenseTable
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
