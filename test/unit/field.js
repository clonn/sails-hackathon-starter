module.exports = {
  VideoFields: ['title', 'country', 'created_at', 'updated_at', 'id', 'refId',
    'refType', 'releaseAt', 'wpId', 'url', 'status'
  ],
  UserFields: ['RoleId', 'country', 'created_at', 'email', 'id', 'lang',
    'updated_at', 'username', 'verification', 'fanCount', 'photo'
  ],
  UserFieldsAndFollower: ['RoleId', 'country', 'created_at', 'email', 'id',
    'lang', 'updated_at', 'username', 'verification', 'fanCount',
    'Follower', 'photo'
  ],
  PreregistrationFields: ['id', 'created_at', 'updated_at', 'description',
    'icon', 'title', 'startDate', 'endDate', 'cover', 'country',
    'developer', 'wpId', 'status'
  ],
  PreregistrationAndPlatformFields: ['id', 'created_at', 'updated_at',
    'description', 'icon', 'title', 'startDate', 'endDate', 'cover',
    'country', 'developer', 'wpId', 'PreregistrationPlatforms', 'status'
  ],
  PostFields: ['auth', 'content', 'country', 'cover', 'created_at', 'id',
    'title', 'type', 'updated_at', 'releaseAt', 'googlePlayUrl',
    'itunesUrl', 'icon', 'wpId', 'status'
  ],
  RoleFields: ['id', 'created_at', 'updated_at', 'authority', 'comment'],
  PassportFields: ['id', 'accessToken', 'created_at', 'identifier',
    'password', 'protocol', 'provider', 'tokens', 'UserId',
    'updated_at', 'deleted_at', 'user_id', 'photo'
  ],
  AdplayFields: ['id', 'created_at', 'updated_at', 'cover', 'adId', 'title',
    'country', 'ready', 'googlePlayUrl', 'itunesUrl', 'icon', 'wpId',
    'status'
  ],
  GameFields: ['id', 'created_at', 'updated_at', 'url', 'appId',
    'title', 'developer', 'icon', 'score', 'price', 'free', 'description',
    'screenshots', 'lang', 'country', 'platform'
  ],
  GameFieldsAndGameListItem: ['id', 'created_at', 'updated_at', 'url',
    'appId', 'title', 'developer', 'icon', 'score', 'price', 'free',
    'description', 'game_list_item', 'screenshots', 'lang',
    'country',
    'platform'
  ],
  GameFieldsAndKeyword: ['id', 'created_at', 'updated_at', 'url',
    'appId', 'title', 'developer', 'icon', 'score', 'price', 'free',
    'description', 'screenshots', 'keyword_game', 'lang',
    'country',
    'platform'
  ],
  GameCacheFields: ['url', 'descriptionHTML', 'developerEmail',
    'developerWebsite', 'genre', 'genreId', 'histogram', 'maxInstalls',
    'minInstalls', 'offersIAP', 'requiredAndroidVersion', 'reviews', 'size',
    'updated', 'version', 'comments', 'appId', 'title', 'developer', 'icon',
    'score', 'price', 'free', 'adSupported', 'contentRating', 'description',
    'screenshots'
  ],
  GameCacheFieldsAndFamilyGenre: ['url', 'descriptionHTML', 'developerEmail',
    'developerWebsite', 'familyGenre', 'familyGenreId', 'genre', 'genreId',
    'histogram', 'maxInstalls', 'minInstalls', 'offersIAP',
    'requiredAndroidVersion', 'reviews', 'size', 'updated', 'version',
    'video', 'comments', 'appId', 'title', 'developer', 'icon', 'score',
    'price', 'free', 'adSupported', 'contentRating', 'description',
    'screenshots', 'lang', 'country'
  ],
  GameListFields: [
    'UserId', 'count', 'created_at', 'id', 'like', 'title', 'description',
    'updated_at', 'deleted_at', 'country', 'UserLike', 'isMeLike', 'image'
  ],
  GameListFieldsAndGameListItems: [
    'UserId', 'count', 'created_at', 'id', 'like', 'title', 'description',
    'updated_at', 'deleted_at', 'GameListItems', 'country', 'image',
    'UserLike', 'User', 'user_id'
  ],
  GameListFieldsAndGameListItemsAndisMeLike: [
    'UserId', 'count', 'created_at', 'id', 'like', 'title', 'description',
    'updated_at', 'deleted_at', 'GameListItems', 'country', 'UserLike',
    'isMeLike', 'image', 'User', 'user_id'
  ],
  GameListFieldsAndGameListItemsAndisMeLikeAndGameListId: [
    'UserId', 'count', 'created_at', 'id', 'like', 'title', 'description',
    'updated_at', 'deleted_at', 'GameListItems', 'country', 'UserLike',
    'isMeLike', 'image', 'User', 'user_id'
  ],
  GameListFieldsAndGameListItemsAndisMeLikeAndGameListIdAndGameId: [
    'UserId', 'count', 'created_at', 'id', 'like', 'title', 'description',
    'updated_at', 'deleted_at', 'GameListItems', 'country', 'UserLike',
    'isMeLike', 'image', 'User', 'user_id', 'game_list_id', 'game_id'
  ],
  GameListItemFields: [
    'GameListId', 'description', 'GameId', 'created_at', 'id', 'updated_at'
  ],
  GameListItemFieldsAndGame: [
    'GameListId', 'description', 'GameId', 'created_at', 'id', 'updated_at',
    'Game', 'game_list_id', 'game_id'
  ]
};
