const presets = [
    [
        "@babel/env",
        {
            // targets определяет поддержку конкретных браузеров
            targets: {
                esmodules: true
            //   edge: "17",
            //   firefox: "60",
            //   chrome: "67",
            //   safari: "11.1",
            //   ie: "10"  // особенно IE 10 требует много трансформаций
            },
            useBuiltIns: "usage"  // автоматическое добавление полифилов
        }
    ],
    "@babel/preset-react"
];

const plugins = [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-class-properties"
];

module.exports = {
    presets,
    plugins
};