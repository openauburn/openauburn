import { Schema, models, model } from 'mongoose';
import mongoose from 'mongoose';

const licenseSchema = new Schema({
    title: String,
})


const License = models.License || model('License', licenseSchema, 'License');
export default License;