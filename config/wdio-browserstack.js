import {config as buildConfig} from './wdio.conf.js'

buildConfig.commonCapabilities = {
    'bstack:options': {
        buildName: 'browserstack-build-1',
        source: 'webdriverio:sample-master:v1.1'
    }
}
buildConfig.capabilities = [{
    maxInstances: 1,
    browserName: 'chrome',
}, {
    maxInstances: 1,
    browserName: 'firefox',

}, {
    maxInstances: 1,
    browserName: 'safari',
    'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur',
    }
}];

buildConfig.services = [
    ['browserstack', {
        browserstackLocal: true,
        opts: {forcelocal: false}
    }]
]
buildConfig.hostname = 'hub.browserstack.com';
buildConfig.user = process.env.BROWSERSTACK_USERNAME
buildConfig.key = process.env.BROWSERSTACK_ACCESS_KEY
export const config = buildConfig