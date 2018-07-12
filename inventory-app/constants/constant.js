export const appToken = 'dfign5svc2md9bnksj36djzg58w'
export const ticket = '9_bnui9ywiz_b32xpr_maxt_a_-b_dzatuyccndmv75bw34w5wd6mri22cv3s5dxdyhtny7c4djewsngv6g5_7s5jqq'
export const usertoken = 'b32xpr_maxt_9xin5bbb7spukc9hf588f4mf8z'

export const headerEnvelopeData = `<qdbapi>
                                   <ticket>${ticket}</ticket>
                                   <apptoken>${appToken}</apptoken>
                                   <usertoken>${usertoken}</usertoken>`

export const fieldTagNameOpen = `<field name="name">`
export const fieldTagBarcodeOpen = `<field name="barcode">`
export const fieldTagClose = `</field>`
export const rootTagClose = `</qdbapi>`;
export const productionBaseUrl = 'https://sagaroza.quickbase.com/db/bnuczcvnn?a=API_AddRecord?';
