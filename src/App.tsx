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
  Hand
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'chat' | 'search' | 'settings'>('chat');

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
          <div className="sidebar-item">
            <Library size={18} className="text-text-secondary/70" />
            <span>Library</span>
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
            <div className="sidebar-item">
              <HelpCircle size={18} className="text-text-secondary/70" />
              <span>Get help</span>
            </div>
            <div className="sidebar-item">
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
        ) : (
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
        )}
      </main>
    </div>
  );
}
