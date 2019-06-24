<template>
  <div>

    <b-container fluid>
      <header-count-section :totalVul="totalVul"
        :projectCount="projectCount"
        :vulCompCount="vulCompCount" :riskScore="riskScore"></header-count-section>
       <br>
      <b-row>
        <b-col>
          <component-table :title="projTableTitle" @createModal="createProject($event)"></component-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import headerCountSection from "@/components/DepComponents/Header"
  import ComponentTable from "@/components/DepComponents/ComponentTable"

  export default {
    name: 'ComponentIndex',
    components: {
      headerCountSection,
      ComponentTable
    },
    data() {
      return {
        totalVul: 16,
        projectCount: 2,
        vulCompCount: 14,
        riskScore: 55,
        projTableTitle: 'List of Components',
      }
    }
  }
</script>

<style scoped>

</style>
