// Create the API
export const api = new sst.aws.ApiGatewayV2('Api');

api.route('GET /', 'app/packages/api/src/get.handler');
