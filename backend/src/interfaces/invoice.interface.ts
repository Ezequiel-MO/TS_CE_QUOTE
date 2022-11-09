export interface IInvoice {
  date: string
  client: string
  company: string
  address: string
  postCode: string
  reference: string
  VATNr: string
  invoiceNumber: string
  lineDate: string
  lineText: string
  taxBreakdown: boolean
  taxBase: number
  taxRate: number
  taxAmount: number
  expenses: number
  lineAmount: number
  currency: 'EUR' | 'USD' | 'GBP'
}
