import { MockServiceType } from '../../../../test/types/mock-service.type';
import { UserService } from '../services/user.service';

export const mockUserService: MockServiceType<UserService> = {
  getMe: jest.fn(),
  updateMe: jest.fn(),
  getById: jest.fn(),
  remove: jest.fn(),
  follow: jest.fn(),
  unfollow: jest.fn(),
  isEmailUniqueOrThrow: jest.fn(),
  uploadAvatar: jest.fn(),
  deleteAvatar: jest.fn(),
};
