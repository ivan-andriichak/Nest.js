import { MockServiceType } from '../../../../test/types/mock-service.type';
import { LoggerService } from '../logger.service';

export const mockLoggerService: MockServiceType<LoggerService> = {
  log: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
