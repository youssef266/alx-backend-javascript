import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

const handleProfileSignup = async (firstName, lastName, fileName) => {
    const user = await signUpUser(firstName, lastName);
    let photo;
    try {
        photo = await uploadPhoto(fileName);
    } catch (error) {
        photo = `${error.name}: ${error.message}`;
    }
    return [user, photo];
};

export default handleProfileSignup;