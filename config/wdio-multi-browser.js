import {config as buildConfig} from './wdio.conf.js'

buildConfig.capabilities = [{
    browserName: 'firefox',
    maxInstances: 1,
},
    {
        browserName: 'safari',
        maxInstances: 1,
    },
    {
        browserName: 'chrome',
        maxInstances: 1,
    }];
export const config = buildConfig