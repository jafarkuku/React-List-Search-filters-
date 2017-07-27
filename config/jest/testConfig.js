module.exports = wallaby => ({
    files: [
        'src/**/*.js',
        '!src/**/*-spec.js',
        {pattern: 'testConfig.js', instrument: false}
    ],

    tests: [
        'src/**/*-spec.js'
    ],

    env: {
        type: 'node',
        runner: 'node',
    },
    testFramework: 'jest',

    compilers: {
        'src/**/*.js': wallaby.compilers.babel()
    },

    setup: (wallaby) => {
        wallaby.testFramework.configure({
            setupFiles: ['testConfig.js']
        });
    }
});

if (global.document) {
    var originalProcessNextTick = process.nextTick;
    process.nextTick = function (cb) {
        if (cb.toString().indexOf('function flush()') === 0) return;
        return originalProcessNextTick.apply(this, arguments);
    }
}
