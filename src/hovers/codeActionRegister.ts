import { translation } from "./handler/translation";

const hoverRegister = [
    {
        selector: [{scheme: 'file'}, {scheme: 'untitled'}], 
        provider: translation()
    }
];

export default hoverRegister;