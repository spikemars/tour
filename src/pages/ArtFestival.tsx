/**
 * 濑户内海艺术祭各岛屿介绍页面
 * 详细展示各岛屿的艺术作品和特色
 */

import React from 'react';
import { ArrowLeft, ExternalLink, Camera, Palette, MapPin, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface Island {
  name: string;
  description: string;
  highlights: string[];
  image: string;
  artworks: string[];
  officialLink: string;
}

export default function ArtFestival() {
  const islands: Island[] = [
    {
      name: "直岛",
      description: "现代艺术圣地，以草间弥生和安藤忠雄的作品闻名",
      highlights: ["地中美术馆", "李禹焕美术馆", "黄南瓜", "本村地区"],
      image: "naoshima.jpg",
      artworks: ["草间弥生黄南瓜", "莫奈睡莲", "安藤忠雄建筑"],
      officialLink: "https://setouchi-artfest.jp/tw/place/naoshima/"
    },
    {
      name: "丰岛",
      description: "自然与艺术和谐共生的岛屿，以丰岛美术馆著称",
      highlights: ["丰岛美术馆", "心脏音档案馆", "横尾馆", "艺术家之家"],
      image: "teshima.jpg",
      artworks: ["内藤礼泉水作品", "Christian Boltanski心跳", "横尾忠则作品"],
      officialLink: "https://setouchi-artfest.jp/tw/place/teshima/"
    },
    {
      name: "小豆岛",
      description: "濑户内海第二大岛，融合自然美景与现代艺术",
      highlights: ["寒霞溪", "天使之路", "橄榄公园", "二十四只眼睛电影村"],
      image: "shodoshima.jpg",
      artworks: ["太阳的贈り物", "小豆岛之光", "橄榄艺术装置"],
      officialLink: "https://setouchi-artfest.jp/tw/place/shodoshima/"
    },
    {
      name: "犬岛",
      description: "工业遗产与现代艺术完美结合的小岛",
      highlights: ["犬岛精炼所美术馆", "犬岛家计划", "石职人之里"],
      image: "inujima.jpg",
      artworks: ["三島由紀夫作品展", "柳幸典装置", "工业遗产艺术"],
      officialLink: "https://setouchi-artfest.jp/tw/place/inujima/"
    },
    {
      name: "女木岛",
      description: "传说中鬼岛，充满神秘色彩和互动艺术",
      highlights: ["鬼岛大洞窟", "海鸥停车场", "女木岛名画座"],
      image: "megijima.jpg",
      artworks: ["木村崇人海鸥作品", "大竹伸朗女根", "互动艺术装置"],
      officialLink: "https://setouchi-artfest.jp/tw/place/megijima/"
    },
    {
      name: "男木岛",
      description: "传统建筑与现代艺术融合的美丽岛屿",
      highlights: ["男木岛图书馆", "步行路径艺术", "传统石墙街道"],
      image: "ogijima.jpg",
      artworks: ["马克·迪翁图书馆", "屋顶艺术装置", "步行路径作品"],
      officialLink: "https://setouchi-artfest.jp/tw/place/ogijima/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="w-4 h-4" />
              返回主页
            </Button>
            <h1 className="text-xl font-bold text-gray-800">濑户内海艺术祭</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* 页面标题区域 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            濑户内海艺术祭2025
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            探索现代艺术与自然美景完美融合的岛屿世界
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>春季：4/18-5/25 | 夏季：8/1-8/31 | 秋季：10/3-11/9</span>
            </div>
          </div>
        </div>

        {/* 岛屿网格展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {islands.map((island, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white">
              <div 
                className="relative overflow-hidden rounded-t-lg cursor-pointer"
                onClick={() => window.open(island.officialLink, '_blank')}
                title="点击查看官方介绍"
              >
                <img 
                  src={island.image} 
                  alt={island.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-indigo-700">
                    {island.name}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  {island.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {island.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* 主要亮点 */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    主要景点
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {island.highlights.slice(0, 3).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {island.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{island.highlights.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* 艺术作品 */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <Palette className="w-3 h-3" />
                    代表作品
                  </h4>
                  <div className="space-y-1">
                    {island.artworks.slice(0, 2).map((artwork, idx) => (
                      <p key={idx} className="text-xs text-gray-600">• {artwork}</p>
                    ))}
                    {island.artworks.length > 2 && (
                      <p className="text-xs text-gray-500">• 更多作品...</p>
                    )}
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* 底部提示信息 */}
        <div className="mt-12 text-center">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                参观提示
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-indigo-700">
                <div>
                  <strong>购票建议：</strong>
                  <p>建议购买艺术祭通票，可参观大部分展览作品</p>
                </div>
                <div>
                  <strong>交通安排：</strong>
                  <p>提前查询轮渡时刻表，合理安排岛屿间的交通</p>
                </div>
                <div>
                  <strong>参观时间：</strong>
                  <p>建议每个岛屿安排半天至一天的参观时间</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-indigo-200">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => window.open('https://setouchi-artfest.jp/tw/buy/passport/', '_blank')}
                >
                  立即购买艺术祭通票
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
