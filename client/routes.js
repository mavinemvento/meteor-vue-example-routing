import {Router} from 'meteor/akryum:vue-router';

// Components
import Home from '/imports/ui/Home.vue';
import Page1 from '/imports/ui/Page1.vue';
import Page2 from '/imports/ui/Page2.vue';

Router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/page1': {
    name: 'page1',
    component: Page1
  },
  '/page2': {
    name: 'page2',
    component: Page2
  }
});