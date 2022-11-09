import { Schema, model } from 'mongoose'
import { IInvoice } from '../interfaces/invoice.interface'

const invoiceSchema = new Schema<IInvoice>(
  {
    date: {
      type: String,
      required: [true, 'An invoice must have a date']
    },
    client: {
      type: String,
      required: [true, 'An invoice must have a client']
    },
    company: {
      type: String,
      required: [true, 'Invoices must be addressed to a Company']
    },
    address: {
      type: String,
      required: [true, 'Billed company must have an address']
    },
    postCode: {
      type: String,
      required: [true, 'Post code is required']
    },
    reference: {
      type: String,
      required: [true, 'Add a reference']
    },
    VATNr: {
      type: String,
      required: [true, 'Add a VAT number']
    },
    invoiceNumber: {
      type: String,
      unique: true
    },
    lineDate: {
      type: String,
      required: [true, 'Add starting date of services']
    },
    lineText: {
      type: String,
      required: [true, 'Add a description of services rendered']
    },
    taxBreakdown: {
      type: Boolean,
      default: false
    },
    taxBase: {
      type: Number
    },
    taxRate: {
      type: Number,
      enum: [10, 21]
    },
    taxAmount: Number,
    expenses: Number,
    lineAmount: {
      type: Number,
      required: [true, 'Add final amount billed']
    },
    currency: {
      type: String,
      enum: ['EUR', 'USD', 'GBP'],
      default: 'EUR'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Invoice = model<IInvoice>('Invoices', invoiceSchema)

export default Invoice
