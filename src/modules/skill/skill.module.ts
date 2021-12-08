import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SKILL_CONTROLLERS } from './controllers';

@Module({
  controllers: SKILL_CONTROLLERS,
  providers: [SkillService],
})
export class SkillModule {}
