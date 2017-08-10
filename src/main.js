import san from 'san'

// style
require('font-awesome/css/font-awesome.min.css')

// route
import ShowAll from './todo/ShowAll'
import ShowOne from './todo/ShowOne'
import AddTask from './todo/AddTask'
import UpdateTask from './todo/UpdateTask'

import {router} from 'san-router'

router.add({rule: '/', Component: ShowAll, target: '#app'});
router.add({rule: '/one', Component: ShowOne, target: '#app'});
router.add({rule: '/all', Component: ShowAll, target: '#app'});
router.add({rule: '/add', Component: AddTask, target: '#app'});
router.add({rule: '/edit/:id', Component: UpdateTask, target: '#app'});

// start
router.start()
