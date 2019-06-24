<template>
  <div>
    <b-container fluid>
      <b-row style="background-color: #FFFFFF;">
        <br>
        <b-col cols="2">
          <br>
          <font-awesome-icon icon="sitemap" class="fa-3x"/>
        </b-col>
        <b-col cols="2">
          <br>
          <p><span style="font-size: 18px">CTF</span> : <span style="font-size: 14px">1.0</span></p>
          <b-col>
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </b-col>
          <br>
          <p>NodeJs, Java</p>
        </b-col>
        <b-col cols="3"></b-col>
        <b-col cols="2">
          <br>
          <!--<b-list-group>-->
          <template>
            <font-awesome-icon icon="circle-notch" class="fa-1x" style="color: #DD342F;"/>
            <span>Critical Severity:</span> <span>1</span>
          </template>
          <br>
          <template>
            <font-awesome-icon icon="circle-notch" class="fa-1x" style="color: #F28C3c;"/>
            <span>High Severity:</span> <span>1</span>
          </template>
          <br>
          <template>
            <font-awesome-icon icon="circle-notch" class="fa-1x" style="color: #f9c546;"/>
            <span>Medium Severity:</span> <span>1</span>
          </template>
          <br>
          <template>
            <font-awesome-icon icon="circle-notch" class="fa-1x" style="color: #4fae4c;"/>
            <span>Low Severity:</span> <span>1</span>
          </template>
        </b-col>
        <b-col cols="3">

          <br>
          <div class="info-box">
            <template>
              <div class="info-box-content">
                <span class="info-box-number">36</span>
                <span class="info-box-text">Inherited Risk Score</span>
              </div>
            </template>
          </div>
        </b-col>
        <a href="">View Details</a>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'IndividualProjectHeader',
    data() {
      return {
        selected: null,
        options: [
          {value: null, text: 'Please select an version'},
          {value: 'a', text: 'This is First option'},
          {value: 'b', text: 'Selected Option'},
          {value: {C: '3PO'}, text: 'This is an option with object value'},
          {value: 'd', text: 'This one is disabled', disabled: true}
        ]
      }
    }
  }
</script>

<style scoped>
  .info-box {
    display: block;
    min-height: 90px;
    /*background: #fff;*/
    width: 100%;
    /*box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);*/
    border-radius: 2px;
    margin-bottom: 15px;
  }

  .info-box small {
    font-size: 14px;
  }

  .info-box .progress {
    background: rgba(0, 0, 0, 0.2);
    margin: 5px -10px 5px -10px;
    height: 2px;
  }

  .info-box .progress,
  .info-box .progress .progress-bar {
    border-radius: 0;
  }

  .info-box-icon > img {
    max-width: 100%;
  }

  .info-box-content {
    padding: 5px 10px;
    margin-left: 90px;
  }

  .info-box-number {
    display: block;
    text-align: right;
    padding-top: 10%;
    font-family: 'Avenir';
    /*color: #FF4C4C;*/
    font-size: 30px;
    font-weight: 200;
    line-height: 0.33;
  }

  .info-box-text {
    display: block;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 13%;
  }

  .info-box-text {
    font-family: 'Avenir';
    font-size: 14px;
    text-align: right;
    /*text-transform: uppercase;*/
  }
</style>
