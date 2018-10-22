

const fs = require('fs');
const b64 = 'PHRlbXBsYXRlPjwvdGVtcGxhdGU+DQoNCjxzY3JpcHQgbGFuZz0idHMiPg0KZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCAgew0KICBnZXQgYXNzaWduZWUoKSB7DQogICAgdmFyIGl0ZW1zOnt0ZXh0OnN0cmluZzsgdmFsdWU6c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH1bXSA9IFtdOw0KICAgIHJldHVybiBpdGVtczsNCiAgfQ0KDQp9DQo8L3NjcmlwdD4NCg0K'
const buf = Buffer.from(b64, 'base64');

fs.writeFileSync('bad.ts.vue', buf);
