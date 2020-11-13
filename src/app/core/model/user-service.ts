import { User } from './user';

export class UserService {
    getUserInfo(){
        let user = new User();
        user.firstName = "Sudharshan";
        user.lastName = "Reddyam";
        return user;
    }
}
