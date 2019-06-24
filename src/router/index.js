import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Dashboard from '@/pages/Dashboard'
import LoginIndex from '@/views/Login/Index'
import DashboardIndex from '@/views/Dashboard/Index'
import ProjectIndex from '@/views/Project/Index'
import IndividualProject from '@/views/Project/IndividualProject'
import ComponentIndex from '@/views/DepComponents/Index'
import IndividualComponent from '@/views/DepComponents/IndividualComponent'
import VulnerabilityIndex from '@/views/Vulnerabilities/Index'
import LicenseIndex from '@/views/License/Index'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: LoginIndex
    },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: DashboardIndex,
    //   meta: { title: 'Dashboard', icon: 'Dashboard' },
    // },
    {
      path: '/dep',
      component: Layout,
      meta: {title: 'Dashboard', icon: 'Dashboard'},
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: DashboardIndex,
          meta: {title: 'Dashboard', icon: 'Dashboard'}
        },
      ]
    },
    {
      path: '/project',
      component: Layout,
      meta: {title: 'Project', icon: 'Project'},
      children: [
        {
          path: '',
          name: 'Project',
          component: ProjectIndex,
          meta: {title: 'Project', icon: 'Project'}
        },
        {
          path: 'individual_project/:projectId',
          name: 'Individual Project',
          component: IndividualProject,
          meta: {
            title: 'Individual Project',
            // requiresAuth: true
          }
        },
      ]
    },
    {
      path: '/components',
      component: Layout,
      meta: {title: 'Components', icon: 'Components'},
      children: [
        {
          path: '',
          name: 'Components',
          component: ComponentIndex,
          meta: {title: 'Components', icon: 'Components'}
        },
        {
          path: 'individual_component/:componentId',
          name: 'Individual Component',
          component: IndividualComponent,
          meta: {
            title: 'Individual Component',
            // requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/vulnerabilities',
      component: Layout,
      meta: {title: 'Vulnerabilities', icon: 'Vulnerabilities'},
      children: [
        {
          path: '',
          name: 'Vulnerabilities',
          component: VulnerabilityIndex,
          meta: {title: 'Vulnerabilities', icon: 'Vulnerabilities'}
        }
        // {
        //   path: 'individual_component/:componentId',
        //   name: 'Individual Component',
        //   component: IndividualComponent,
        //   meta: {
        //     title: 'Individual Component',
        //     // requiresAuth: true
        //   }
        // }
      ]
    },
    {
      path: '/license',
      component: Layout,
      meta: {title: 'License', icon: 'License'},
      children: [
        {
          path: '',
          name: 'License',
          component: LicenseIndex,
          meta: {title: 'License', icon: 'License'}
        }
        // {
        //   path: 'individual_component/:componentId',
        //   name: 'Individual Component',
        //   component: IndividualComponent,
        //   meta: {
        //     title: 'Individual Component',
        //     // requiresAuth: true
        //   }
        // }
      ]
    }

  ],
  mode: 'history'
})
