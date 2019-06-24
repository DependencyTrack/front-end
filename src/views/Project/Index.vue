<template>
  <div>
    <b-container fluid>
      <Header
        :totalVul="totalVul"
        :projectCount="projectCount"
        :vulCompCount="vulCompCount" :riskScore="riskScore">

      </Header>
      <br>
      <b-row>
        <b-col>
          <project-table :title="projTableTitle" @createModal="createProject($event)"></project-table>
        </b-col>
      </b-row>

      <b-modal ref="createProjectModal" title="Create Project" centered size="md">
        <div>
          <form @submit.prevent="submitCreateProject">
            <b-row class="my-1">
              <b-col>
                <label class="label">Project Name *</label>
                <br>
                <b-form-input
                  v-model="projName"
                  type="text">
                </b-form-input>
              </b-col>
            </b-row>
            <br>
            <b-row class="my-1">
              <b-col>
                <label class="label">Version</label>
                <br>
                <b-form-input
                  v-model="projVersion"
                  type="text">
                </b-form-input>
              </b-col>
            </b-row>
            <br>
            <b-row class="my-1">
              <b-col>
                <label class="label">Description</label>
                <br>
                <b-form-textarea
                  v-model="projDesc"
                  max-rows="6"
                  type="text">
                </b-form-textarea>
              </b-col>
            </b-row>
            <br>
            <b-row class="my-1">
              <b-col>
                <label class="label">Tags</label>
                <br>
                <vue-tags-input
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
                />
              </b-col>
            </b-row>

            <br>
          </form>
        </div>
        <b-col cols="12" slot="modal-footer">
          <div class="pull-right" style="float: right;">
            <button type="button" class="btn btn-cancel" @click=" closeCreateProject()" :disabled="isClicked">
              Cancel
            </button>
            <button type="button"
                    class="btn btn-blue"
                    data-dismiss="modal"
                    @click=" submitCreateProject() " :disabled="isClicked">
              Submit
            </button>
          </div>
        </b-col>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
  import Header from "@/components/Project/Header"
  import ProjectTable from "@/components/Project/ProjectTable"
  import VueTagsInput from '@johmun/vue-tags-input';

  export default {
    name: 'ProjectIndex',
    components: {
      Header,
      ProjectTable,
      VueTagsInput
    },
    data() {
      return {
        totalVul: 16,
        projectCount: 2,
        vulCompCount: 14,
        riskScore: 55,
        projTableTitle: 'List of Projects',
        isClicked: false,
        projName: '',
        projVersion: '',
        projDesc: '',
        tag: '',
        tags: [],
      }
    },
    methods: {
      createProject(event) {
        if (event.show) {
          this.$refs.createProjectModal.show()
        }
      },
      submitCreateProject() {

      },

      closeCreateProject() {
        this.$refs.createProjectModal.hide()
      }

    }
  }
</script>

<style scoped>
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

  .btn-cancel {
    color: #000000;
    background-color: #D4D4D4;
    border-color: #D4D4D4;
    font-family: 'Avenir';
    border-radius: 4px;
    padding: 3px 12px;
    margin-bottom: 0;
    font-size: 14px;

  }

  .btn-cancel:focus,
  .btn-cancel.focus {
    color: #000000;
    background-color: #D4D4D4;
    border-color: #D4D4D4;
    font-family: 'Avenir';
    border-radius: 4px;
    padding: 3px 12px;
    margin-bottom: 0;
    font-size: 14px;
  }

  .btn-cancel:hover {
    color: #000000;
    background-color: #D4D4D4;
    border-color: #D4D4D4;
    font-family: 'Avenir';
    border-radius: 4px;
    padding: 3px 12px;
    margin-bottom: 0;
    font-size: 14px;
  }
</style>
