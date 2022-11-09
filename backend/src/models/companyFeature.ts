import { Schema, model } from 'mongoose'
import { ICompanyFeatures } from '../interfaces/companyFeatures.interface'

const companyFeatureSchema = new Schema<ICompanyFeatures>(
  {
    name: {
      type: String,
      required: [true, 'A Company must have a name']
    },
    imageContentUrl: [String],
    colorPalette: [String],
    fonts: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

companyFeatureSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

const CompanyFeature = model('CompanyFeatures', companyFeatureSchema)

export { CompanyFeature, companyFeatureSchema }
