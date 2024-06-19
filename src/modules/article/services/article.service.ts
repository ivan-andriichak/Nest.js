import { Injectable } from '@nestjs/common';
import { In } from 'typeorm';

import { TagEntity } from '../../../database/entities/tag.entity';
import { IUserData } from '../../auth/interfaces/user-data.interfaces';
import { LoggerService } from '../../logger/logger.service';
import { ArticleRepository } from '../../repository/services/article.repository';
import { TagRepository } from '../../repository/services/tag.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { CreateArticleReqDto } from '../dto/req/create-article.req.dto';
import { ArticleResDto } from '../dto/res/article.res.dto';
import { ArticleMapper } from './article.mapper';

@Injectable()
export class ArticleService {
  constructor(
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
    private readonly articleRepository: ArticleRepository,
    private readonly tagRepository: TagRepository,
  ) {}

  public async create(
    userData: IUserData,
    dto: CreateArticleReqDto,
  ): Promise<ArticleResDto> {
    const tags = await this.createTags(dto.tags);
    const article = await this.articleRepository.save(
      this.articleRepository.create({
        ...dto,
        user_id: userData.userId,
        tags,
      }),
    );
    return ArticleMapper.toResponseDTO(article);
  }

  private async createTags(tags: string[]): Promise<TagEntity[]> {
    if (!tags || tags.length === 0) return [];

    const entities = await this.tagRepository.findBy({ name: In(tags) });
    const existingTags = new Set(entities.map((tag) => tag.name));
    const newTags = tags.filter((tag) => !existingTags.has(tag));

    const newEntities = await this.tagRepository.save(
      newTags.map((name) => this.tagRepository.create({ name })),
    );
    return [...entities, ...newEntities];
  }
}