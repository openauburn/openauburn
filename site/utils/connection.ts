import mongoose, { Model } from "mongoose"
import AutoIncrementFactory from 'mongoose-sequence';
// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URI } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err: any) => console.log(err))
  const AutoIncrement = AutoIncrementFactory(conn);
  console.log("Mongoose Connection Established")

  mongoose.set('strictQuery', true);

  // Metadata
  const MetadataSchema = new mongoose.Schema({
    id: Number
  }, { collection: 'metadata', strict: false})
  if(!mongoose.models.metadata){
    MetadataSchema.plugin(AutoIncrement, {inc_field: 'id', id: 'metadata-id-counter'});
  }
  const Metadata = mongoose.models.metadata || mongoose.model("metadata", MetadataSchema)



  // Tags
  const TagSchema = new mongoose.Schema({
    id: Number
  }, { collection: 'tags', strict: false})
  if(!mongoose.models.tag){
    TagSchema.plugin(AutoIncrement, {inc_field: 'id', id: 'tags-id-counter'});
  }
  const Tags = mongoose.models.tag || mongoose.model("tag", TagSchema)


  // Licenses
  const LicenseSchema = new mongoose.Schema({
    id: Number
  }, { collection: 'licenses', strict: false})
  if(!mongoose.models.license){
    LicenseSchema.plugin(AutoIncrement, {inc_field: 'id', id: 'licenses-id-counter'});
  }
  const Licenses = mongoose.models.license || mongoose.model("license", LicenseSchema)


  return { conn, Metadata, Tags, Licenses }
}