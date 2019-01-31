<template>
  <div id="sidebar">
    <ul>
      <li id="sidebar-dashboard-button"><a href="/" data-toggle="tooltip" data-placement="right" data-sidebar="dashboard" title="Dashboard"><i class="fa fa-area-chart"></i><span>Dashboard</span></a></li>
      <li id="sidebar-projects-button"><a href="/projects/" data-toggle="tooltip" data-placement="right" data-sidebar="projects" title="Projects"><i class="fa fa-sitemap"></i><span>Projects</span></a></li>
      <li id="sidebar-components-button"><a href="/components/" data-toggle="tooltip" data-placement="right" data-sidebar="components" title="Components"><i class="fa fa-cubes"></i><span>Components</span></a></li>
      <li id="sidebar-vulnerabilities-button"><a href="/vulnerabilities/" data-toggle="tooltip" data-placement="right" data-sidebar="vulnerabilities" title="Vulnerabilities"><i class="fa fa-shield"></i><span>Vulnerabilities</span></a></li>
      <li id="sidebar-licenses-button"><a href="/licenses/" data-toggle="tooltip" data-placement="right" data-sidebar="licenses" title="Licenses"><i class="fa fa-balance-scale"></i><span>Licenses</span></a></li>
      <% if(AUTHZ_ENABLED) { %>
      <li id="sidebar-admin-button" style="display:none"><a href="/admin/" data-toggle="tooltip" data-placement="right" data-sidebar="admin" title="Administration"><i class="fa fa-cogs"></i><span>Administration</span></a></li>
      <% } %>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  };
</script>
