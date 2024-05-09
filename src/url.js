const url = require('url')

const gptUrl = 'https://www.amazon.in/Boldfit-Wrist-Supporter-Women-Straps/dp/B0B8RR5VQF/?_encoding=UTF8&pd_rd_w=kqUR4&content-id=amzn1.sym.4f3c73a8-dac5-4181-8aa7-51fa268716c9%3Aamzn1.symc.cdb151ed-d8fe-485d-b383-800c8b0e3fd3&pf_rd_p=4f3c73a8-dac5-4181-8aa7-51fa268716c9&pf_rd_r=189TMT2ZWXJ3K1H9XKFE&pd_rd_wg=GJhjP&pd_rd_r=8cc51d08-7f8f-4f39-a616-29fd17ce16a6&ref_=pd_hp_d_atf_ci_mcx_mr_hp_atf_m'

console.log(url.parse(gptUrl, true).query.pf_rd_p);