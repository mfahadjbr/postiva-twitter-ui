"use client";

import AuthGuard from "@/lib/hooks/auth/AuthGuard";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MessageSquare,
  Heart,
  Repeat2,
  TrendingUp,
  Eye,
} from "lucide-react";

export default function DashboardPage() {
  // Dummy data from the user
  const userProfile = {
    id: "1932850183718477824",
    username: "MuhammadUz1654",
    name: "Learn Ai With Uzair",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1953065493281013760/FYrRwkZq_normal.jpg",
    description:
      "Python, GenAI &\nAutomation 💡\nFor complete course visit my Yotube Channel : https://t.co/AP7yKEnC90",
    verified: false,
    verified_type: "none",
    created_at: "2025-06-11T17:19:46.000Z",
    location: null,
    url: null,
    public_metrics: {
      followers_count: 0,
      following_count: 0,
      tweet_count: 28,
      listed_count: 0,
    },
  };

  const tweets = [
    {
      id: "1973391679362109487",
      text: "Part 32 | ✨ Python Join strings Magic! https://t.co/FIm4WKeJsz",
      created_at: "2025-10-01T14:16:54.000Z",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
        impression_count: 10,
      },
    },
    {
      id: "1970545917817180259",
      text: "Part 30 | ✨ Python Find strings Magic! https://t.co/dYTxfnZMTd",
      created_at: "2025-09-23T17:48:52.000Z",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
        impression_count: 9,
      },
    },
    {
      id: "1969816498798522443",
      text: "Part 29 | ✨ Python Count Strings Magic! https://t.co/I68HS7shL0",
      created_at: "2025-09-21T17:30:25.000Z",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
        impression_count: 4,
      },
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={userProfile.profile_image_url}
                  alt={userProfile.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {userProfile.name}
                  </h2>
                  <p className="text-gray-300">@{userProfile.username}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {userProfile.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Followers
                </CardTitle>
                <Users className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {userProfile.public_metrics.followers_count}
                </div>
                <p className="text-xs text-gray-400">Total followers</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Following
                </CardTitle>
                <Users className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {userProfile.public_metrics.following_count}
                </div>
                <p className="text-xs text-gray-400">Accounts following</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total Tweets
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {userProfile.public_metrics.tweet_count}
                </div>
                <p className="text-xs text-gray-400">All time tweets</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Listed
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {userProfile.public_metrics.listed_count}
                </div>
                <p className="text-xs text-gray-400">Times listed</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Tweets */}
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Tweets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tweets.map((tweet) => (
                  <div
                    key={tweet.id}
                    className="p-4 bg-gray-700/50 rounded-xl border border-gray-600"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={userProfile.profile_image_url}
                          alt={userProfile.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="text-white font-medium">
                            {userProfile.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            @{userProfile.username}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-gray-600 text-gray-300"
                      >
                        {formatDate(tweet.created_at)}
                      </Badge>
                    </div>

                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {tweet.text}
                    </p>

                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">
                          {tweet.public_metrics.reply_count}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Repeat2 className="h-4 w-4" />
                        <span className="text-sm">
                          {tweet.public_metrics.retweet_count}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">
                          {tweet.public_metrics.like_count}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">
                          {tweet.public_metrics.impression_count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </AuthGuard>
  );
}
