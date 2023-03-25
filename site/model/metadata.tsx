import { Schema, models, model } from 'mongoose';
import mongoose from 'mongoose';

const metadataSchema = new Schema({
    title: String,
    description: String,
})


const Metadata = models.Metadata || model('Metadata', metadataSchema, 'Metadata');
export default Metadata;