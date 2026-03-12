/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Library, 
  Pin, 
  History, 
  Settings, 
  HelpCircle, 
  ArrowUpCircle, 
  Gift, 
  Download, 
  LogOut, 
  ChevronDown, 
  Share2, 
  MoreHorizontal, 
  Copy, 
  ThumbsUp, 
  ThumbsDown,
  ArrowUp,
  Archive,
  Flag,
  Trash2,
  ChevronLeft,
  LayoutGrid,
  Hand,
  Video,
  Clock,
  Calendar,
  Users
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'chat' | 'search' | 'library' | 'meetings' | 'settings' | 'help' | 'upgrade'>('chat');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-bg-main text-text-primary">
      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 flex flex-col border-r border-black/5 p-4">
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2 font-semibold text-text-primary">
            <div className="w-6 h-6 bg-text-primary rounded-md flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-bg-main rounded-full" />
            </div>
            <span className="text-[15px]">Zenith</span>
          </div>
          <button className="text-text-secondary/60 hover:text-text-primary transition-colors">
            <ChevronLeft size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto custom-scrollbar pr-1">
          <div 
            className={`sidebar-item ${currentView === 'chat' ? 'sidebar-item-active' : ''}`}
            onClick={() => setCurrentView('chat')}
          >
            <Plus size={18} className="text-text-secondary/70" />
            <span>New chat</span>
          </div>
          <div 
            className={`sidebar-item ${currentView === 'search' ? 'sidebar-item-active' : ''}`}
            onClick={() => setCurrentView('search')}
          >
            <Search size={18} className="text-text-secondary/70" />
            <span>Search</span>
          </div>
          <div 
            className={`sidebar-item ${currentView === 'library' ? 'sidebar-item-active' : ''}`}
            onClick={() => setCurrentView('library')}
          >
            <Library size={18} className="text-text-secondary/70" />
            <span>Library</span>
          </div>
          <div 
            className={`sidebar-item ${currentView === 'meetings' ? 'sidebar-item-active' : ''}`}
            onClick={() => setCurrentView('meetings')}
          >
            <Video size={18} className="text-text-secondary/70" />
            <span>Meetings</span>
          </div>

          <div className="mt-8 mb-2 px-3 text-[11px] font-semibold text-text-secondary/60 uppercase tracking-wider flex items-center gap-2">
            <Pin size={12} />
            Pinned
          </div>
          <div className="sidebar-item">
            <span className="truncate">Visual consistency review</span>
          </div>
          <div className="sidebar-item">
            <span className="truncate">Content style direction</span>
          </div>

          <div className="mt-8 mb-2 px-3 text-[11px] font-semibold text-text-secondary/60 uppercase tracking-wider flex items-center gap-2">
            <History size={12} />
            History
          </div>
          <div className="sidebar-item">
            <span>Today</span>
          </div>
          <div className="sidebar-item">
            <span className="truncate">Make this UI clearer</span>
          </div>
          <div className="sidebar-item">
            <span className="truncate">Provide alternatives for thi...</span>
          </div>
          <div className="sidebar-item sidebar-item-active justify-between">
            <span className="truncate">Create world-class UI i...</span>
            <MoreHorizontal size={14} className="text-text-secondary/60" />
          </div>
          <div className="sidebar-item">
            <span className="truncate">Create taglines for produ...</span>
          </div>
          <div className="sidebar-item">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 flex flex-col justify-between py-0.5">
                <div className="w-0.5 h-0.5 bg-text-secondary/60 rounded-full" />
                <div className="w-0.5 h-0.5 bg-text-secondary/60 rounded-full" />
                <div className="w-0.5 h-0.5 bg-text-secondary/60 rounded-full" />
              </div>
              <span>See all</span>
            </div>
          </div>
        </nav>

        <div className="mt-auto pt-4 space-y-1">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/5 overflow-hidden p-1">
            <div 
              className={`sidebar-item ${currentView === 'settings' ? 'sidebar-item-active' : ''}`}
              onClick={() => setCurrentView('settings')}
            >
              <Settings size={18} className="text-text-secondary/70" />
              <span>Settings</span>
            </div>
            <div 
              className={`sidebar-item ${currentView === 'help' ? 'sidebar-item-active' : ''}`}
              onClick={() => setCurrentView('help')}
            >
              <HelpCircle size={18} className="text-text-secondary/70" />
              <span>Get help</span>
            </div>
            <div 
              className={`sidebar-item ${currentView === 'upgrade' ? 'sidebar-item-active' : ''}`}
              onClick={() => setCurrentView('upgrade')}
            >
              <ArrowUpCircle size={18} className="text-text-secondary/70" />
              <span>Upgrade plan</span>
            </div>
            <div className="sidebar-item bg-[#F5F3ED]">
              <Gift size={18} className="text-text-secondary/70" />
              <span>Gift Zenith</span>
            </div>
            <div className="sidebar-item">
              <Download size={18} className="text-text-secondary/70" />
              <span>Download Zenith for Mac</span>
            </div>
            <div className="sidebar-item">
              <LogOut size={18} className="text-text-secondary/70" />
              <span>Log out</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 mt-2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
              alt="User" 
              className="w-9 h-9 rounded-full object-cover grayscale-[0.2]"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] font-medium text-text-primary truncate">James Brown</span>
              <span className="text-[11px] text-text-secondary/60 truncate">james@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {currentView === 'chat' ? (
          <>
            {/* Header */}
            <header className="h-16 flex items-center justify-between px-8">
              <div className="flex items-center gap-2 bg-white/40 border border-black/5 px-3 py-1.5 rounded-xl cursor-pointer hover:bg-white/80 transition-colors shadow-sm">
                <span className="text-[13px] font-medium text-text-secondary">Zenith GPT-OSS 20B</span>
                <ChevronDown size={14} className="text-text-secondary/60" />
              </div>

              <div className="flex items-center gap-5">
                <button className="flex items-center gap-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
                <div className="relative">
                  <button className="text-text-secondary/60 hover:text-text-primary transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-9 w-[160px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-black/5 py-1.5 z-50">
                    <div className="flex items-center justify-between px-4 py-2 hover:bg-bg-main cursor-pointer text-[13px] font-medium">
                      <div className="flex items-center gap-3">
                        <Archive size={16} className="text-text-secondary/70" />
                        <span>Archive</span>
                      </div>
                      <Hand size={14} className="text-text-secondary/40 rotate-12" />
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-bg-main cursor-pointer text-[13px] font-medium">
                      <Flag size={16} className="text-text-secondary/70" />
                      <span>Report</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-bg-main cursor-pointer text-[13px] font-medium text-text-primary">
                      <Trash2 size={16} className="text-text-secondary/70" />
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-8 pb-40 custom-scrollbar">
              <div className="max-w-2xl mx-auto space-y-10 pt-16">
                {/* AI Message */}
                <div className="space-y-3 group">
                  <p className="text-[15px] text-text-primary leading-relaxed">Hey Alex, what can I help you with today?</p>
                  <div className="flex items-center gap-3 text-text-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="hover:text-text-primary transition-colors"><Copy size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsUp size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsDown size={16} /></button>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-[#F5DDCB] px-5 py-2.5 rounded-[20px] text-[15px] text-text-primary shadow-sm">
                    Hey Zenith, I have a question.
                  </div>
                </div>

                {/* AI Message */}
                <div className="space-y-3 group">
                  <p className="text-[15px] text-text-primary leading-relaxed">Of course. I'm listening.</p>
                  <div className="flex items-center gap-3 text-text-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="hover:text-text-primary transition-colors"><Copy size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsUp size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsDown size={16} /></button>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-[#F5DDCB] px-5 py-2.5 rounded-[20px] text-[15px] text-text-primary shadow-sm">
                    Why do some dashboards feel clear while others feel overwhelming?
                  </div>
                </div>

                {/* AI Message */}
                <div className="space-y-3 group">
                  <p className="text-[15px] text-text-primary leading-relaxed">
                    Clear dashboards highlight what matters first. Overwhelming ones show too much at once without priorities.
                  </p>
                  <div className="flex items-center gap-3 text-text-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="hover:text-text-primary transition-colors"><Copy size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsUp size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsDown size={16} /></button>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-[#F5DDCB] px-5 py-2.5 rounded-[20px] text-[15px] text-text-primary shadow-sm">
                    What makes a dashboard easy to understand at a glance?
                  </div>
                </div>

                {/* AI Message */}
                <div className="space-y-3 group">
                  <p className="text-[15px] text-text-primary leading-relaxed">
                    Strong hierarchy, meaningful spacing, and consistent patterns. People should know where to look within seconds.
                  </p>
                  <div className="flex items-center gap-3 text-text-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="hover:text-text-primary transition-colors"><Copy size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsUp size={16} /></button>
                    <button className="hover:text-text-primary transition-colors"><ThumbsDown size={16} /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-bg-main via-bg-main to-transparent">
              <div className="max-w-2xl mx-auto relative">
                <div className="flex justify-center mb-6">
                  <button className="w-9 h-9 bg-white border border-black/5 rounded-full flex items-center justify-center text-text-secondary/60 hover:text-text-primary transition-colors shadow-sm">
                    <ArrowUp size={18} className="rotate-180" />
                  </button>
                </div>
                
                <div className="bg-white rounded-[24px] border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-4">
                  <textarea 
                    placeholder="How can I help?"
                    className="w-full bg-transparent border-none focus:ring-0 resize-none text-[15px] text-text-primary placeholder:text-text-secondary/30 min-h-[40px] py-1 px-2"
                    rows={1}
                  />
                  <div className="flex items-center justify-between mt-3 px-1">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-text-secondary/60 hover:bg-bg-main rounded-xl transition-colors">
                        <Plus size={20} />
                      </button>
                      <button className="flex items-center gap-2 px-3.5 py-1.5 bg-bg-main text-text-secondary/80 rounded-xl text-[13px] font-medium hover:bg-sidebar-item-hover transition-colors border border-black/[0.02]">
                        <LayoutGrid size={16} />
                        <span>Tools</span>
                      </button>
                    </div>
                    <button className="p-2.5 bg-[#D9B9A0] text-white rounded-xl hover:opacity-90 transition-opacity shadow-sm">
                      <ArrowUp size={20} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
                <p className="text-center text-[11px] text-text-secondary/40 mt-5 font-medium">
                  AI can make mistakes. Please double-check responses.
                </p>
              </div>
            </div>
          </>
        ) : currentView === 'search' ? (
          <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
            <div className="max-w-4xl mx-auto w-full pt-12 space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight">Search</h1>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40" size={24} />
                  <input 
                    type="text" 
                    placeholder="Search your chats, library, or tools..."
                    className="w-full bg-white border border-black/5 rounded-2xl py-5 pl-14 pr-6 text-xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] focus:ring-0 focus:border-black/10 transition-all placeholder:text-text-secondary/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Recent Searches</h3>
                  <div className="space-y-2">
                    {['Dashboard design principles', 'Visual consistency review', 'Zenith GPT-OSS capabilities'].map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 hover:bg-white rounded-xl cursor-pointer transition-colors group">
                        <History size={16} className="text-text-secondary/40" />
                        <span className="text-[15px] text-text-secondary group-hover:text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Suggested Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {['UI/UX Design', 'Product Strategy', 'Creative Writing', 'Data Analysis', 'Code Review'].map((tag) => (
                      <button key={tag} className="px-4 py-2 bg-white border border-black/5 rounded-full text-sm text-text-secondary hover:bg-[#F5DDCB] hover:text-text-primary transition-all">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8">
                <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">From your Library</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Visual Consistency', date: '2 days ago', type: 'Review' },
                    { title: 'Content Style Guide', date: '1 week ago', type: 'Document' },
                    { title: 'Product Taglines', date: '3 days ago', type: 'Creative' }
                  ].map((doc) => (
                    <div key={doc.title} className="bg-white p-5 rounded-2xl border border-black/5 hover:shadow-md transition-all cursor-pointer group">
                      <div className="w-10 h-10 bg-bg-main rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F5DDCB] transition-colors">
                        <Library size={20} className="text-text-secondary/60" />
                      </div>
                      <h4 className="font-medium text-[15px] mb-1">{doc.title}</h4>
                      <div className="flex items-center justify-between text-[11px] text-text-secondary/60">
                        <span>{doc.type}</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : currentView === 'library' ? (
          <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto w-full pt-12 space-y-10 pb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-4xl font-semibold tracking-tight">Library</h1>
                  <p className="text-text-secondary/60">Manage and organize your saved chats and generated content.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/40" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search library..."
                      className="bg-white border border-black/5 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-0 focus:border-black/10 transition-all w-64"
                    />
                  </div>
                  <button className="p-2 bg-white border border-black/5 rounded-xl text-text-secondary/60 hover:text-text-primary transition-colors">
                    <LayoutGrid size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 border-b border-black/[0.03] pb-1">
                {['All', 'Documents', 'Images', 'Code', 'Pinned'].map((tab, i) => (
                  <button 
                    key={tab} 
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${i === 0 ? 'text-text-primary' : 'text-text-secondary/60 hover:text-text-primary'}`}
                  >
                    {tab}
                    {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D9B9A0]" />}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  { title: 'Visual Consistency Review', date: '2 days ago', type: 'Review', icon: <Search size={20} /> },
                  { title: 'Content Style Guide', date: '1 week ago', type: 'Document', icon: <Library size={20} /> },
                  { title: 'Product Taglines', date: '3 days ago', type: 'Creative', icon: <Hand size={20} /> },
                  { title: 'Dashboard Design Principles', date: '5 days ago', type: 'Guide', icon: <LayoutGrid size={20} /> },
                  { title: 'React Component Library', date: '1 day ago', type: 'Code', icon: <Plus size={20} /> },
                  { title: 'Marketing Strategy 2026', date: '4 days ago', type: 'Document', icon: <Library size={20} /> },
                  { title: 'Brand Voice Guidelines', date: '2 weeks ago', type: 'Document', icon: <Library size={20} /> },
                  { title: 'Landing Page Copy', date: '6 days ago', type: 'Creative', icon: <Hand size={20} /> }
                ].map((item) => (
                  <div key={item.title} className="bg-white p-6 rounded-[24px] border border-black/5 hover:shadow-lg hover:shadow-black/[0.02] transition-all cursor-pointer group relative">
                    <button className="absolute top-4 right-4 p-1.5 text-text-secondary/20 hover:text-text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal size={18} />
                    </button>
                    <div className="w-12 h-12 bg-bg-main rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#F5DDCB] transition-colors">
                      <div className="text-text-secondary/60 group-hover:text-text-primary transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-[15px] mb-2 line-clamp-2 leading-snug">{item.title}</h4>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/[0.02]">
                      <span className="text-[11px] font-medium px-2 py-0.5 bg-bg-main rounded-full text-text-secondary/60">{item.type}</span>
                      <span className="text-[11px] text-text-secondary/40">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : currentView === 'meetings' ? (
          <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto w-full pt-12 space-y-10 pb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-4xl font-semibold tracking-tight">Meetings</h1>
                  <p className="text-text-secondary/60">Schedule, join, and review your AI-assisted meetings.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 bg-text-primary text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2">
                    <Plus size={18} />
                    <span>New Meeting</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upcoming Meetings */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Upcoming</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Product Sync: Q2 Roadmap', time: '10:00 AM - 11:00 AM', date: 'Today', attendees: 4, type: 'Video' },
                      { title: 'Design Review: Zenith Mobile', time: '2:30 PM - 3:30 PM', date: 'Tomorrow', attendees: 3, type: 'Audio' }
                    ].map((meeting) => (
                      <div key={meeting.title} className="bg-white p-6 rounded-[24px] border border-black/5 hover:shadow-md transition-all group">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-bg-main rounded-2xl flex items-center justify-center text-text-secondary/60 group-hover:bg-[#F5DDCB] group-hover:text-text-primary transition-colors">
                              <Video size={24} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{meeting.title}</h4>
                              <div className="flex items-center gap-3 text-sm text-text-secondary/60 mt-1">
                                <div className="flex items-center gap-1">
                                  <Clock size={14} />
                                  <span>{meeting.time}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  <span>{meeting.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-bg-main text-text-secondary font-semibold rounded-xl hover:bg-sidebar-item-hover transition-colors">
                            Join
                          </button>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-black/[0.02]">
                          <div className="flex items-center -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-bg-main flex items-center justify-center overflow-hidden">
                                <img src={`https://picsum.photos/seed/user${i}/32/32`} alt="user" referrerPolicy="no-referrer" />
                              </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-bg-main flex items-center justify-center text-[10px] font-bold text-text-secondary/60">
                              +{meeting.attendees - 3}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-medium text-text-secondary/40">
                            <Users size={14} />
                            <span>{meeting.attendees} participants</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Meeting Summaries */}
                <div className="space-y-6">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Recent Summaries</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Weekly Engineering Sync', date: 'Mar 10', duration: '45m' },
                      { title: 'Zenith Branding Workshop', date: 'Mar 08', duration: '1h 20m' },
                      { title: 'Client Feedback: Alpha', date: 'Mar 05', duration: '30m' }
                    ].map((summary) => (
                      <div key={summary.title} className="bg-white p-5 rounded-2xl border border-black/5 hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-bg-main rounded-lg flex items-center justify-center text-text-secondary/40 group-hover:bg-[#F5DDCB] group-hover:text-text-primary transition-colors">
                            <History size={16} />
                          </div>
                          <h5 className="font-medium text-sm line-clamp-1">{summary.title}</h5>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-text-secondary/40">
                          <span>{summary.date}</span>
                          <span>{summary.duration}</span>
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-3 text-sm font-medium text-text-secondary/60 hover:text-text-primary transition-colors border border-dashed border-black/10 rounded-xl">
                      View all summaries
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : currentView === 'settings' ? (
          <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
            <div className="max-w-3xl mx-auto w-full pt-12 space-y-12">
              <div className="space-y-2">
                <h1 className="text-4xl font-semibold tracking-tight">Settings</h1>
                <p className="text-text-secondary/60">Manage your account settings and preferences.</p>
              </div>

              <div className="space-y-8">
                {/* Profile Section */}
                <section className="space-y-4">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Profile</h3>
                  <div className="bg-white rounded-2xl border border-black/5 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="relative group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                          alt="User" 
                          className="w-20 h-20 rounded-full object-cover grayscale-[0.2] border-2 border-bg-main"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Plus size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">James Brown</h4>
                        <p className="text-sm text-text-secondary/60">james@gmail.com</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-bg-main border border-black/5 rounded-xl text-sm font-medium hover:bg-sidebar-item-hover transition-colors">
                      Edit Profile
                    </button>
                  </div>
                </section>

                {/* General Section */}
                <section className="space-y-4">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">General</h3>
                  <div className="bg-white rounded-2xl border border-black/5 divide-y divide-black/[0.03]">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-medium">Theme</p>
                        <p className="text-xs text-text-secondary/60">Choose your preferred interface style.</p>
                      </div>
                      <select className="bg-bg-main border border-black/5 rounded-xl px-3 py-1.5 text-sm focus:ring-0">
                        <option>System</option>
                        <option>Light</option>
                        <option>Dark</option>
                      </select>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-medium">Language</p>
                        <p className="text-xs text-text-secondary/60">Select your primary language.</p>
                      </div>
                      <select className="bg-bg-main border border-black/5 rounded-xl px-3 py-1.5 text-sm focus:ring-0">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Account Section */}
                <section className="space-y-4">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Account & Billing</h3>
                  <div className="bg-white rounded-2xl border border-black/5 p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#F5DDCB] rounded-xl flex items-center justify-center">
                          <ArrowUpCircle size={24} className="text-text-primary" />
                        </div>
                        <div>
                          <p className="text-[15px] font-medium">Zenith Pro Plan</p>
                          <p className="text-xs text-text-secondary/60">Your next billing date is April 12, 2026.</p>
                        </div>
                      </div>
                      <button className="text-sm font-medium text-[#D9B9A0] hover:underline">Manage Plan</button>
                    </div>
                    <div className="pt-6 border-t border-black/[0.03] flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-medium">Payment Method</p>
                        <p className="text-xs text-text-secondary/60">Visa ending in 4242</p>
                      </div>
                      <button className="text-sm font-medium text-text-secondary/60 hover:text-text-primary">Update</button>
                    </div>
                  </div>
                </section>

                {/* Security Section */}
                <section className="space-y-4">
                  <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Security</h3>
                  <div className="bg-white rounded-2xl border border-black/5 divide-y divide-black/[0.03]">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-medium">Password</p>
                        <p className="text-xs text-text-secondary/60">Last changed 3 months ago.</p>
                      </div>
                      <button className="px-4 py-2 bg-bg-main border border-black/5 rounded-xl text-sm font-medium hover:bg-sidebar-item-hover transition-colors">
                        Change Password
                      </button>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-medium">Two-Factor Authentication</p>
                        <p className="text-xs text-text-secondary/60">Add an extra layer of security to your account.</p>
                      </div>
                      <button className="px-4 py-2 bg-white border border-black/5 rounded-xl text-sm font-medium hover:bg-bg-main transition-colors">
                        Enable
                      </button>
                    </div>
                  </div>
                </section>

                {/* Danger Zone */}
                <section className="space-y-4 pt-4">
                  <div className="bg-red-50 rounded-2xl border border-red-100 p-6 flex items-center justify-between">
                    <div>
                      <p className="text-[15px] font-medium text-red-900">Delete Account</p>
                      <p className="text-xs text-red-700/60">Permanently remove your account and all data.</p>
                    </div>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 transition-colors shadow-sm">
                      Delete Account
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        ) : currentView === 'help' ? (
          <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
            <div className="max-w-4xl mx-auto w-full pt-12 space-y-12 pb-20">
              <div className="space-y-4 text-center">
                <h1 className="text-4xl font-semibold tracking-tight">How can we help?</h1>
                <p className="text-text-secondary/60 text-lg">Search our help center or browse categories below.</p>
                <div className="max-w-2xl mx-auto relative mt-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search for articles, guides, and more..."
                    className="w-full bg-white border border-black/5 rounded-2xl py-4 pl-12 pr-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] focus:ring-0 focus:border-black/10 transition-all"
                  />
                </div>
              </div>

              {/* Help Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Getting Started', icon: <Plus size={24} />, desc: 'Learn the basics of Zenith and set up your account.' },
                  { title: 'Account & Security', icon: <Settings size={24} />, desc: 'Manage your profile, password, and security settings.' },
                  { title: 'Billing & Plans', icon: <ArrowUpCircle size={24} />, desc: 'Understand our pricing, plans, and billing cycles.' },
                  { title: 'Tools & Features', icon: <LayoutGrid size={24} />, desc: 'Deep dive into Zenith\'s powerful AI tools and features.' },
                  { title: 'Library & History', icon: <Library size={24} />, desc: 'Organize your chats and manage your saved content.' },
                  { title: 'Zenith for Desktop', icon: <Download size={24} />, desc: 'Install and optimize Zenith for your Mac or Windows.' }
                ].map((category) => (
                  <div key={category.title} className="bg-white p-6 rounded-2xl border border-black/5 hover:shadow-md transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-bg-main rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F5DDCB] transition-colors">
                      <div className="text-text-secondary/60 group-hover:text-text-primary transition-colors">
                        {category.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{category.title}</h4>
                    <p className="text-sm text-text-secondary/60 leading-relaxed">{category.desc}</p>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="space-y-6 pt-8">
                <h3 className="text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">Frequently Asked Questions</h3>
                <div className="bg-white rounded-2xl border border-black/5 divide-y divide-black/[0.03]">
                  {[
                    'How do I reset my password?',
                    'Can I use Zenith offline?',
                    'What is the difference between GPT-OSS and other models?',
                    'How do I export my chat history?',
                    'Is my data used for training models?'
                  ].map((faq) => (
                    <div key={faq} className="p-4 flex items-center justify-between hover:bg-bg-main cursor-pointer transition-colors group">
                      <span className="text-[15px] font-medium text-text-primary">{faq}</span>
                      <ChevronDown size={18} className="text-text-secondary/40 group-hover:text-text-primary transition-colors -rotate-90" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-[#F5F3ED] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold">Still need help?</h3>
                  <p className="text-text-secondary/60">Our support team is available 24/7 to assist you.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-6 py-3 bg-white border border-black/5 rounded-2xl font-medium hover:bg-bg-main transition-colors shadow-sm">
                    Chat with Support
                  </button>
                  <button className="px-6 py-3 bg-text-primary text-white rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-sm">
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
            <div className="max-w-5xl mx-auto w-full pt-12 space-y-12 pb-20">
              <div className="space-y-4 text-center">
                <h1 className="text-4xl font-semibold tracking-tight">Choose your plan</h1>
                <p className="text-text-secondary/60 text-lg">Unlock the full potential of Zenith with our premium features.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Free Plan */}
                <div className="bg-white rounded-[32px] border border-black/5 p-8 flex flex-col shadow-sm">
                  <div className="space-y-2 mb-8">
                    <h3 className="text-xl font-semibold">Zenith Free</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-text-secondary/60 text-sm">/month</span>
                    </div>
                    <p className="text-sm text-text-secondary/60">Perfect for individuals just getting started.</p>
                  </div>

                  <div className="flex-1 space-y-4 mb-10">
                    {[
                      'Access to Zenith GPT-OSS 20B',
                      'Standard response speed',
                      '1,000 messages per month',
                      'Basic tools & library',
                      'Web access'
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-bg-main flex items-center justify-center flex-shrink-0">
                          <Plus size={12} className="text-text-secondary/60" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-bg-main text-text-secondary font-semibold rounded-2xl hover:bg-sidebar-item-hover transition-colors">
                    Current Plan
                  </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-[32px] border-2 border-[#D9B9A0] p-8 flex flex-col shadow-[0_20px_50px_rgba(217,185,160,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#D9B9A0] text-white px-4 py-1.5 rounded-bl-2xl text-[11px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                  
                  <div className="space-y-2 mb-8">
                    <h3 className="text-xl font-semibold">Zenith Pro</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">$20</span>
                      <span className="text-text-secondary/60 text-sm">/month</span>
                    </div>
                    <p className="text-sm text-text-secondary/60">Advanced features for power users and professionals.</p>
                  </div>

                  <div className="flex-1 space-y-4 mb-10">
                    {[
                      'Access to Zenith GPT-OSS 100B (Ultra)',
                      'Priority response speed',
                      'Unlimited messages',
                      'Advanced data analysis & tools',
                      'Early access to new features',
                      'Priority support',
                      'Custom style directions'
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#F5DDCB] flex items-center justify-center flex-shrink-0">
                          <ArrowUpCircle size={12} className="text-text-primary" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-text-primary text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-md">
                    Upgrade to Pro
                  </button>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="space-y-8 pt-12">
                <h3 className="text-2xl font-semibold text-center">Compare features</h3>
                <div className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-bg-main/50">
                        <th className="p-6 text-sm font-semibold text-text-secondary/60 uppercase tracking-wider">Feature</th>
                        <th className="p-6 text-sm font-semibold text-text-secondary/60 uppercase tracking-wider text-center w-40">Free</th>
                        <th className="p-6 text-sm font-semibold text-text-secondary/60 uppercase tracking-wider text-center w-40">Pro</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/[0.03]">
                      {[
                        { name: 'Model Access', free: 'GPT-OSS 20B', pro: 'GPT-OSS 100B' },
                        { name: 'Message Limit', free: '1,000/mo', pro: 'Unlimited' },
                        { name: 'Response Speed', free: 'Standard', pro: 'Priority' },
                        { name: 'Data Analysis', free: 'Basic', pro: 'Advanced' },
                        { name: 'File Uploads', free: 'Up to 5MB', pro: 'Up to 100MB' },
                        { name: 'API Access', free: 'No', pro: 'Yes' }
                      ].map((row) => (
                        <tr key={row.name} className="hover:bg-bg-main/20 transition-colors">
                          <td className="p-6 text-[15px] font-medium">{row.name}</td>
                          <td className="p-6 text-[14px] text-text-secondary/60 text-center">{row.free}</td>
                          <td className="p-6 text-[14px] text-text-primary font-medium text-center">{row.pro}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
