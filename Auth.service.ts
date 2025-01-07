
import jwt from "jsonwebtoken";
import { Member } from "./models/Member";
import { AUTH_TIMER } from "src/libs/config";
import { Message } from "src/libs/Errors";
import { HttpCode } from "src/libs/Errors";
import Errors from "src/libs/Errors";

class AuthService {
  constructor() {}
  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      jwt.sign(
        payload,
        process.env.SECRET_TOKEN as string,
        { expiresIn: duration },
        (err, token) => {
          if (err) {
            reject(
              new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
            );
          } else resolve(token as string);
        }
      );
    });
  }

  public async checkAuth(token: string): Promise<Member> {
    const result: Member = (await jwt.verify(
      token,
      process.env.SECRET_TOKEN as string
    )) as Member;
    console.log(`--[Auth memberNick: ${result.memberNick} ---`);
    return result;
  }
}

export default AuthService;