import Vue from 'vue'

/*
 * Load Vue, the JavaScript framework used by the Remotevideo
 */

if (window.Vue === undefined)
{
    window.Bus = new Vue()
}

/**
 * Define the Vue filters.
 */


/**
 * Used to make Lodash work.
 */
Vue.prototype._ = window._;


/**
 * Used to make jQuery work.
 */
Vue.prototype.$ = window.$;
