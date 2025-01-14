import type { Nullish } from '@/shared/types';
import type { TOfferArray } from '@/entities/Offers/types';

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type TUserState = {
  profile: Nullish<TUser>;
  favorites: TOfferArray;
};
