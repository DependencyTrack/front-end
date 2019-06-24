<template>
  <div>
    <b-container fluid style="background-color: #FFFFFF;">
      <br>
      <p>{{ title }}</p>
      <hr>
      <!-- User Interface controls -->
      <b-btn @click="createModal()" class="btn-blue">Create
      </b-btn>
      <br>
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
            <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
          </b-form-group>
        </b-col>

        <b-col md="6" class="my-1">

        </b-col>
        <b-col md="6" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            class="my-0"
            style="float: right;"></b-pagination>
        </b-col>


      </b-row>
      <br>
      <!-- Main table element -->
      <b-table
        show-empty
        stacked="md"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <template slot="name" slot-scope="row">
          <router-link :to="row.item.name">
            <p class="title">
              {{ row.item.name }}
            </p>
          </router-link>
        </template>
        <template slot="vul" slot-scope="row">
          <b-progress class="mt-1" style="height:20px;width: 100%;">
            <b-progress-bar
              :value="(row.item.vul[4]*100)/(row.item.vul[4]+row.item.vul[3]+row.item.vul[2]+row.item.vul[1])"
              class="critical-progress-bar"
              v-b-tooltip.hover.title="'Critical'"
            >
              {{ row.item.vul[4] }}
            </b-progress-bar>
            <b-progress-bar
              :value="(row.item.vul[3]*100)/(row.item.vul[4]+row.item.vul[3]+row.item.vul[2]+row.item.vul[1])"
              class="high-progress-bar"
              v-b-tooltip.hover.title="'High'"
            >
              {{ row.item.vul[3] }}
            </b-progress-bar>
            <b-progress-bar
              :value="(row.item.vul[2]*100)/(row.item.vul[4]+row.item.vul[3]+row.item.vul[2]+row.item.vul[1])"
              class="medium-progress-bar"
              v-b-tooltip.hover.title="'Medium'"
            >
              {{ row.item.vul[2] }}
            </b-progress-bar>
            <b-progress-bar
              :value="(row.item.vul[1]*100)/(row.item.vul[4]+row.item.vul[3]+row.item.vul[2]+row.item.vul[1])"
              class="low-progress-bar"
              v-b-tooltip.hover.title="'Low'"
            >
              {{ row.item.vul[1] }}
            </b-progress-bar>
          </b-progress>
        </template>
      </b-table>

    </b-container>
  </div>
</template>

<script>
  export default {
    name: "ComponentTable",
    props: {
      title: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        items: [
          {group: '', version: 26, name: 'abhi', license: '', vul: {1: 10, 2: 2, 3: 4, 4: 12}},
          {group: '', version: 22, name: 'CTF2', license: '', vul: {1: 0, 2: 5, 3: 1, 4: 7}},
        ],
        fields: [
          {key: 'name', label: 'Name', sortable: true, sortDirection: 'Name'},
          {key: 'version', label: 'Version', sortable: true, class: 'text-center'},
          {key: 'group', label: 'Group'},
          {key: 'license', label: 'License'},
          {key: 'vul', label: 'Vulnerabilities'}
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        showModal: true,
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return {text: f.label, value: f.key}
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      createModal() {
        console.log("Emmit", this.showModal)
        this.$emit('createModal', {show: this.showModal})
      },
    }
  }
</script>

<style scoped>
  .critical-progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
    background-color: #DD342F;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
  }

  .high-progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
    background-color: #F28C3c;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
  }

  .medium-progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
    background-color: #f9c546;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
  }

  .low-progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
    background-color: #4fae4c;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
  }

  .btn-blue {
    color: #FFFFFF;
    background-color: #23446F;
    border-color: #23446F;
    font-family: 'Avenir';
    border-radius: 4px;
    padding: 3px 12px;
    margin-bottom: 0;
    font-size: 14px;

  }

  .btn-blue:focus,
  .btn-blue.focus {
    color: #FFFFFF;
    background-color: #23446F;
    border-color: #23446F;
    font-family: 'Avenir';
    border-radius: 4px;
    padding: 3px 12px;
    margin-bottom: 0;
    font-size: 14px;
  }

  .btn-blue:hover {
    color: #FFFFFF;
    background-color: #23446F;
    border-color: #23446F;
    font-family: 'Avenir';
    border-radius: 4px;
    padding: 3px 12px;
    margin-bottom: 0;
    font-size: 14px;
  }

  .title {
    font-family: 'Avenir';
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    width: 500px;
    text-overflow: ellipsis;
    text-align: left;
  }
</style>
