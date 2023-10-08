'use strict';

/**
 * study-spot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::study-spot.study-spot');
