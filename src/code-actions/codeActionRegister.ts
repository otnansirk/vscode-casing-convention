import { translation } from "./handler/translation";

const codeActionRegister = [
    {
        selector: "*", 
        provider: translation()
    }
];

export default codeActionRegister;