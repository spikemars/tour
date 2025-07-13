/**
 * 濑户内海艺术祭六日跳岛游主页
 * 简洁的封面页面，提供导航入口
 */

import React from 'react';
import { Calendar, Palette, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/home-hero.jpg"
            alt="濑户内海艺术祭"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-cyan-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            濑户内海
            <span className="block text-cyan-300">艺术祭</span>
            <span className="block text-3xl md:text-4xl mt-4">六日跳岛游</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            以宇野港为基地，探索世界级现代艺术与濑户内海绝美自然的完美融合
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8 py-4"
              onClick={() => window.location.hash = '#/itinerary'}
            >
              <Calendar className="w-5 h-5 mr-2" />
              查看详细行程
            </Button>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4"
              onClick={() => window.location.hash = '#/art-festival'}
            >
              <Palette className="w-5 h-5 mr-2" />
              关于艺术祭
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">6天</div>
              <p className="text-gray-600">精心规划的跳岛行程</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">6座岛</div>
              <p className="text-gray-600">直岛、丰岛、小豆岛等</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">艺术祭</div>
              <p className="text-gray-600">2025年三季举办</p>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Periods */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">瀬戸内国际芸術祭2025</h2>
          <p className="text-xl text-gray-600 mb-8">三年一度的现代艺术盛典，分春夏秋三季举办</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-blue-200 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">春会期</h3>
              <p className="text-lg text-gray-600 mb-2">4月18日 - 5月25日</p>
              <p className="text-sm text-gray-500">38日间 • 樱花季节</p>
            </div>
            <div className="p-6 border-2 border-green-200 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-2">夏会期</h3>
              <p className="text-lg text-gray-600 mb-2">8月1日 - 8月31日</p>
              <p className="text-sm text-gray-500">31日间 • 海岛夏日</p>
            </div>
            <div className="p-6 border-2 border-orange-200 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">秋会期</h3>
              <p className="text-lg text-gray-600 mb-2">10月3日 - 11月9日</p>
              <p className="text-sm text-gray-500">38日间 • 红叶时节</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Website Link */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
            <div className="w-8 h-px bg-gray-300"></div>
            <span className="text-sm font-medium">更多信息</span>
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 px-6 py-3"
            onClick={() => window.open('https://setouchi-artfest.jp/tw/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            访问濑户内海艺术祭官方网站
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            获取最新展览信息、交通指南和购票详情
          </p>
        </div>
      </section>
    </div>
  );
}
