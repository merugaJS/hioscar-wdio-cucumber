import { config as buildConfig} from './wdio.conf.js'

buildConfig.capabilities = [{
    maxInstances: 1,
    browserName: 'firefox',
},
    {
        maxInstances: 1,
        browserName: 'chrome',
    }];
export const config = buildConfig