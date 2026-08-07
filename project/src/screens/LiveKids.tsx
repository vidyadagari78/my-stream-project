import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Play, Users, ChevronLeft, Baby, Sparkles, Key, Check, Plus, X, Globe, Download, RefreshCw, Rss, Layers } from 'lucide-react';
import { useApp } from '../store';
import { LIVE_CHANNELS, TITLES, byType } from '../data';
import ContentRow from '../components/ContentRow';
import type { LiveChannel } from '../types';
import { parseM3U, IPTV_PRESETS, KANNADA_LIVE_CHANNELS, KANNADA_MUSIC_CHANNELS, MUSIC_LIVE_CHANNELS, MOVIE_LIVE_CHANNELS, ENGLISH_LIVE_CHANNELS, type IPTVSource } from '../utils/m3uParser';

export function Live() {
  const { back, navigate, liveChannels, setLiveChannels } = useApp();
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('live_tv_api_key') || '');
  const [tempKey, setTempKey] = useState('');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [channels, setChannelsState] = useState<LiveChannel[]>(() => liveChannels.length > 0 ? liveChannels : [...ENGLISH_LIVE_CHANNELS, ...KANNADA_MUSIC_CHANNELS, ...KANNADA_LIVE_CHANNELS, ...MUSIC_LIVE_CHANNELS, ...MOVIE_LIVE_CHANNELS]);
  const [customName, setCustomName] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [loadingPreset, setLoadingPreset] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>('english_live_api');
  const [epgGuideUrl, setEpgGuideUrl] = useState<string>('https://iptv-org.github.io/epg/guides/in.xml');
  const [presetStatus, setPresetStatus] = useState<string>('Loaded English, Kannada, News, Movies & Songs Live TV Streams (24x7)');

  const updateChannels = (newChs: LiveChannel[]) => {
    setChannelsState(newChs);
    setLiveChannels(newChs);
  };

  useEffect(() => {
    const savedKey = localStorage.getItem('live_tv_api_key');
    if (savedKey) setApiKey(savedKey);

    if (channels.length <= 10) {
      updateChannels([...ENGLISH_LIVE_CHANNELS, ...KANNADA_MUSIC_CHANNELS, ...KANNADA_LIVE_CHANNELS, ...MUSIC_LIVE_CHANNELS, ...MOVIE_LIVE_CHANNELS]);
    }
  }, []);

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('live_tv_api_key', tempKey);
    setApiKey(tempKey);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setShowKeyModal(false);
    }, 1200);
  };

  const handleFetchIPTVPreset = async (preset: IPTVSource) => {
    if (preset.type === 'english') {
      updateChannels(ENGLISH_LIVE_CHANNELS);
      setActivePreset(preset.id);
      setPresetStatus(`Loaded ${ENGLISH_LIVE_CHANNELS.length} English Live 24x7 TV Channels`);
      return;
    }

    if (preset.type === 'kannada_music') {
      updateChannels(KANNADA_MUSIC_CHANNELS);
      setActivePreset(preset.id);
      setPresetStatus(`Loaded ${KANNADA_MUSIC_CHANNELS.length} Kannada Music 24x7 Live TV Channels`);
      return;
    }

    if (preset.type === 'kannada') {
      updateChannels(KANNADA_LIVE_CHANNELS);
      setActivePreset(preset.id);
      setPresetStatus(`Loaded ${KANNADA_LIVE_CHANNELS.length} Kannada Live TV Channels & API streams`);
      return;
    }

    if (preset.type === 'movies') {
      updateChannels(MOVIE_LIVE_CHANNELS);
      setActivePreset(preset.id);
      setPresetStatus(`Loaded ${MOVIE_LIVE_CHANNELS.length} Movies Live TV Channels`);
      return;
    }

    if (preset.type === 'music') {
      updateChannels(MUSIC_LIVE_CHANNELS);
      setActivePreset(preset.id);
      setPresetStatus(`Loaded ${MUSIC_LIVE_CHANNELS.length} Songs & Music Live TV Channels`);
      return;
    }

    if (preset.type === 'epg') {
      setEpgGuideUrl(preset.url);
      setPresetStatus(`EPG XML Guide linked: ${preset.name} (${preset.url})`);
      return;
    }

    setLoadingPreset(preset.id);
    setPresetStatus(`Loading live channels from ${preset.name}...`);

    try {
      // Try direct fetch or backend proxy
      let rawText = '';
      try {
        const res = await fetch(preset.url);
        if (res.ok) {
          rawText = await res.text();
        } else {
          throw new Error(`Direct fetch failed with status ${res.status}`);
        }
      } catch {
        const proxyRes = await fetch(`/api/iptv/fetch?url=${encodeURIComponent(preset.url)}`);
        if (proxyRes.ok) {
          rawText = await proxyRes.text();
        } else {
          throw new Error('Failed to load playlist');
        }
      }

      if (rawText) {
        const parsed = parseM3U(rawText, preset.name);
        if (parsed.length > 0) {
          updateChannels(parsed);
          setActivePreset(preset.id);
          setPresetStatus(`Successfully loaded ${parsed.length} channels from ${preset.name}`);
        } else {
          setPresetStatus(`No valid channels found in ${preset.name}`);
        }
      }
    } catch (err: any) {
      console.error('IPTV load error:', err);
      setPresetStatus(`Error loading ${preset.name}: ${err.message || 'Network error'}`);
    } finally {
      setLoadingPreset(null);
    }
  };

  const handleAddCustomChannel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName || !customUrl) return;

    if (customUrl.endsWith('.m3u') || customUrl.endsWith('.m3u8') || customUrl.includes('playlist')) {
      handleFetchIPTVPreset({
        id: 'custom_' + Date.now(),
        name: customName,
        url: customUrl,
        description: 'Custom M3U Playlist',
        type: 'm3u',
        badge: 'Custom M3U',
      });
      setCustomName('');
      setCustomUrl('');
      setShowKeyModal(false);
      return;
    }

    const newCh: LiveChannel = {
      id: 'l_custom_' + Date.now(),
      name: customName,
      category: 'Custom Live',
      logo: '📡',
      nowPlaying: 'Live Streaming Channel',
      nextUp: '24/7 Broadcast',
      viewers: '100K+',
      isLive: true,
      backdrop: '/uploads/hero_banner.png',
      videoUrl: customUrl,
      apiKey: apiKey,
    };
    updateChannels([newCh, ...channels]);
    setCustomName('');
    setCustomUrl('');
  };

  const categories = ['All', 'Kannada', 'News', 'Music', 'Sports', 'Events', 'Movies', 'Religious', 'Entertainment'];

  const filteredChannels = activeCategory === 'All'
    ? channels
    : channels.filter((c) => 
        c.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
        c.name.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <div className="pt-20 lg:pt-24 min-h-screen pb-16">
      <div className="page-shell py-6">
        <button onClick={back} className="flex items-center gap-1.5 text-white/60 hover:text-white mb-4 transition-colors">
          <ChevronLeft size={20} /> Back
        </button>

        {/* Live TV Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Radio size={24} className="text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-black tracking-tight">Live TV</h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-red-600/90 text-white animate-pulse">● LIVE</span>
              </div>
              <p className="text-white/60 text-sm">{filteredChannels.length} active broadcast channels streaming</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => {
                updateChannels(LIVE_CHANNELS);
                setActivePreset('default');
                setPresetStatus('Restored default curated channels');
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass text-xs font-bold hover:bg-white/10 transition-colors"
            >
              <RefreshCw size={14} /> Reset Channels
            </button>
            <button
              onClick={() => {
                setTempKey(apiKey);
                setShowKeyModal(true);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/20 hover:border-amber-400/50 text-white font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <Key size={18} className="text-amber-400" />
              <span>{apiKey ? 'API Key Linked' : 'Connect API Key / IPTV'}</span>
              {apiKey && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
            </button>
          </div>
        </div>

        {/* IPTV Preset Providers Banner */}
        <div className="mb-6 p-5 rounded-2xl glass border border-white/15 bg-gradient-to-r from-ink-950 via-purple-950/20 to-black">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Globe size={18} className="text-brand-400" />
              <span>IPTV Free API Playlists & EPG Guides</span>
            </div>
            <span className="text-xs text-white/50">Official Public Streams</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {IPTV_PRESETS.map((preset) => {
              const isSelected = activePreset === preset.id;
              const isLoading = loadingPreset === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleFetchIPTVPreset(preset)}
                  disabled={isLoading}
                  className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-brand-500/20 border-brand-400 text-white shadow-lg shadow-brand-500/20 ring-1 ring-brand-400'
                      : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-extrabold text-sm truncate">{preset.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-white/10 text-brand-300 whitespace-nowrap">{preset.badge}</span>
                    </div>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed mb-3">{preset.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-brand-400 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      {preset.type === 'epg' ? <Rss size={13} /> : <Download size={13} />}
                      {preset.type === 'epg' ? 'Link EPG Guide' : 'Load Stream Playlist'}
                    </span>
                    {isLoading && <RefreshCw size={13} className="animate-spin text-amber-400" />}
                  </div>
                </button>
              );
            })}
          </div>

          {presetStatus && (
            <div className="mt-3 text-xs font-mono px-3 py-2 rounded-lg bg-black/50 text-amber-300 border border-amber-500/30 flex items-center justify-between">
              <span>{presetStatus}</span>
              <span className="text-white/40 text-[10px]">EPG: {epgGuideUrl}</span>
            </div>
          )}
        </div>

        {/* API Key Banner Indicator */}
        {apiKey && (
          <div className="mb-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 text-amber-200 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-amber-400" />
              <span><strong>Live API Key Connected:</strong> <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300 font-mono">key-{apiKey.slice(0, 6)}•••••</code></span>
            </div>
            <button
              onClick={() => setShowKeyModal(true)}
              className="text-xs font-bold underline hover:text-white"
            >
              Configure
            </button>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredChannels.map((ch, i) => (
            <motion.button
              key={ch.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.4) }}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                try {
                  localStorage.setItem('last_played_channel_' + ch.id, JSON.stringify(ch));
                } catch {}
                navigate({ name: 'player', id: ch.id });
              }}
              className="relative aspect-video rounded-2xl overflow-hidden group text-left border border-white/10 hover:border-amber-400/60 shadow-xl transition-all"
            >
              {ch.backdrop && ch.backdrop.startsWith('http') ? (
                <img src={ch.backdrop} alt={ch.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-ink-900 to-black flex items-center justify-center p-4">
                  <Layers size={48} className="text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
              
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600 text-xs font-black tracking-wider text-white shadow-lg">
                <Radio size={11} className="animate-pulse" /> LIVE
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full glass text-xs font-semibold">
                <Users size={11} className="text-amber-400" /> {ch.viewers}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-1">
                  {ch.logo && ch.logo.startsWith('http') ? (
                    <img src={ch.logo} alt="" className="w-8 h-8 object-contain rounded bg-black/40 p-1" />
                  ) : (
                    <span className="text-2xl">{ch.logo || '📡'}</span>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-base leading-tight text-white group-hover:text-amber-300 transition-colors truncate">{ch.name}</div>
                    <div className="text-xs text-white/60 truncate">{ch.category}</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/90 truncate">{ch.nowPlaying}</div>
                <div className="text-xs text-white/50 truncate">Up next: {ch.nextUp}</div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.8)] transform group-hover:scale-110 transition-transform">
                  <Play size={24} className="fill-black ml-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-12">
          <ContentRow title="Live Sports & Events" titles={byType('sport')} variant="large" />
        </div>
      </div>

      {/* API Key / IPTV Modal */}
      <AnimatePresence>
        {showKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-ink-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowKeyModal(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Key size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Connect Live TV API Key / M3U</h3>
                  <p className="text-xs text-white/60">Link YouTube Live / IPTV / M3U Provider Stream Link</p>
                </div>
              </div>

              <form onSubmit={handleSaveApiKey} className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1.5">Live Stream API Key</label>
                  <input
                    type="text"
                    value={tempKey}
                    onChange={(e) => setTempKey(e.target.value)}
                    placeholder="Enter API Key (e.g. AIzaSyB... or custom-live-key)"
                    className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-amber-400 text-white text-sm outline-none font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-extrabold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {savedSuccess ? <Check size={18} /> : <Key size={18} />}
                  <span>{savedSuccess ? 'API Key Linked Successfully!' : 'Save & Link API Key'}</span>
                </button>
              </form>

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Plus size={16} className="text-amber-400" />
                  Add Custom Live Stream or M3U Playlist URL
                </h4>
                <form onSubmit={handleAddCustomChannel} className="space-y-3">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Channel / Playlist Name (e.g. India IPTV)"
                    className="w-full px-3.5 py-2.5 rounded-lg glass border border-white/15 text-white text-xs outline-none"
                  />
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="Stream URL or M3U Link (e.g. https://.../playlist.m3u8)"
                    className="w-full px-3.5 py-2.5 rounded-lg glass border border-white/15 text-white text-xs outline-none font-mono"
                  />
                  <button
                    type="submit"
                    disabled={!customName || !customUrl}
                    className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs disabled:opacity-40 transition-colors"
                  >
                    + Import Channel or M3U Playlist
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Kids() {
  const { back, navigate } = useApp();
  const kidsTitles = [...byType('kids'), ...TITLES.filter((t) => t.rating === 'U')];
  return (
    <div className="pt-20 lg:pt-24 min-h-screen pb-16">
      <div className="page-shell py-6">
        <button onClick={back} className="flex items-center gap-1.5 text-white/60 hover:text-white mb-4">
          <ChevronLeft size={20} /> Back
        </button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 sm:h-80 rounded-3xl overflow-hidden mb-8"
        >
          <img src={kidsTitles[0]?.backdrop} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-975 via-ink-975/60 to-transparent" />
          <div className="absolute bottom-0 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 text-xs font-bold mb-3">
              <Baby size={14} /> KIDS
            </div>
            <h1 className="text-4xl sm:text-5xl font-black">{kidsTitles[0]?.title}</h1>
            <button
              onClick={() => navigate({ name: 'player', id: kidsTitles[0]!.id })}
              className="mt-4 flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-bold hover:scale-105 transition-transform"
            >
              <Play size={20} className="fill-black" /> Play Now
            </button>
          </div>
        </motion.div>

        <div className="flex items-center gap-2 mb-4 text-green-400">
          <Sparkles size={20} />
          <h2 className="text-xl font-bold">Safe, fun, and made just for kids</h2>
        </div>

        <ContentRow title="Kids Originals" titles={kidsTitles} variant="large" />
        <ContentRow title="Family Movies" titles={TITLES.filter((t) => t.rating === 'U' || t.rating === 'U/A 13+')} />
        <ContentRow title="Animation" titles={byType('kids')} />
      </div>
    </div>
  );
}
