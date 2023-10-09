'use strict';

/**
 * vibe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vibe.vibe');
