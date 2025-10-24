"use client";
import AuthGuard from '@/lib/hooks/auth/AuthGuard'

import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Image, 
  Video, 
  FileText, 
  Upload as UploadIcon,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  return (
    <DashboardLayout>
      <AuthGuard>
        <div className="space-y-6">
        {/* Header */}
        <div className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black rounded-2xl p-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white mb-2">Upload Post</h1>
            <p className="text-gray-300">Choose the type of content you want to create and share</p>
          </div>
        </div>

        {/* Upload Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image + Text Post */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Image className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white mb-2">Image + Text Post</CardTitle>
              <p className="text-gray-300">
                Create engaging posts with images and captions. Perfect for sharing photos, infographics, and visual content.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <Image className="h-4 w-4" />
                  <span className="text-sm">Upload images</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Write captions</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <UploadIcon className="h-4 w-4" />
                  <span className="text-sm">Schedule posts</span>
                </div>
              </div>
              <Button 
                asChild
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300"
              >
                <Link href="/dashboard/upload/image-text">
                  Create Image Post
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Video + Text Post */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                <Video className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white mb-2">Video + Text Post</CardTitle>
              <p className="text-gray-300">
                Share videos with engaging descriptions. Ideal for tutorials, announcements, and dynamic content.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <Video className="h-4 w-4" />
                  <span className="text-sm">Upload videos</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Add descriptions</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <UploadIcon className="h-4 w-4" />
                  <span className="text-sm">Schedule posts</span>
                </div>
              </div>
              <Button 
                asChild
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300"
              >
                <Link href="/dashboard/upload/video-text">
                  Create Video Post
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">12</div>
              <p className="text-gray-400 text-sm">Posts Created</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">8</div>
              <p className="text-gray-400 text-sm">Scheduled</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">156</div>
              <p className="text-gray-400 text-sm">Total Views</p>
            </CardContent>
          </Card>
        </div>
        </div>
      </AuthGuard>
    </DashboardLayout>
  )
}
