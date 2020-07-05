import {random} from "./random";

export const generator = (j) => {
    let generated = [];
    for (let i = 0; i < j; i++) {
        generated.push({
            id: i + 1,
            name: random('name'),
            username: random('username'),
            email: random('email')
        })
    }
    console.log(generated);
    return generated;
}