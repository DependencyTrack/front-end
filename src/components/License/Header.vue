<template>
  <div>
    <b-container fluid>
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon">
              <font-awesome-icon icon="shield-alt" class="fa-1x"/>
            </span>
            <template>
              <div class="info-box-content">
                <span class="info-box-number">{{ totalVul }}</span>
                <span class="info-box-text">Portfolio Vulnerabilities</span>
              </div>
            </template>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon">
              <font-awesome-icon icon="sitemap" class="fa-1x"/>
            </span>
            <template>
              <div class="info-box-content">
                <span class="info-box-number">{{ projectCount }}</span>
                <span class="info-box-text">Projects at Risk</span>
              </div>
            </template>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon">
              <font-awesome-icon icon="cubes" class="fa-1x"/>
            </span>
            <template>
              <div class="info-box-content">
                <span class="info-box-number">{{ vulCompCount  }}</span>
                <span class="info-box-text">Vulnerable Components</span>
              </div>
            </template>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon">
               <font-awesome-icon icon="thermometer-half" class="fa-1x"/>
            </span>

            <div class="info-box-content">
              <span class="info-box-number">{{ riskScore }}</span>
              <span class="info-box-text">Inherited Risk Score</span>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'LicenseHeader',
    props: {
      totalVul: {
        type: Number,
        required: false
      },
      projectCount: {
        type: Number,
        required: false
      },
      vulCompCount: {
        type: Number,
        required: false
      },
      riskScore: {
        type: Number,
        required: false
      }
    }
  }
</script>

<style scoped>
  .info-box {
    display: block;
    min-height: 90px;
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
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

  .info-box .progress .progress-bar {
    background: #fff;
  }

  .info-box-icon {
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
    display: block;
    float: left;
    height: 90px;
    width: 90px;
    text-align: center;
    font-size: 45px;
    line-height: 90px;
    /*background: rgba(0, 0, 0, 0.2);*/
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
