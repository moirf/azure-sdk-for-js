let nock = require('nock');

module.exports.hash = "0cc7ad135f8e0c1b076126ea485bd3ea";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '46849707-a8ee-4333-b86a-9f2f32950000',
  'x-ms-ests-server',
  '2.1.12071.17 - KRSLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AhgoP7GVDa5LgKfIpM23JGM; expires=Thu, 28-Oct-2021 02:49:36 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrKZttJrwUBHh5v-u08E7mCXSbtaw7mD6mdw5wc2HTurCqkps8X9crdkK8q7ah4VEW3kOee8fGrlDC_-NLuCyk6PyDm3BlIVU8QdNatWZxp_BS6usicSuYK0vlp9GwRY12dQT0ge_nyRbtTlrRs_624DRzG0zystFPlOMd7ou2_RsgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 28 Sep 2021 02:49:36 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'd8394544-8497-4b9f-986e-ff4941a41100',
  'x-ms-ests-server',
  '2.1.12071.16 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Ajb8tTPgyBNDtMSzI-YzjnU; expires=Thu, 28-Oct-2021 02:49:36 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrlKTxxUb6RQUJaH3gQ2sgCEjVxELufur47acYWEtfqxwPbABsbzyjK0NwHjrfzlWcRn-xD3CtwzusERGQTJyf69Ji0ozAF_TUgfqbtrSumqX2mRUUAfb0JJmIHwiDXU9pCXqFfTbFA_FODSFZNdCEluI4Q7jFYmD941CZUL-8bOUgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 28 Sep 2021 02:49:36 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.1&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=25f926d8-ff70-4af5-8043-dfbd8f28aa83&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9e574ff0-b0e5-4838-a6c0-a7cb386c1100',
  'x-ms-ests-server',
  '2.1.12071.16 - SEASLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=At0Bvvse7kpFuCNG-1Uos9oWPr5BAQAAAMB55NgOAAAA; expires=Thu, 28-Oct-2021 02:49:36 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 28 Sep 2021 02:49:36 GMT',
  'Content-Length',
  '1351'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4fb2e93cbffb2a9f156858e3e7141fbd7bf76e7777f7a3d1476535cdd037e1729a356dfad56bfa70992d72fa20fa427bbdc277d12ef07576d17cf4e817ff92d14784ce2aafdb22c7dff8ebb268a8a36279f1bacd5ac038a973ea7b7941af71473f49b8530bfa667fbc33dedda7cf9bb76bbcad08bdacf345b15ed0e7e7d9a228aff111fd31cd56d9b468e9cf5dea375f6693327f512d5f37e5cbaa6e3f7ad4d6eb7cf451b16cda6c39053adffbc51f35e6cbddfb3b3b3b3464affdee3dfea868be208ae4f5478fceb3b20184e6655d2cb29a3ae24f7ec9a80367b70f873e7a7f387b7d38f4d1fbc3b9d787431fdd0ce7fba38f16c5b258ac176f4a6f5676c77b44edd57a5216d317797b55d56f8fa74450a2e847a74cf5197dcf5379522dcf8b8b754df38b577ff1478becdd225f54f5f5f6aaa2d7a9ab8fb2b27c9b5f37db65bda6d7a8c1b42cf2650b680f0879f94c5f229ecfeb4b82ffe8a33df3d5799d5d2ce805eea3df8e062bedf4ab595eb6197d8ef7894d32c6fcf722043e7ab45c97e5e8a379d5b42f84d1fa9c3fe60fc6fcc9f8aa58ceaaab66bccc5bea62c5c4fdf4de8387c4af86d69fde3b201622e9a6366740e72efdfeb329e93a21772f8bba5d67a5fed9dca5fef10b24e8dd5dc281fe6ef4a7fd9c0641b2d116d3b39784e9ee0e49dfcef83e3e9d67f5eca45a2f6944c48165b17c9bcf5e83c23591ed7bdf273afea05ab2487db4fbd1f77f","c9ff03b438e1cbd6040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '7749b169-e8cb-474c-964b-61f1003e0b35',
  'x-rp-server-mvid',
  'c8066022-f720-49e8-9fec-c4ac03b5b4cd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11988',
  'x-ms-correlation-request-id',
  'fb18f47a-b847-40ce-b5cc-3922e80a2225',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T024937Z:fb18f47a-b847-40ce-b5cc-3922e80a2225',
  'Date',
  'Tue, 28 Sep 2021 02:49:36 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4fb2e93cbffb2a9f156858e3e7141fbd7bf76e7777f7a3d1476535cdd037e1729a356dfad56bfa70992d72fa20fa427bbdc277d12ef07576d17cf4e817ff92d14784ce2aafdb22c7dff8ebb268a8a36279f1bacd5ac038a973ea7b7941af71473f49b8530bfa667fbc33dedda7cf9bb76bbcad08bdacf345b15ed0e7e7d9a228aff111fd31cd56d9b468e9cf5dea375f6693327f512d5f37e5cbaa6e3f7ad4d6eb7cf451b16cda6c39053adffbc51f35e6cbddfb3b3b3b3464affdee3dfea868be208ae4f5478fceb3b20184e6655d2cb29a3ae24f7ec9a80367b70f873e7a7f387b7d38f4d1fbc3b9d787431fdd0ce7fba38f16c5b258ac176f4a6f5676c77b44edd57a5216d317797b55d56f8fa74450a2e847a74cf5197dcf5379522dcf8b8b754df38b577ff1478becdd225f54f5f5f6aaa2d7a9ab8fb2b27c9b5f37db65bda6d7a8c1b42cf2650b680f0879f94c5f229ecfeb4b82ffe8a33df3d5799d5d2ce805eea3df8e062bedf4ab595eb6197d8ef7894d32c6fcf722043e7ab45c97e5e8a379d5b42f84d1fa9c3fe60fc6fcc9f8aa58ceaaab66bccc5bea62c5c4fdf4de8387c4af86d69fde3b201622e9a6366740e72efdfeb329e93a21772f8bba5d67a5fed9dca5fef10b24e8dd5dc281fe6ef4a7fd9c0641b2d116d3b39784e9ee0e49dfcef83e3e9d67f5eca45a2f6944c48165b17c9bcf5e83c23591ed7bdf273afea05ab2487db4fbd1f77f","c9ff03b438e1cbd6040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '5756828d-785d-498a-b545-0fe294de6697',
  'x-rp-server-mvid',
  'c8066022-f720-49e8-9fec-c4ac03b5b4cd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11999',
  'x-ms-correlation-request-id',
  '92abfbef-6537-46ba-a0b1-887889f9ef88',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T025438Z:92abfbef-6537-46ba-a0b1-887889f9ef88',
  'Date',
  'Tue, 28 Sep 2021 02:54:38 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4fb2e93cbffb2a9f156858e3e7141fbd7bf76e7777f7a3d1476535cdd037e1729a356dfad56bfa70992d72fa20fa427bbdc277d12ef07576d17cf4e817ff92d14784ce2aafdb22c7dff8ebb268a8a36279f1bacd5ac038a973ea7b7941af71473f49b8530bfa667fbc33dedda7cf9bb76bbcad08bdacf345b15ed0e7e7d9a228aff111fd31cd56d9b468e9cf5dea375f6693327f512d5f37e5cbaa6e3f7ad4d6eb7cf451b16cda6c39053adffbc51f35e6cbddfb3b3b3b3464affdee3dfee807d5129d62d0cd3cab67673461f471d17c9111c1eb8f1e9d676503c0cdcbba586435f5cf9ffc925107fc6e1f3c7df48d81dfeb83a78f62e0a9d7f7077faf0f9e3efadae0bf3ffa68512c8bc57af1a6f4667c77bc47a056eb49594c5fe4ed5555bf3d9ed264d16c7d74bac48ccee87b6693936a795e5cac6be21dbcfa8b3f5a64ef16f9a2aaafb75715bd4e5d7d9495e5dbfcbad92eeb35bd460da665912f5b407b406392cff42592a7bcbe24f88f3eda335f9dd7d9c5825ee03efaed8806d24ebf9ae5659bd1e7789f583063cc7f2f42e0a347cb75598e3e9a574dfb4298b82f5563fe60cc9f8caf8ae5acba6ac6cbbca52e564cf34fef3d7848743653f0e9bd036214d21cd40674ff59d7223a21772f8bba5d67a5fed9dca5fef10ba4f3dd5dc281fe6ef4a7fd9c064172d716d3b39784e9ee0e49f6cef83e3e05db9c54eb258d88f8b52c966ff3d96b50b826b27deffb444730197e2736fbfe","2ff97f00731eee9a32050000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'afb7f21f-f01d-4a91-8141-4d659d2df406',
  'x-rp-server-mvid',
  'c8066022-f720-49e8-9fec-c4ac03b5b4cd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11998',
  'x-ms-correlation-request-id',
  '73bcaa08-87e1-44ee-b4b6-dcb9f5aaec3d',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T025940Z:73bcaa08-87e1-44ee-b4b6-dcb9f5aaec3d',
  'Date',
  'Tue, 28 Sep 2021 02:59:40 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4fb2e93cbffb2a9f156858e3e7141fbd7bf76e7777f7a3d1476535cdd037e1729a356dfad56bfa70992d72fa20fa427bbdc277d12ef07576d17cf4e817ff92d14784ce2aafdb22c7dff8ebb268a8a36279f1bacd5ac078bd9e4ef37c96cfe83deee92709796a425fed8f77c6bbfbf479f3768dd715a39775be28d60bfafc3c5b14e5353ea23fa6d92a9b162dfdb94b1de7cb6c52e62faae5eba67c59d5ed478fda7a9d8f3e2a964d9b2da7c0e77bbff8a3c67cb97b7f676787c6ecb5dfbdc71ffda05aa2538cba9967f5ec8c668c3e2e9a2f32a2786de1362feb6291d5d43d3ef825a30ef0dd3e70fae846e0e759d984d0f9931ef8bd3e78fa28069e7a75e0812afeb6d0f1410ff8bd3e70fae846e08c293eb0d0f9935ff2fdd1478b62592cd68b37a537dbbbe33d02b55a4fca62fa226fafaafaed31b1464333f5d1e912b36959e4a45a9e1717eb5a99f6177fb4c8de2df245555f6faf2a7a9dbafa282bcbb7f975b35dd66b7a8d1a4ccb225fb680f680c6249fe94b244c797d49f01f7db467be3aafb38b05bdc07df4db110da49d7e35cbcb36a3cff13eb15fc698ff5e84c0478f96ebb21c7d34af9af68530705fa4c6fcc1983f195f15cb5975d58c97794b5dac98e69fde7bf090e86ca6e0d37b07c426a436a80de8feb3ae427442ee5e1675bbce4afdb3b94bfde31748e6bbbb8403fddde84ffb390d8264ae2da6672f09d3dd1d92ea9df17d7c0ab639a9d64b1a11716b592cdfe6b3d7a0704d64fbdef7898e6032fc4e6cf6fd","5ff2ff00033652e12f050000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'a2d7cf4a-3d20-426b-894a-ed8e529afcf8',
  'x-rp-server-mvid',
  'c8066022-f720-49e8-9fec-c4ac03b5b4cd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11987',
  'x-ms-correlation-request-id',
  'bba977d7-b2de-4ad6-8693-fffc6490e915',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T030442Z:bba977d7-b2de-4ad6-8693-fffc6490e915',
  'Date',
  'Tue, 28 Sep 2021 03:04:41 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .patch('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111', {"properties":{"enableNonSslPort":true}})
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4fb2e93cbffb2a9f156858e3e7141fbd7bf76e7777f7a3d1476535cdd037e1729a356dfad56bfa70992d72fa20fa427bbdc277d12ef07576d17cf4e817ff92d14784ce2aafdb22c7dff8ebb268a8a36279f1bacd5ac078bd9e4ef37c96cfe83deee92709796a425fed8f77c6bbfbf479f3768dd715a39775be28d60bfafc3c5b14e5353ea23fa6d92a9b162dfdb94b1de7cb6c52e62faae5eba67c59d5ed478fda7a9d8f3e2a964d9b2da7c0e77bbff8a3c67cb97b7f676787c6ecb5dfbdc71ffda05aa2538cba9967f5ec8c668c3e2e9a2f32a2786de1362feb6291d5d43d3ef825a30ef0dd3e70fae846e0e759d984d0f9931ef8bd3e78fa28069e7a75e0812afeb6d0f1410ff8bd3e70fae846e08c293eb0d0f9935ff2fdd1478b62592cd68b37a537dbbbe33d02b55a4fca62fa226fafaafaed31b1464333f5d1e912b36959e4a45a9e1717eb5a99f6177fb4c8de2df245555f6faf2a7a9dbafa282bcbb7f975b35dd66b7a8d1a4ccb225fb680f680c6249fe94b244c797d49f01f7db467be3aafb38b05bdc07df4db110da49d7e35cbcb36a3cff13eb15fc698ff5e84c0478f96ebb21c7d34af9af68530705fa4c6fcc1983f195f15cb5975d58c97794b5dac98e69fde7bf090e86ca6e0d37b07c426a436a80de8feb3ae427442ee5e1675bbce4afdb3b94bfde31748e6bbbb8403fddde84ffb390d8264ae2da6672f09d3dd1d92ea9df17d7c0ab639a9d64b1a11716b592cdfe6b3d7a0704d64fbdef7898e6032fc4e6cf6fd","5ff2ff00033652e12f050000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'f671fd97-358f-4c5b-851f-c2d4830e67b2',
  'x-rp-server-mvid',
  'c8066022-f720-49e8-9fec-c4ac03b5b4cd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1195',
  'x-ms-correlation-request-id',
  '70e434bb-02c3-4c69-9bf9-23dc6301cc3f',
  'x-ms-routing-request-id',
  'JAPANEAST:20210928T030443Z:70e434bb-02c3-4c69-9bf9-23dc6301cc3f',
  'Date',
  'Tue, 28 Sep 2021 03:04:42 GMT'
]);
