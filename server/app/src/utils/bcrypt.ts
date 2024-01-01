import bcrypt, { hash } from "bcrypt";
const saltRounds = 10;

async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashing = await bcrypt.hash(password, salt);
    return hashing
}

async function comparePassword(password: string, hashedPassword: string) {
    const compare = await bcrypt.compare(password, hashedPassword);
    if (compare) return true
    return false
}


export { hashPassword, comparePassword }