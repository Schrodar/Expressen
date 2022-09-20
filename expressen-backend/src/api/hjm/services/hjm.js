'use strict';

/**
 * hjm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hjm.hjm');
