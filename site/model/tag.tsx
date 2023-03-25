import { Schema, models, model } from 'mongoose';
import mongoose from 'mongoose';

const tagSchema = new Schema({
    title: String,
})


const Tag = models.Tag || model('Tag', tagSchema, 'Tag');
export default Tag;