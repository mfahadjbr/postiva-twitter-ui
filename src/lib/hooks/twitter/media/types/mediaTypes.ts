export interface PostVideoResponse {
  success: boolean
  message: string
  media_id: string
  tweet_id: string
  tweet_url: string
  tweet_text: string
}

export interface PostImageResponse {
  success: boolean
  message: string
  media_id: string
  tweet_id: string
  tweet_url: string
  tweet_text: string
}

export interface MediaState<T> {
  isSubmitting: boolean
  error: string | null
  result: T | null
}
