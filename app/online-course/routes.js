const express = require('express');

const courseAdmin = require('./controllers/course-admin');
const categoryAdmin = require('./controllers/category-admin');
const coursePublic = require('./controllers/course-public');

const router = express.Router();

// admin
router.get('/admin/courses', courseAdmin.all);
router.post('/admin/courses', courseAdmin.create);
router.get('/admin/courses/:id', courseAdmin.show);
router.put('/admin/courses/:id', courseAdmin.update);
router.delete('/admin/courses/:id', courseAdmin.destroy);
router.get('/admin/categories', categoryAdmin.all);
router.post('/admin/categories', categoryAdmin.create);
router.get('/admin/categories/:id', categoryAdmin.show);
router.put('/admin/categories/:id', categoryAdmin.update);
router.delete('/admin/categories/:id', categoryAdmin.destroy);

// public
router.get('/public/courses', coursePublic.all);
router.get('/public/courses/:id', coursePublic.show);

module.exports = router;
