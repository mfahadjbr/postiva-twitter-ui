export type SourceTag = 'database' | 'twitter'

export interface TwitterTweetPublicMetrics {
  retweet_count: number
  reply_count: number
  like_count: number
  quote_count: number
  impression_count: number
}

export interface TwitterTweet {
  id: string
  text: string
  created_at: string
  author_id: string
  conversation_id: string
  public_metrics: TwitterTweetPublicMetrics
  possibly_sensitive: boolean
  lang: string
  reply_settings: string
  edit_history_tweet_ids: string[]
}

export interface TwitterTweetsData {
  tweets: TwitterTweet[]
  count: number
  has_more: boolean
  next_token: string | null
  source: SourceTag
}

export interface TwitterTweetsDataEnvelope {
  success: boolean
  message: string
  data: TwitterTweetsData
  source?: SourceTag
}

export interface TwitterTweetsEnvelope {
  success: boolean
  message: string
  data: TwitterTweetsDataEnvelope
}

export interface TwitterTweetsState {
  isLoading: boolean
  error: string | null
  data: TwitterTweetsEnvelope | null
}
