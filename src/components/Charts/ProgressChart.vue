<template>
  <div>
    <b-progress class="mt-1" style="height:25px;width: 100%;">
      <b-progress-bar
        :value="(10*100)/30"
        class="high-progress-bar"
      >
        <strong>1/30</strong>
      </b-progress-bar>
    </b-progress>
    <!-- {{low}}
      {{high}}
      {{info}}
    {{medium}}-->
  </div>
</template>

<script>
export default {
  name: "ProgressChart",
  props: {
    high: {
      required: true
    },
    medium: {
      required: true
    },
    low: {
      required: true
    },
    info: {
      required: true
    },
    total: {
      required: false
    },
    sevUrl: {
      required: false
    },
    noRedirect: {
      required: false
    },
    highTitle: {
      required: false
    },
    mediumTitle: {
      required: false
    },
    lowTitle: {
      required: false
    },
    infoTitle: {
      required: false
    }
  },
  methods: {
    clickHighSev() {
      this.$router.push(this.sevUrl + "high/");
    },
    clickMediumSev(url) {
      this.$router.push(this.sevUrl + "medium/");
    },
    clickLowSev(url) {
      this.$router.push(this.sevUrl + "low/");
    },
    clickInfoSev(url) {
      this.$router.push(this.sevUrl + "info/");
    }
  }
};
</script>

<style scoped>
.high-progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  background-color: #D43F3A;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
</style>
