import { MockServiceType } from '../../../../test/types/mock-service.type';
import { FileStorageService } from '../services/file-storage.service';

export const mockFileStorageService: MockServiceType<FileStorageService> = {
  uploadFile: jest.fn(),
  deleteFile: jest.fn(),
};
