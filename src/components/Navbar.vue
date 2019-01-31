<template>
  <nav id="navbar-container" class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div>
          <img src="../assets/images/dt-icon.svg" style="height:44px; margin-top:4px; margin-right:10px"/>
          <img src="../assets/images/dt-title.svg" style="height:12px; margin-top:6px;"/>
        </div>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <div id="smart-search">
              <input id="smart-search-input" class="typeahead" type="text" placeholder="Search...">
            </div>
          </li>
          <li id="nav-about"><a href="#" data-toggle="modal" data-target="#modal-about"><span class="fa fa-info-circle" aria-hidden="true"></span> About</a></li>
          <% if(AUTHN_ENABLED) { %>
          <li id="nav-profile"><a href="#" data-toggle="modal" data-target="#modal-profile"><span class="fa fa-user" aria-hidden="true"></span> Profile</a></li>
          <li id="nav-logout"><a href="#" onclick="$common.logout();"><span class="fa fa-sign-out" aria-hidden="true"></span> Logout</a></li>
          <% } %>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  };
</script>
