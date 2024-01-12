class String {
    constructor(str) {
        this.string = str;
    }

    logger = () => {
        return this.string;
    };
}

const stringLogger = new String("Hello");
const ByeLogger = new String("Bye");

const hello = () => {
    console.log("Aloha");
};

console.log(stringLogger.logger());

module.exports = stringLogger;
