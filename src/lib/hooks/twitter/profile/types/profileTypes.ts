export type SourceTag = 'database' | 'twitter'

export interface TwitterPublicMetrics {
  followers_count: number
  following_count: number
  tweet_count: number
  listed_count: number
}

export interface TwitterProfile {
  id: string
  username: string
  name: string
  profile_image_url: string
  description: string | null
  verified: boolean
  verified_type: string
  created_at: string
  location: string | null
  url: string | null
  public_metrics: TwitterPublicMetrics
}

export interface TwitterProfileDataEnvelope {
  success: boolean
  message: string
  data: TwitterProfile
  source: SourceTag
  last_updated?: string
}

export interface TwitterProfileEnvelope {
  success: boolean
  message: string
  data: TwitterProfileDataEnvelope
}

export interface TwitterProfileState {
  isLoading: boolean
  error: string | null
  data: TwitterProfileEnvelope | null
}
