import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AuthModel = {
  __typename?: 'AuthModel';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserModel>;
};

export type BookmarkInput = {
  /** Тип контента, который добавить в избранные */
  targetContentType: TargetContentType;
  /** id контента */
  targetId: Scalars['ID']['input'];
};

export type BookmarkModel = {
  __typename?: 'BookmarkModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  targetContentType: TargetContentType;
  targetId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type CandidateCardModel = {
  __typename?: 'CandidateCardModel';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  direction: Scalars['String']['output'];
  experience: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  information?: Maybe<Scalars['JSON']['output']>;
  isHidden: Scalars['Boolean']['output'];
  lastHoisting?: Maybe<Scalars['DateTime']['output']>;
  portfolioUrls: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type CategoryInput = {
  position?: InputMaybe<Scalars['Float']['input']>;
  /** Slug категории */
  slug: Scalars['String']['input'];
  /** Заголовок категории */
  title: Scalars['String']['input'];
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  position: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  subcategories: Array<SubcategoryModel>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangeEmailInput = {
  email: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChangeProfileInfoInput = {
  city: Scalars['String']['input'];
  iconSpecialization: Scalars['String']['input'];
  socialLinks: Array<LinkInput>;
  specialization: SpecializationInput;
  status: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CommentModel = {
  __typename?: 'CommentModel';
  author: UserModel;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  replies?: Maybe<Array<CommentModel>>;
  targetContentType: TargetContentType;
  targetId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  targetContentType: TargetContentType;
  targetId: Scalars['ID']['input'];
};

export type CreateProjectInput = {
  description: Scalars['String']['input'];
  genres: Array<Scalars['String']['input']>;
  images: Array<Scalars['String']['input']>;
  isGathering?: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  topicIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateSpecializationInput = {
  careerPath: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTopicInput = {
  attachedProjectId?: InputMaybe<Scalars['String']['input']>;
  contentBlocks: Scalars['JSON']['input'];
  subcategoryId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type DeactivateAccountInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pin?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  browser: Scalars['String']['output'];
  os: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type EnableTotpInput = {
  pin: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type FollowModel = {
  __typename?: 'FollowModel';
  createdAt: Scalars['DateTime']['output'];
  follower: UserModel;
  followerId: Scalars['String']['output'];
  following: UserModel;
  followingId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LinkInput = {
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type LinkModel = {
  __typename?: 'LinkModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  position: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type LocationModel = {
  __typename?: 'LocationModel';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  latidute: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pin?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeEmail: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  changeProfileAvatar: Scalars['Boolean']['output'];
  changeProfileInfo: Scalars['Boolean']['output'];
  clearSessionCookie: Scalars['Boolean']['output'];
  createCategory: Scalars['Boolean']['output'];
  createComment: CommentModel;
  createProject: ProjectModel;
  createSpecialization: Scalars['Boolean']['output'];
  createSubcategory: Scalars['Boolean']['output'];
  createTopic: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  deactivateAccount: AuthModel;
  deleteCategory: Scalars['Boolean']['output'];
  deleteComment: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteSubcategory: Scalars['Boolean']['output'];
  deleteTopic: Scalars['Boolean']['output'];
  disableTotp: Scalars['Boolean']['output'];
  enableTotp: Scalars['Boolean']['output'];
  followProfile: Scalars['Boolean']['output'];
  loginUser: AuthModel;
  logoutUser: Scalars['Boolean']['output'];
  newPassword: Scalars['Boolean']['output'];
  removeProfileAvatar: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  toggleBookmark: Scalars['Boolean']['output'];
  unfollowProfile: Scalars['Boolean']['output'];
  updateCategory: Scalars['Boolean']['output'];
  updateComment: CommentModel;
  updateProject: ProjectModel;
  updateSubcategory: Scalars['Boolean']['output'];
  updateTopic: TopicModel;
  verifyAccount: AuthModel;
};


export type MutationChangeEmailArgs = {
  data: ChangeEmailInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangeProfileAvatarArgs = {
  avatar: Scalars['Upload']['input'];
};


export type MutationChangeProfileInfoArgs = {
  data: ChangeProfileInfoInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationCreateProjectArgs = {
  data: CreateProjectInput;
};


export type MutationCreateSpecializationArgs = {
  data: CreateSpecializationInput;
};


export type MutationCreateSubcategoryArgs = {
  data: SubcategoryInput;
};


export type MutationCreateTopicArgs = {
  data: CreateTopicInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeactivateAccountArgs = {
  data: DeactivateAccountInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSubcategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnableTotpArgs = {
  data: EnableTotpInput;
};


export type MutationFollowProfileArgs = {
  profilelId: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationNewPasswordArgs = {
  data: NewPasswordInput;
};


export type MutationRemoveSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationToggleBookmarkArgs = {
  data: BookmarkInput;
};


export type MutationUnfollowProfileArgs = {
  profilelId: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  commentId: Scalars['String']['input'];
  data: UpdateCommentInput;
};


export type MutationUpdateProjectArgs = {
  data: UpdateProjectInput;
};


export type MutationUpdateSubcategoryArgs = {
  data: SubcategoryInput;
  slug: Scalars['String']['input'];
};


export type MutationUpdateTopicArgs = {
  data: UpdateTopicInput;
};


export type MutationVerifyAccountArgs = {
  data: VerificationInput;
};

export type NewPasswordInput = {
  password: Scalars['String']['input'];
  passwordRepeat: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  data: Array<CommentModel>;
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginatedProjects = {
  __typename?: 'PaginatedProjects';
  data: Array<ProjectModel>;
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationInput = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectModel = {
  __typename?: 'ProjectModel';
  author: UserModel;
  comments: Array<CommentModel>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  genres: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  isBookmarked: Scalars['Boolean']['output'];
  isGathering: Scalars['Boolean']['output'];
  platformsLinks: Array<LinkModel>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topics: Array<TopicModel>;
  updatedAt: Scalars['DateTime']['output'];
  viewCount: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllCategories: Array<CategoryModel>;
  findAllCommentReplies: PaginatedComments;
  findAllCommentsByTarget: PaginatedComments;
  findAllSpecializations: Array<SpecializationModel>;
  findAllSubcategories: Array<SubcategoryModel>;
  findAllTopics: Array<TopicModel>;
  findCurrentSession: SessionModel;
  findMyBookmarks: Array<BookmarkModel>;
  findMyFollowers: Array<FollowModel>;
  findMyFollowings: Array<FollowModel>;
  findOneCategory: CategoryModel;
  findPopularProjects: Array<ProjectModel>;
  findPopularSubcategories: Array<SubcategoryModel>;
  findProfile: UserModel;
  findProfileByUid: UserModel;
  findProjectById: ProjectModel;
  findProjectBySlug?: Maybe<ProjectModel>;
  findProjectsByAuthor: PaginatedProjects;
  findSessionsByUser: Array<SessionModel>;
  findSubcategoriesByCategory: Array<SubcategoryModel>;
  findTopicsByAuthor: Array<TopicModel>;
  generateTotpSecret: TotpModel;
  topicById: TopicModel;
};


export type QueryFindAllCommentRepliesArgs = {
  pagination: PaginationInput;
  parentId: Scalars['String']['input'];
};


export type QueryFindAllCommentsByTargetArgs = {
  pagination: PaginationInput;
  targetContentType: Scalars['String']['input'];
  targetId: Scalars['String']['input'];
};


export type QueryFindAllTopicsArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
  subcategoryId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindOneCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindPopularProjectsArgs = {
  limit?: Scalars['Float']['input'];
};


export type QueryFindPopularSubcategoriesArgs = {
  pagination: PaginationInput;
};


export type QueryFindProfileByUidArgs = {
  uid: Scalars['Float']['input'];
};


export type QueryFindProjectByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindProjectBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindProjectsByAuthorArgs = {
  authorId: Scalars['String']['input'];
  pagination: PaginationInput;
};


export type QueryFindSubcategoriesByCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindTopicsByAuthorArgs = {
  authorId: Scalars['String']['input'];
  pagination: PaginationInput;
};


export type QueryTopicByIdArgs = {
  id: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
};

export type SessionMetadataModel = {
  __typename?: 'SessionMetadataModel';
  device: DeviceModel;
  ip: Scalars['String']['output'];
  location: LocationModel;
};

export type SessionModel = {
  __typename?: 'SessionModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: SessionMetadataModel;
  userId: Scalars['String']['output'];
};

export type SpecializationInput = {
  title: Scalars['String']['input'];
};

export type SpecializationModel = {
  __typename?: 'SpecializationModel';
  careerPath: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SubcategoryInput = {
  categoryId: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SubcategoryModel = {
  __typename?: 'SubcategoryModel';
  category: CategoryModel;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  position: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topics: Array<Maybe<TopicModel>>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum TargetContentType {
  CandidateCard = 'CANDIDATE_CARD',
  Project = 'PROJECT',
  Topic = 'TOPIC'
}

export type TopicModel = {
  __typename?: 'TopicModel';
  attachedProject?: Maybe<ProjectModel>;
  attachedProjectId?: Maybe<Scalars['String']['output']>;
  author: UserModel;
  authorId: Scalars['String']['output'];
  bookmarks: Array<BookmarkModel>;
  comments: Array<CommentModel>;
  contentBlocks: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isBookmarked: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  subcategory: SubcategoryModel;
  subcategoryId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewCount: Scalars['Float']['output'];
};

export type TotpModel = {
  __typename?: 'TotpModel';
  qrcodeUrl: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isGathering?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopicInput = {
  attachedProjectId?: InputMaybe<Scalars['String']['input']>;
  contentBlocks: Scalars['JSON']['input'];
  id: Scalars['ID']['input'];
  subcategoryId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  avatar?: Maybe<Scalars['String']['output']>;
  bookmarks: Array<BookmarkModel>;
  candidateCard?: Maybe<CandidateCardModel>;
  city?: Maybe<Scalars['String']['output']>;
  comments: Array<CommentModel>;
  createdAt: Scalars['DateTime']['output'];
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  followers: Array<FollowModel>;
  followings: Array<FollowModel>;
  iconSpecialization?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDeactivated: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isGatheringTeam: Scalars['Boolean']['output'];
  isLookingTeam: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  projects: Array<ProjectModel>;
  role: Scalars['String']['output'];
  socialLinks: Array<LinkModel>;
  specialization?: Maybe<SpecializationModel>;
  specializationId: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  topics: Array<TopicModel>;
  uid: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
  views: Array<ViewModel>;
};

export type VerificationInput = {
  token: Scalars['String']['input'];
};

export type ViewModel = {
  __typename?: 'ViewModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  targetContentType: TargetContentType;
  targetId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewerId: Scalars['ID']['output'];
};

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: boolean };

export type DeactivateAccountMutationVariables = Exact<{
  data: DeactivateAccountInput;
}>;


export type DeactivateAccountMutation = { __typename?: 'Mutation', deactivateAccount: { __typename?: 'AuthModel', message?: string | null, user?: { __typename?: 'UserModel', isDeactivated: boolean } | null } };

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthModel', message?: string | null, user?: { __typename?: 'UserModel', uid: number } | null } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type NewPasswordMutationVariables = Exact<{
  data: NewPasswordInput;
}>;


export type NewPasswordMutation = { __typename?: 'Mutation', newPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type VerifyAccountMutationVariables = Exact<{
  data: VerificationInput;
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', verifyAccount: { __typename?: 'AuthModel', message?: string | null, user?: { __typename?: 'UserModel', isEmailVerified: boolean } | null } };

export type CreateTopicMutationVariables = Exact<{
  data: CreateTopicInput;
}>;


export type CreateTopicMutation = { __typename?: 'Mutation', createTopic: boolean };

export type FindAllTopicsQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['String']['input']>;
  subcategoryId?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
}>;


export type FindAllTopicsQuery = { __typename?: 'Query', findAllTopics: Array<{ __typename?: 'TopicModel', id: string, title: string, slug: string, contentBlocks: any, viewCount: number, createdAt: any, isBookmarked: boolean, subcategory: { __typename?: 'SubcategoryModel', title: string, slug: string, category: { __typename?: 'CategoryModel', title: string, slug: string } }, author: { __typename?: 'UserModel', id: string, uid: number, avatar?: string | null, username?: string | null, status?: string | null, isLookingTeam: boolean, isGatheringTeam: boolean, iconSpecialization?: string | null, specialization?: { __typename?: 'SpecializationModel', title: string } | null, socialLinks: Array<{ __typename?: 'LinkModel', title: string, url: string }>, candidateCard?: { __typename?: 'CandidateCardModel', direction: string } | null } }> };

export type ChangeEmailMutationVariables = Exact<{
  data: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail: boolean };

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type ClearSessionCookieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCookieMutation = { __typename?: 'Mutation', clearSessionCookie: boolean };

export type DisableTotpMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableTotpMutation = { __typename?: 'Mutation', disableTotp: boolean };

export type EnableTotpMutationVariables = Exact<{
  data: EnableTotpInput;
}>;


export type EnableTotpMutation = { __typename?: 'Mutation', enableTotp: boolean };

export type RemoveSessionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSessionMutation = { __typename?: 'Mutation', removeSession: boolean };

export type FindAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoriesQuery = { __typename?: 'Query', findAllCategories: Array<{ __typename?: 'CategoryModel', id: string, updatedAt: any, title: string, slug: string, subcategories: Array<{ __typename?: 'SubcategoryModel', id: string, title: string, slug: string }> }> };

export type FindOneCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindOneCategoryQuery = { __typename?: 'Query', findOneCategory: { __typename?: 'CategoryModel', id: string, title: string, slug: string, subcategories: Array<{ __typename?: 'SubcategoryModel', id: string, title: string, slug: string }> } };

export type FindPopularSubcategoriesQueryVariables = Exact<{
  pagination: PaginationInput;
}>;


export type FindPopularSubcategoriesQuery = { __typename?: 'Query', findPopularSubcategories: Array<{ __typename?: 'SubcategoryModel', id: string, title: string, slug: string, category: { __typename?: 'CategoryModel', slug: string }, topics: Array<{ __typename?: 'TopicModel', id: string, title: string, slug: string, contentBlocks: any, viewCount: number, createdAt: any, isBookmarked: boolean, subcategory: { __typename?: 'SubcategoryModel', title: string, slug: string, category: { __typename?: 'CategoryModel', title: string, slug: string } }, author: { __typename?: 'UserModel', id: string, uid: number, avatar?: string | null, username?: string | null, status?: string | null, isLookingTeam: boolean, isGatheringTeam: boolean, iconSpecialization?: string | null, specialization?: { __typename?: 'SpecializationModel', title: string } | null, socialLinks: Array<{ __typename?: 'LinkModel', title: string, url: string }>, candidateCard?: { __typename?: 'CandidateCardModel', direction: string } | null } } | null> }> };

export type FindSubcategoriesByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindSubcategoriesByCategoryQuery = { __typename?: 'Query', findSubcategoriesByCategory: Array<{ __typename?: 'SubcategoryModel', id: string, title: string, slug: string, topics: Array<{ __typename?: 'TopicModel', id: string, title: string, viewCount: number, createdAt: any, isBookmarked: boolean, author: { __typename?: 'UserModel', id: string, uid: number, avatar?: string | null, username?: string | null, status?: string | null, isLookingTeam: boolean, isGatheringTeam: boolean, iconSpecialization?: string | null, specialization?: { __typename?: 'SpecializationModel', title: string } | null, socialLinks: Array<{ __typename?: 'LinkModel', title: string, url: string }>, candidateCard?: { __typename?: 'CandidateCardModel', direction: string } | null } } | null> }> };

export type FindAllSpecializationsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllSpecializationsQuery = { __typename?: 'Query', findAllSpecializations: Array<{ __typename?: 'SpecializationModel', id: string, title: string, careerPath: string, createdAt: any, updatedAt: any }> };

export type FindCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentSessionQuery = { __typename?: 'Query', findCurrentSession: { __typename?: 'SessionModel', id: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', country: string, city: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', browser: string, os: string } } } };

export type FindProfileByUidQueryVariables = Exact<{
  uid: Scalars['Float']['input'];
}>;


export type FindProfileByUidQuery = { __typename?: 'Query', findProfileByUid: { __typename?: 'UserModel', id: string, uid: number, username?: string | null, avatar?: string | null, status?: string | null, iconSpecialization?: string | null, isLookingTeam: boolean, isGatheringTeam: boolean, createdAt: any, updatedAt: any, candidateCard?: { __typename?: 'CandidateCardModel', id: string, direction: string, description: string } | null, specialization?: { __typename?: 'SpecializationModel', id: string, title: string, careerPath: string } | null, socialLinks: Array<{ __typename?: 'LinkModel', id: string, title: string, url: string }> } };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, uid: number, username?: string | null, email: string, avatar?: string | null, isVerified: boolean } };

export type GenerateTotpSecretQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateTotpSecretQuery = { __typename?: 'Query', generateTotpSecret: { __typename?: 'TotpModel', qrcodeUrl: string, secret: string } };


export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data)
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeactivateAccountDocument = gql`
    mutation DeactivateAccount($data: DeactivateAccountInput!) {
  deactivateAccount(data: $data) {
    user {
      isDeactivated
    }
    message
  }
}
    `;
export type DeactivateAccountMutationFn = Apollo.MutationFunction<DeactivateAccountMutation, DeactivateAccountMutationVariables>;

/**
 * __useDeactivateAccountMutation__
 *
 * To run a mutation, you first call `useDeactivateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateAccountMutation, { data, loading, error }] = useDeactivateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeactivateAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeactivateAccountMutation, DeactivateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeactivateAccountMutation, DeactivateAccountMutationVariables>(DeactivateAccountDocument, options);
      }
export type DeactivateAccountMutationHookResult = ReturnType<typeof useDeactivateAccountMutation>;
export type DeactivateAccountMutationResult = Apollo.MutationResult<DeactivateAccountMutation>;
export type DeactivateAccountMutationOptions = Apollo.BaseMutationOptions<DeactivateAccountMutation, DeactivateAccountMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: LoginInput!) {
  loginUser(data: $data) {
    user {
      uid
    }
    message
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const NewPasswordDocument = gql`
    mutation NewPassword($data: NewPasswordInput!) {
  newPassword(data: $data)
}
    `;
export type NewPasswordMutationFn = Apollo.MutationFunction<NewPasswordMutation, NewPasswordMutationVariables>;

/**
 * __useNewPasswordMutation__
 *
 * To run a mutation, you first call `useNewPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newPasswordMutation, { data, loading, error }] = useNewPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useNewPasswordMutation(baseOptions?: Apollo.MutationHookOptions<NewPasswordMutation, NewPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewPasswordMutation, NewPasswordMutationVariables>(NewPasswordDocument, options);
      }
export type NewPasswordMutationHookResult = ReturnType<typeof useNewPasswordMutation>;
export type NewPasswordMutationResult = Apollo.MutationResult<NewPasswordMutation>;
export type NewPasswordMutationOptions = Apollo.BaseMutationOptions<NewPasswordMutation, NewPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyAccountDocument = gql`
    mutation VerifyAccount($data: VerificationInput!) {
  verifyAccount(data: $data) {
    user {
      isEmailVerified
    }
    message
  }
}
    `;
export type VerifyAccountMutationFn = Apollo.MutationFunction<VerifyAccountMutation, VerifyAccountMutationVariables>;

/**
 * __useVerifyAccountMutation__
 *
 * To run a mutation, you first call `useVerifyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyAccountMutation, { data, loading, error }] = useVerifyAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useVerifyAccountMutation(baseOptions?: Apollo.MutationHookOptions<VerifyAccountMutation, VerifyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyAccountMutation, VerifyAccountMutationVariables>(VerifyAccountDocument, options);
      }
export type VerifyAccountMutationHookResult = ReturnType<typeof useVerifyAccountMutation>;
export type VerifyAccountMutationResult = Apollo.MutationResult<VerifyAccountMutation>;
export type VerifyAccountMutationOptions = Apollo.BaseMutationOptions<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const CreateTopicDocument = gql`
    mutation CreateTopic($data: CreateTopicInput!) {
  createTopic(data: $data)
}
    `;
export type CreateTopicMutationFn = Apollo.MutationFunction<CreateTopicMutation, CreateTopicMutationVariables>;

/**
 * __useCreateTopicMutation__
 *
 * To run a mutation, you first call `useCreateTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTopicMutation, { data, loading, error }] = useCreateTopicMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTopicMutation(baseOptions?: Apollo.MutationHookOptions<CreateTopicMutation, CreateTopicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTopicMutation, CreateTopicMutationVariables>(CreateTopicDocument, options);
      }
export type CreateTopicMutationHookResult = ReturnType<typeof useCreateTopicMutation>;
export type CreateTopicMutationResult = Apollo.MutationResult<CreateTopicMutation>;
export type CreateTopicMutationOptions = Apollo.BaseMutationOptions<CreateTopicMutation, CreateTopicMutationVariables>;
export const FindAllTopicsDocument = gql`
    query FindAllTopics($categoryId: String, $subcategoryId: String, $pagination: PaginationInput!) {
  findAllTopics(
    categoryId: $categoryId
    subcategoryId: $subcategoryId
    pagination: $pagination
  ) {
    id
    title
    slug
    contentBlocks
    viewCount
    createdAt
    subcategory {
      title
      slug
      category {
        title
        slug
      }
    }
    isBookmarked
    author {
      id
      uid
      avatar
      username
      status
      isLookingTeam
      isGatheringTeam
      iconSpecialization
      specialization {
        title
      }
      socialLinks {
        title
        url
      }
      candidateCard {
        direction
      }
    }
  }
}
    `;

/**
 * __useFindAllTopicsQuery__
 *
 * To run a query within a React component, call `useFindAllTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllTopicsQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      subcategoryId: // value for 'subcategoryId'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useFindAllTopicsQuery(baseOptions: Apollo.QueryHookOptions<FindAllTopicsQuery, FindAllTopicsQueryVariables> & ({ variables: FindAllTopicsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllTopicsQuery, FindAllTopicsQueryVariables>(FindAllTopicsDocument, options);
      }
export function useFindAllTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllTopicsQuery, FindAllTopicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllTopicsQuery, FindAllTopicsQueryVariables>(FindAllTopicsDocument, options);
        }
export function useFindAllTopicsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllTopicsQuery, FindAllTopicsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllTopicsQuery, FindAllTopicsQueryVariables>(FindAllTopicsDocument, options);
        }
export type FindAllTopicsQueryHookResult = ReturnType<typeof useFindAllTopicsQuery>;
export type FindAllTopicsLazyQueryHookResult = ReturnType<typeof useFindAllTopicsLazyQuery>;
export type FindAllTopicsSuspenseQueryHookResult = ReturnType<typeof useFindAllTopicsSuspenseQuery>;
export type FindAllTopicsQueryResult = Apollo.QueryResult<FindAllTopicsQuery, FindAllTopicsQueryVariables>;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($data: ChangeEmailInput!) {
  changeEmail(data: $data)
}
    `;
export type ChangeEmailMutationFn = Apollo.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, options);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = Apollo.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = Apollo.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ClearSessionCookieDocument = gql`
    mutation ClearSessionCookie {
  clearSessionCookie
}
    `;
export type ClearSessionCookieMutationFn = Apollo.MutationFunction<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;

/**
 * __useClearSessionCookieMutation__
 *
 * To run a mutation, you first call `useClearSessionCookieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearSessionCookieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearSessionCookieMutation, { data, loading, error }] = useClearSessionCookieMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearSessionCookieMutation(baseOptions?: Apollo.MutationHookOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>(ClearSessionCookieDocument, options);
      }
export type ClearSessionCookieMutationHookResult = ReturnType<typeof useClearSessionCookieMutation>;
export type ClearSessionCookieMutationResult = Apollo.MutationResult<ClearSessionCookieMutation>;
export type ClearSessionCookieMutationOptions = Apollo.BaseMutationOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;
export const DisableTotpDocument = gql`
    mutation DisableTotp {
  disableTotp
}
    `;
export type DisableTotpMutationFn = Apollo.MutationFunction<DisableTotpMutation, DisableTotpMutationVariables>;

/**
 * __useDisableTotpMutation__
 *
 * To run a mutation, you first call `useDisableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableTotpMutation, { data, loading, error }] = useDisableTotpMutation({
 *   variables: {
 *   },
 * });
 */
export function useDisableTotpMutation(baseOptions?: Apollo.MutationHookOptions<DisableTotpMutation, DisableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisableTotpMutation, DisableTotpMutationVariables>(DisableTotpDocument, options);
      }
export type DisableTotpMutationHookResult = ReturnType<typeof useDisableTotpMutation>;
export type DisableTotpMutationResult = Apollo.MutationResult<DisableTotpMutation>;
export type DisableTotpMutationOptions = Apollo.BaseMutationOptions<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = gql`
    mutation EnableTotp($data: EnableTotpInput!) {
  enableTotp(data: $data)
}
    `;
export type EnableTotpMutationFn = Apollo.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>;

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: Apollo.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, options);
      }
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>;
export type EnableTotpMutationResult = Apollo.MutationResult<EnableTotpMutation>;
export type EnableTotpMutationOptions = Apollo.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>;
export const RemoveSessionDocument = gql`
    mutation RemoveSession($id: String!) {
  removeSession(id: $id)
}
    `;
export type RemoveSessionMutationFn = Apollo.MutationFunction<RemoveSessionMutation, RemoveSessionMutationVariables>;

/**
 * __useRemoveSessionMutation__
 *
 * To run a mutation, you first call `useRemoveSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSessionMutation, { data, loading, error }] = useRemoveSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSessionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSessionMutation, RemoveSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSessionMutation, RemoveSessionMutationVariables>(RemoveSessionDocument, options);
      }
export type RemoveSessionMutationHookResult = ReturnType<typeof useRemoveSessionMutation>;
export type RemoveSessionMutationResult = Apollo.MutationResult<RemoveSessionMutation>;
export type RemoveSessionMutationOptions = Apollo.BaseMutationOptions<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const FindAllCategoriesDocument = gql`
    query FindAllCategories {
  findAllCategories {
    id
    updatedAt
    title
    slug
    subcategories {
      id
      title
      slug
    }
  }
}
    `;

/**
 * __useFindAllCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
      }
export function useFindAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export function useFindAllCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export type FindAllCategoriesQueryHookResult = ReturnType<typeof useFindAllCategoriesQuery>;
export type FindAllCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesLazyQuery>;
export type FindAllCategoriesSuspenseQueryHookResult = ReturnType<typeof useFindAllCategoriesSuspenseQuery>;
export type FindAllCategoriesQueryResult = Apollo.QueryResult<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindOneCategoryDocument = gql`
    query FindOneCategory($slug: String!) {
  findOneCategory(slug: $slug) {
    id
    title
    slug
    subcategories {
      id
      title
      slug
    }
  }
}
    `;

/**
 * __useFindOneCategoryQuery__
 *
 * To run a query within a React component, call `useFindOneCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindOneCategoryQuery(baseOptions: Apollo.QueryHookOptions<FindOneCategoryQuery, FindOneCategoryQueryVariables> & ({ variables: FindOneCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneCategoryQuery, FindOneCategoryQueryVariables>(FindOneCategoryDocument, options);
      }
export function useFindOneCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneCategoryQuery, FindOneCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneCategoryQuery, FindOneCategoryQueryVariables>(FindOneCategoryDocument, options);
        }
export function useFindOneCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindOneCategoryQuery, FindOneCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOneCategoryQuery, FindOneCategoryQueryVariables>(FindOneCategoryDocument, options);
        }
export type FindOneCategoryQueryHookResult = ReturnType<typeof useFindOneCategoryQuery>;
export type FindOneCategoryLazyQueryHookResult = ReturnType<typeof useFindOneCategoryLazyQuery>;
export type FindOneCategorySuspenseQueryHookResult = ReturnType<typeof useFindOneCategorySuspenseQuery>;
export type FindOneCategoryQueryResult = Apollo.QueryResult<FindOneCategoryQuery, FindOneCategoryQueryVariables>;
export const FindPopularSubcategoriesDocument = gql`
    query FindPopularSubcategories($pagination: PaginationInput!) {
  findPopularSubcategories(pagination: $pagination) {
    id
    title
    slug
    category {
      slug
    }
    topics {
      id
      title
      slug
      contentBlocks
      viewCount
      createdAt
      subcategory {
        title
        slug
        category {
          title
          slug
        }
      }
      isBookmarked
      author {
        id
        uid
        avatar
        username
        status
        isLookingTeam
        isGatheringTeam
        iconSpecialization
        specialization {
          title
        }
        socialLinks {
          title
          url
        }
        candidateCard {
          direction
        }
      }
    }
  }
}
    `;

/**
 * __useFindPopularSubcategoriesQuery__
 *
 * To run a query within a React component, call `useFindPopularSubcategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPopularSubcategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPopularSubcategoriesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useFindPopularSubcategoriesQuery(baseOptions: Apollo.QueryHookOptions<FindPopularSubcategoriesQuery, FindPopularSubcategoriesQueryVariables> & ({ variables: FindPopularSubcategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPopularSubcategoriesQuery, FindPopularSubcategoriesQueryVariables>(FindPopularSubcategoriesDocument, options);
      }
export function useFindPopularSubcategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPopularSubcategoriesQuery, FindPopularSubcategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPopularSubcategoriesQuery, FindPopularSubcategoriesQueryVariables>(FindPopularSubcategoriesDocument, options);
        }
export function useFindPopularSubcategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindPopularSubcategoriesQuery, FindPopularSubcategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPopularSubcategoriesQuery, FindPopularSubcategoriesQueryVariables>(FindPopularSubcategoriesDocument, options);
        }
export type FindPopularSubcategoriesQueryHookResult = ReturnType<typeof useFindPopularSubcategoriesQuery>;
export type FindPopularSubcategoriesLazyQueryHookResult = ReturnType<typeof useFindPopularSubcategoriesLazyQuery>;
export type FindPopularSubcategoriesSuspenseQueryHookResult = ReturnType<typeof useFindPopularSubcategoriesSuspenseQuery>;
export type FindPopularSubcategoriesQueryResult = Apollo.QueryResult<FindPopularSubcategoriesQuery, FindPopularSubcategoriesQueryVariables>;
export const FindSubcategoriesByCategoryDocument = gql`
    query FindSubcategoriesByCategory($slug: String!) {
  findSubcategoriesByCategory(slug: $slug) {
    id
    title
    slug
    topics {
      id
      title
      viewCount
      createdAt
      isBookmarked
      author {
        id
        uid
        avatar
        username
        status
        isLookingTeam
        isGatheringTeam
        iconSpecialization
        specialization {
          title
        }
        socialLinks {
          title
          url
        }
        candidateCard {
          direction
        }
      }
    }
  }
}
    `;

/**
 * __useFindSubcategoriesByCategoryQuery__
 *
 * To run a query within a React component, call `useFindSubcategoriesByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSubcategoriesByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSubcategoriesByCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindSubcategoriesByCategoryQuery(baseOptions: Apollo.QueryHookOptions<FindSubcategoriesByCategoryQuery, FindSubcategoriesByCategoryQueryVariables> & ({ variables: FindSubcategoriesByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSubcategoriesByCategoryQuery, FindSubcategoriesByCategoryQueryVariables>(FindSubcategoriesByCategoryDocument, options);
      }
export function useFindSubcategoriesByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSubcategoriesByCategoryQuery, FindSubcategoriesByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSubcategoriesByCategoryQuery, FindSubcategoriesByCategoryQueryVariables>(FindSubcategoriesByCategoryDocument, options);
        }
export function useFindSubcategoriesByCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSubcategoriesByCategoryQuery, FindSubcategoriesByCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSubcategoriesByCategoryQuery, FindSubcategoriesByCategoryQueryVariables>(FindSubcategoriesByCategoryDocument, options);
        }
export type FindSubcategoriesByCategoryQueryHookResult = ReturnType<typeof useFindSubcategoriesByCategoryQuery>;
export type FindSubcategoriesByCategoryLazyQueryHookResult = ReturnType<typeof useFindSubcategoriesByCategoryLazyQuery>;
export type FindSubcategoriesByCategorySuspenseQueryHookResult = ReturnType<typeof useFindSubcategoriesByCategorySuspenseQuery>;
export type FindSubcategoriesByCategoryQueryResult = Apollo.QueryResult<FindSubcategoriesByCategoryQuery, FindSubcategoriesByCategoryQueryVariables>;
export const FindAllSpecializationsDocument = gql`
    query FindAllSpecializations {
  findAllSpecializations {
    id
    title
    careerPath
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useFindAllSpecializationsQuery__
 *
 * To run a query within a React component, call `useFindAllSpecializationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllSpecializationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllSpecializationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllSpecializationsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllSpecializationsQuery, FindAllSpecializationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllSpecializationsQuery, FindAllSpecializationsQueryVariables>(FindAllSpecializationsDocument, options);
      }
export function useFindAllSpecializationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllSpecializationsQuery, FindAllSpecializationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllSpecializationsQuery, FindAllSpecializationsQueryVariables>(FindAllSpecializationsDocument, options);
        }
export function useFindAllSpecializationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllSpecializationsQuery, FindAllSpecializationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllSpecializationsQuery, FindAllSpecializationsQueryVariables>(FindAllSpecializationsDocument, options);
        }
export type FindAllSpecializationsQueryHookResult = ReturnType<typeof useFindAllSpecializationsQuery>;
export type FindAllSpecializationsLazyQueryHookResult = ReturnType<typeof useFindAllSpecializationsLazyQuery>;
export type FindAllSpecializationsSuspenseQueryHookResult = ReturnType<typeof useFindAllSpecializationsSuspenseQuery>;
export type FindAllSpecializationsQueryResult = Apollo.QueryResult<FindAllSpecializationsQuery, FindAllSpecializationsQueryVariables>;
export const FindCurrentSessionDocument = gql`
    query FindCurrentSession {
  findCurrentSession {
    id
    createdAt
    metadata {
      location {
        country
        city
        latidute
        longitude
      }
      device {
        browser
        os
      }
      ip
    }
  }
}
    `;

/**
 * __useFindCurrentSessionQuery__
 *
 * To run a query within a React component, call `useFindCurrentSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentSessionQuery(baseOptions?: Apollo.QueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
      }
export function useFindCurrentSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export function useFindCurrentSessionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export type FindCurrentSessionQueryHookResult = ReturnType<typeof useFindCurrentSessionQuery>;
export type FindCurrentSessionLazyQueryHookResult = ReturnType<typeof useFindCurrentSessionLazyQuery>;
export type FindCurrentSessionSuspenseQueryHookResult = ReturnType<typeof useFindCurrentSessionSuspenseQuery>;
export type FindCurrentSessionQueryResult = Apollo.QueryResult<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>;
export const FindProfileByUidDocument = gql`
    query FindProfileByUid($uid: Float!) {
  findProfileByUid(uid: $uid) {
    id
    uid
    username
    avatar
    status
    iconSpecialization
    isLookingTeam
    isGatheringTeam
    candidateCard {
      id
      direction
      description
    }
    specialization {
      id
      title
      careerPath
    }
    socialLinks {
      id
      title
      url
    }
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useFindProfileByUidQuery__
 *
 * To run a query within a React component, call `useFindProfileByUidQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileByUidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileByUidQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindProfileByUidQuery(baseOptions: Apollo.QueryHookOptions<FindProfileByUidQuery, FindProfileByUidQueryVariables> & ({ variables: FindProfileByUidQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileByUidQuery, FindProfileByUidQueryVariables>(FindProfileByUidDocument, options);
      }
export function useFindProfileByUidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileByUidQuery, FindProfileByUidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileByUidQuery, FindProfileByUidQueryVariables>(FindProfileByUidDocument, options);
        }
export function useFindProfileByUidSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileByUidQuery, FindProfileByUidQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileByUidQuery, FindProfileByUidQueryVariables>(FindProfileByUidDocument, options);
        }
export type FindProfileByUidQueryHookResult = ReturnType<typeof useFindProfileByUidQuery>;
export type FindProfileByUidLazyQueryHookResult = ReturnType<typeof useFindProfileByUidLazyQuery>;
export type FindProfileByUidSuspenseQueryHookResult = ReturnType<typeof useFindProfileByUidSuspenseQuery>;
export type FindProfileByUidQueryResult = Apollo.QueryResult<FindProfileByUidQuery, FindProfileByUidQueryVariables>;
export const FindProfileDocument = gql`
    query FindProfile {
  findProfile {
    id
    uid
    username
    email
    avatar
    isVerified
  }
}
    `;

/**
 * __useFindProfileQuery__
 *
 * To run a query within a React component, call `useFindProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
      }
export function useFindProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export function useFindProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export type FindProfileQueryHookResult = ReturnType<typeof useFindProfileQuery>;
export type FindProfileLazyQueryHookResult = ReturnType<typeof useFindProfileLazyQuery>;
export type FindProfileSuspenseQueryHookResult = ReturnType<typeof useFindProfileSuspenseQuery>;
export type FindProfileQueryResult = Apollo.QueryResult<FindProfileQuery, FindProfileQueryVariables>;
export const GenerateTotpSecretDocument = gql`
    query GenerateTotpSecret {
  generateTotpSecret {
    qrcodeUrl
    secret
  }
}
    `;

/**
 * __useGenerateTotpSecretQuery__
 *
 * To run a query within a React component, call `useGenerateTotpSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateTotpSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateTotpSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateTotpSecretQuery(baseOptions?: Apollo.QueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
      }
export function useGenerateTotpSecretLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export function useGenerateTotpSecretSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export type GenerateTotpSecretQueryHookResult = ReturnType<typeof useGenerateTotpSecretQuery>;
export type GenerateTotpSecretLazyQueryHookResult = ReturnType<typeof useGenerateTotpSecretLazyQuery>;
export type GenerateTotpSecretSuspenseQueryHookResult = ReturnType<typeof useGenerateTotpSecretSuspenseQuery>;
export type GenerateTotpSecretQueryResult = Apollo.QueryResult<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;