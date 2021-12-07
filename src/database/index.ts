import { ClinicPost } from './clinic-post.entity';
import { Clinic } from './clinic.entity';
import { Role } from './role.entity';
import { User } from './user.entity';
import { ClinicPostComment } from './clinic-post-comment.entity';
import { Owner } from './owner.entity';
import { Administrator } from './administrator.entity';
import { Skill } from './skill.entity';
import { Work } from './work.entity';
import { WorkType } from './work-type.entity';
import { PriceList } from './priceList.entity';
import { Order } from './order.entity';

export const entities = [
  ClinicPost,
  Clinic,
  Role,
  User,
  ClinicPostComment,
  Owner,
  Administrator,
  Skill,
  Work,
  WorkType,
  PriceList,
  Order,
];

export {
  Role,
  User,
  Clinic,
  ClinicPost,
  ClinicPostComment,
  Owner,
  Administrator,
  Skill,
  Work,
  WorkType,
  PriceList,
  Order,
};
