import { Injectable } from "@nestjs/common";
import { User } from "domains/user";
import { CreateUserDto } from "dtos/user";
import { getSignedUrl } from 'aws-cloudfront-sign'
import * as fs from "fs"

@Injectable()
export class UserFactoryService {
    create(dto: CreateUserDto): User {
        const user = new User();
        user.thirdpartyUid = dto.thirdpartyUid;
        user.email = dto.email.toString();
        return user;
    }

    createSignedUrl(path: string, user: User): User {
        const signedUrl = getSignedUrl(
            `https://${process.env.CLOUD_FRONT_DOMAIN}.cloudfront.net/public/${path}`,
            {
              keypairId: `${process.env.CLOUD_FRONT_KEY_ID}`,
              privateKeyPath: "key.pem",
            }
          ) as string;
          
        user.profileImageUrl = signedUrl;

        console.log(signedUrl)

        return user;
    }
}