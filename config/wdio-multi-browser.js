import {config as buildConfig} from './wdio.conf.js'

buildConfig.capabilities = [{
    browserName: 'firefox',
},
    {
        browserName: 'safari',
    },
    {
        browserName: 'chrome',
    }];
export const config = buildConfig