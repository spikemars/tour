/**
 * 六日行程详细规划页面
 * 可编辑的行程安排和交通信息
 */

import React, { useState } from 'react';
import { Calendar, MapPin, Camera, Palette, Ship, Clock, Edit3, ExternalLink, Car, Train, Anchor, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface ItineraryDay {
  day: string;
  route: string;
  activities: string;
  accommodation: string;
  transport: string;
  isEditable?: boolean;
}

export default function Itinerary() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([
    {
      day: "D1",
      route: "关西机场 → 宇野港",
      activities: "入境 • 租车 • 适应时差",
      accommodation: "宇野港住宿",
      transport: "租车自驾",
      isEditable: true
    },
    {
      day: "D2", 
      route: "宇野港 → 丰岛（当日往返）",
      activities: "丰岛美术馆 • 心脏音档案馆 • 横尾馆 • 丰岛环岛",
      accommodation: "宇野港住宿",
      transport: "轮渡往返",
      isEditable: true
    },
    {
      day: "D3",
      route: "宇野港 → 直岛（当日往返）", 
      activities: "地中美术馆 • 李禹焕美术馆 • 本村地区 • 黄南瓜",
      accommodation: "宇野港住宿",
      transport: "轮渡往返",
      isEditable: true
    },
    {
      day: "D4",
      route: "宇野港 → 小豆岛（汽车渡轮）",
      activities: "驾车渡轮 • 寒霞溪 • 天使之路 • 橄榄公园",
      accommodation: "小豆岛住宿",
      transport: "汽车渡轮",
      isEditable: true
    },
    {
      day: "D5",
      route: "小豆岛 → 高松",
      activities: "二十四只眼睛电影村 • 酱油工房",
      accommodation: "高松住宿",
      transport: "汽车渡轮",
      isEditable: true
    },
    {
      day: "D6",
      route: "高松 → 关西机场",
      activities: "栗林公园 • 高松购物 • 返程",
      accommodation: "",
      transport: "自驾返程",
      isEditable: true
    }
  ]);

  const highlights = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "世界级艺术馆体验",
      description: "购买艺术祭通票，畅游地中美术馆、李禹焕美术馆、丰岛美术馆等顶级艺术空间",
      link: "https://setouchi-artfest.jp/tw/buy/passport/"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "秋日绝美自然风光", 
      description: "查看各岛交通攻略，欣赏小豆岛寒霞溪红叶、天使之路、濑户内海多岛美景",
      link: "https://setouchi-artfest.jp/tw/access/island/"
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "自驾汽渡独特体验",
      description: "直岛租借自行车，驾车登上渡轮前往小豆岛，畅游岛屿，感受海上体验",
      link: "https://ougiya-naoshima.jp/english/rental.html"
    }
  ];

  /**
   * 编辑行程活动内容
   */
  const handleEditActivity = (dayIndex: number, newActivity: string) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities = newActivity;
    setItinerary(newItinerary);
  };

  /**
   * 获取交通图标
   */
  const getTransportIcon = (transport: string) => {
    if (transport.includes('轮渡')) return <Ship className="w-4 h-4" />;
    if (transport.includes('自驾')) return <Car className="w-4 h-4" />;
    if (transport.includes('渡轮')) return <Anchor className="w-4 h-4" />;
    return <Train className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => window.location.hash = '#/'}
                className="text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首页
              </Button>
              <h1 className="text-2xl font-bold text-gray-800">六日跳岛游详细行程</h1>
            </div>
            
            <Button 
              onClick={() => setIsEditMode(!isEditMode)}
              variant={isEditMode ? "secondary" : "outline"}
              className={isEditMode ? "bg-orange-100 text-orange-700" : ""}
            >
              <Edit3 className="w-4 h-4 mr-2" />
              {isEditMode ? "完成编辑" : "编辑行程"}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">精心策划的六日行程</h2>
          
          <div className="space-y-6">
            {itinerary.map((day, index) => (
              <Card key={day.day} className={`relative ${isEditMode ? 'ring-2 ring-orange-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <div>
                        <div className="text-xl">{day.route}</div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          {getTransportIcon(day.transport)}
                          {day.transport}
                        </div>
                      </div>
                    </CardTitle>
                    
                    {day.accommodation && (
                      <Badge variant="secondary" className="ml-auto">
                        <MapPin className="w-3 h-3 mr-1" />
                        {day.accommodation}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  {isEditMode && day.isEditable ? (
                    <textarea
                      value={day.activities}
                      onChange={(e) => handleEditActivity(index, e.target.value)}
                      className="w-full p-3 border rounded-lg text-gray-700 resize-none"
                      rows={2}
                      placeholder="编辑当日活动安排..."
                    />
                  ) : (
                    <p className="text-gray-700 text-lg">{day.activities}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">行程亮点</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{highlight.description}</CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(highlight.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    了解详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transportation Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ship className="w-5 h-5" />
              交通连接指南
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">轮渡时刻</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>宇野 ↔ 直岛</span>
                    <span className="text-gray-600">约20分钟 | 人员渡轮</span>
                  </div>
                  <div className="flex justify-between">
                    <span>宇野 ↔ 丰岛</span>
                    <span className="text-gray-600">约60分钟 | 人员渡轮</span>
                  </div>
                  <div className="flex justify-between">
                    <span>宇野 ↔ 小豆岛</span>
                    <span className="text-gray-600">约60分钟 | 汽车渡轮</span>
                  </div>
                  <div className="flex justify-between">
                    <span>小豆岛 ↔ 高松</span>
                    <span className="text-gray-600">约60分钟 | 汽车渡轮</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-green-700">住宿建议</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>宇野港:</strong> 住宿基地 (D1-D3)</div>
                  <div><strong>小豆岛:</strong> 温泉旅馆 (D4)</div>
                  <div><strong>高松:</strong> JR站附近 (D5)</div>
                  <div className="text-orange-600 text-xs mt-2">
                    ⚠️ 艺术祭期间住宿紧俏，建议提前预订
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="flex gap-4">
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://setouchi-artfest.jp/tw/buy/passport/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  购买艺术祭通票
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://setouchi-artfest.jp/tw/access/island/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  查看详细交通
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://setouchi-artfest.jp/tw/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  官方网站
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
