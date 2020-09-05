const {merge} = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
    const presets = env.presets || [];

    const mergePresets = [].concat(...[presets]);
    const mergeConfig = mergePresets.map(presetName =>
        require(`./presets/webpack.${presetName}`)(env),
    );
    return merge({}, ...mergeConfig);
};

module.exports = applyPresets;
