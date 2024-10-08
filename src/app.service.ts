import { Injectable } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// const consumerKey = process.env.consumer_key
// const consumerSecret = process.env.consumer_secret
// const tokenId = process.env.token_id
// const tokenSecret = process.env.token_secret
// const account = process.env.realm
// const url = `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=570785&type=purchaserequisition`
// const method = 'GET'

@Injectable()
export class AppService {

  async getPurchaseRequisition(data): Promise<any> {
    //return 'Hello World!';
    debugger
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=570785&type=purchaserequisition`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
    });
    return result.data;
  }

  async createPurchaseRequisition(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1`,
      method: 'POST'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
      data: data.data
    });
    return result.data;
  }

  async getPurchaseOrder(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=572087&type=purchaseorder`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
    });
    return result.data;
  }

  async createPurchaseOrder(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1`,
      method: 'POST'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
      data: data.data
    });
    return result.data;
  }

  async getWarehouseMonitoring(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&type=monitoring&filters=%5B%7B%22name%22%3A%22item%22%2C%22operator%22%3A%22anyof%22%2C%22values%22%3A%5B11507%5D%7D%2C%7B%22name%22%3A%22location%22%2C%22operator%22%3A%22anyof%22%2C%22values%22%3A%5B213%5D%7D%2C%7B%22name%22%3A%22class%22%2C%22operator%22%3A%22anyof%22%2C%22values%22%3A%5B${data.data.class}%5D%7D%5D`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    let result;
    try {
      result = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: headers,
      });
    }
    catch (e) {
      console.log(e);
    }
    return result.data.result;
  }

  async getBom(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });
    console.log(data.data.trade)
    let filters = [
      // {
      //   name: 'custbody_job_order',
      //   operator: 'anyof',
      //   values: data.data.trade
      // },
      {
        name: 'class',
        operator: 'anyof',
        values: [data.data.class]
      }
    ];
    let enc = encodeURIComponent(JSON.stringify(filters));
    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&type=bom&filters=${enc}`,
      method: 'GET'
    };
    //console.log(request_data.url);
    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    let result;
    try {
      result = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: headers,
      });
    }
    catch (e) {
      console.log(e);
    }
    return result.data.result;
  }

  async getCostManagement(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });
    console.log(data.data)
    let filters = [
      {
        name: 'subsidiary',
        operator: 'anyof',
        values: [data.data.subsidiary]
      },
      {
        name: 'class',
        operator: 'anyof',
        values: [data.data.class]
      }
    ];
    let enc = encodeURIComponent(JSON.stringify(filters));
    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&type=costmanagement&filters=${enc}`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    let result;
    try {
      result = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: headers,
      });
    }
    catch (e) {
      console.log(e);
    }
    return result.data.result;
  }

  async getItemReceipt(data): Promise<any> {
    //return 'Hello World!';
    debugger
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=566073&type=itemreceipt`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
    });
    return result.data;
  }

  async getIntercompanyTransferOrder(data): Promise<any> {
    //return 'Hello World!';
    debugger
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=564996&type=intercompanytransferorder`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
    });
    return result.data;
  }

  async getVendorBill(data): Promise<any> {
    //return 'Hello World!';
    debugger
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=571385&type=vendorbill`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
    });
    return result.data;
  }

  async getVendorPayment(data): Promise<any> {
    //return 'Hello World!';
    debugger
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=570167&type=vendorbill`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
    });
    return result.data;
  }

  async getPayables(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });
    let filters = [
      {
        name: 'class',
        operator: 'anyof',
        values: [data.data.class]
      }
    ];
    let enc = encodeURIComponent(JSON.stringify(filters));
    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&type=payables&filters=${enc}`,
      method: 'GET'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    let result;
    try {
      result = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: headers,
        timeout: 600000
      });
    }
    catch (e) {
      console.log(e);
    }
    return result.data.result;
  }

  async createVendorBill(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1`,
      method: 'POST'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
      data: data.data
    });
    return result.data;
  }

  async getFixedAsset(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=580640&type=journalentry`,
      method: 'GET'
    };
    //console.log(request_data.url);
    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    let result;
    try {
      result = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: headers,
      });
    }
    catch (e) {
      console.log(e);
    }
    return result.data.result;
  }

  async createFixedAsset(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1`,
      method: 'POST'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
      data: data.data
    });
    return result.data;
  }

  async getOtherExpenses(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=571385&type=vendorbill`,
      method: 'GET'
    };
    //console.log(request_data.url);
    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    let result;
    try {
      result = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: headers,
      });
    }
    catch (e) {
      console.log(e);
    }
    return result.data.result;
  }

  async getBilling(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1&id=572812&type=invoice`,
      method: 'GET'
    };
    //console.log(request_data.url);
    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    let result;
    try {
      result = await axios({
        url: request_data.url,
        method: request_data.method,
        headers: headers,
      });
    }
    catch (e) {
      console.log(e);
    }
    return result.data.result;
  }

  async createBilling(data): Promise<any> {
    //return 'Hello World!';
    const oauth = OAuth({
      consumer: {
        key: data.keys.consumerKey,
        secret: data.keys.consumerSecret
      },
      realm: data.keys.account,
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      }
    });

    const request_data = {
      url: `${data.keys.domain}/app/site/hosting/restlet.nl?script=${data.keys.domain == 'https://6199424.restlets.api.netsuite.com' ? '271' : '266'}&deploy=1`,
      method: 'POST'
    };

    const token = {
      key: data.keys.tokenId,
      secret: data.keys.tokenSecret
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));
    headers['Content-Type'] = 'application/json';

    const result = await axios({
      url: request_data.url,
      method: request_data.method,
      headers: headers,
      data: data.data
    });
    return result.data;
  }

}
