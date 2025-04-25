export default {
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest",
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
