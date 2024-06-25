import { UserEntity } from '../../../database/entities/user.entity';
import { UserResDto } from '../dto/res/user.res.dto';

export class UserMapper {
  public static toResponseDTO(user: UserEntity): UserResDto {
    console.log(user);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      bio: user.bio || null,
      image: user.image
        ? `${process.env.AWS_S3_BUCKET_URL}/${user.image}`
        : null,
      isFollowed: user.followings ? user.followings.length > 0 : false,
    };
  }
}
