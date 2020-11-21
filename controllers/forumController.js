const Topic = require('../models/Topic');
const Reply = require('../models/Reply');
const controllersFactory = require('./controllersFactory');

exports.leaveReview = async (req, res, next) => {
    const { userId, courseId, review, rating } = req.body;
    const reviewDoc = await Review.create({
        userId,
        courseId,
        review,
        rating
    });

    res.status(200).json({
        status: 'success',
        data: { review: reviewDoc }
    });
};

exports.getAllTopics = async (req, res, next) => {
    const query = {};
    if (req.query.courseId) {
        query.courseId = req.query.courseId;
    }
    const docs = await Topic.find(query);

    res.status(200).json({
        status: 'success',
        results: docs.length,
        data: { docs }
    });
};

exports.getSingleTopic = controllersFactory.getOne(Topic);
exports.addTopic = controllersFactory.createOne(Topic);
exports.updateTopic = controllersFactory.updateOne(Topic);
exports.deleteTopic = controllersFactory.deleteOne(Topic);

exports.getAllReplies = async (req, res, next) => {
    const query = {};
    if (req.query.topicId) {
        query.topicId = req.query.topicId;
    }
    const docs = await Reply.find(query);

    res.status(200).json({
        status: 'success',
        results: docs.length,
        data: { docs }
    });
};

exports.getSingleReply = controllersFactory.getOne(Reply);
exports.addReply = controllersFactory.createOne(Reply);
exports.updateReply = controllersFactory.updateOne(Reply);
exports.deleteReply = controllersFactory.deleteOne(Reply);