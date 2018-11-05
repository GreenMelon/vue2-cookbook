const Console = {
    log(content) {
        const log = console.log.bind(console);
        log(`%c ${content}`, 'color: green; background-color: white;');
    },
};

window.Console = Console;

export default Console;
