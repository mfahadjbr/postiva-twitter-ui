import { api } from '@/lib/hooks/auth/authSimple/authApi'

export const TwitterEndpoints = {
  profile: (refresh: boolean = false) => `/twitter/user-profile/?refresh=${String(refresh)}`,
  tweets: (refresh: boolean = false, maxResults: number = 10, nextToken?: string | null) =>
    `/twitter/user-tweets/?refresh=${String(refresh)}&max_results=${maxResults}` +
    (nextToken ? `&next_token=${encodeURIComponent(nextToken)}` : ''),
  postVideo: () => `/twitter/video/post-video-to-twitter`,
  postImage: () => `/twitter/media/post-pic-to-twitter`,
}

export async function getTwitterProfile(refresh: boolean = false, headers?: any) {
  return api.get(TwitterEndpoints.profile(refresh), { headers })
}

export async function getTwitterTweets(
  params: { refresh?: boolean; maxResults?: number; nextToken?: string | null } = {},
  headers?: any
) {
  const { refresh = false, maxResults = 10, nextToken } = params
  return api.get(TwitterEndpoints.tweets(refresh, maxResults, nextToken), { headers })
}

export async function postTwitterVideo(form: FormData, headers?: any) {
  return api.post(TwitterEndpoints.postVideo(), form, { headers })
}

export async function postTwitterImage(form: FormData, headers?: any) {
  return api.post(TwitterEndpoints.postImage(), form, { headers })
}

export default {
  getTwitterProfile,
  getTwitterTweets,
  postTwitterVideo,
  postTwitterImage,
}
