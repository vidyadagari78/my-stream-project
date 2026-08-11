import type { LiveChannel } from '../types';

export interface IPTVSource {
  id: string;
  name: string;
  url: string;
  description: string;
  type: 'm3u' | 'epg' | 'kannada' | 'kannada_music' | 'movies' | 'music' | 'english';
  badge: string;
}

export const ENGLISH_LIVE_CHANNELS: LiveChannel[] = [
  {
    id: 'l_dw_english',
    name: 'DW News English 24x7',
    category: 'English Live',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/512px-Deutsche_Welle_symbol_2012.svg.png',
    nowPlaying: 'DW News Live World Report & Global Documentaries',
    nextUp: 'DW Conflict Zone',
    viewers: '5.2M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8',
  },
  {
    id: 'l_france24_english',
    name: 'France 24 English 24x7',
    category: 'English Live',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/France_24_logo.svg/512px-France_24_logo.svg.png',
    nowPlaying: 'France 24 Live International News & Analysis',
    nextUp: 'France 24 Culture & The Debate',
    viewers: '4.8M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://static.france24.com/live/F24_EN_LO_HLS/live_tv.m3u8',
  },
  {
    id: 'l_redbull_tv',
    name: 'Red Bull TV English',
    category: 'English Live',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Red_Bull_TV_logo.svg/512px-Red_Bull_TV_logo.svg.png',
    nowPlaying: 'Red Bull Extreme Sports, Formula Racing & Music Live',
    nextUp: 'Red Bull Action Sports World Tour',
    viewers: '6.1M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://rbmn-live.akamaized.net/hls/live/591070/GEO_IN/index.m3u8',
  },
  {
    id: 'l_nasa_tv',
    name: 'NASA TV Space Live',
    category: 'English Live',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    nowPlaying: 'NASA Live ISS Earth View & Space Exploration',
    nextUp: 'Artemis Moon & Deep Space Mission Special',
    viewers: '3.9M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://ntv1.akamaized.net/hls/live/2014075/NASA-TV-Media/master.m3u8',
  },
  {
    id: 'l_bloomberg_tv',
    name: 'Bloomberg TV Finance 24x7',
    category: 'English Live',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Bloomberg_L.P._logo.svg/512px-Bloomberg_L.P._logo.svg.png',
    nowPlaying: 'Bloomberg Global Markets & Financial News Live',
    nextUp: 'Bloomberg Technology & Markets Hour',
    viewers: '3.1M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://live-bloomberg-us.amagi.tv/playlist.m3u8',
  },
];

export const KANNADA_MUSIC_CHANNELS: LiveChannel[] = [
  {
    id: 'l_gyaranti_news',
    name: 'Gyaranti News Live (ಗ್ಯಾರಂಟಿ ನ್ಯೂಸ್ 24x7)',
    category: 'Kannada News',
    logo: 'https://img.youtube.com/vi/XaSnibCLVJA/hqdefault.jpg',
    nowPlaying: 'Gyaranti News Live 24x7 Breaking News & State Updates',
    nextUp: 'Prime Time Special Bulletin',
    viewers: '3.8M',
    isLive: true,
    backdrop: 'https://img.youtube.com/vi/XaSnibCLVJA/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=XaSnibCLVJA',
  },
  {
    id: 'l_aswamegha_news',
    name: 'Aswamegha Live (ಅಶ್ವಮೇಘ 24x7)',
    category: 'Kannada News',
    logo: 'https://img.youtube.com/vi/idL8zhF17Cs/hqdefault.jpg',
    nowPlaying: 'Aswamegha Live News & Cultural Updates',
    nextUp: 'Aswamegha Prime Hour',
    viewers: '2.9M',
    isLive: true,
    backdrop: 'https://img.youtube.com/vi/idL8zhF17Cs/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=idL8zhF17Cs',
  },
  {
    id: 'l_7s_music_kn',
    name: '7S Music Live (7S ಮ್ಯೂಸಿಕ್ 24x7)',
    category: 'Kannada & South Music Live',
    logo: 'https://i.imgur.com/zDiIhdN.png',
    nowPlaying: '7S Music Non-Stop Sandalwood Hits & Melodies (ಕನ್ನಡ ಸೂಪರ್ ಹಿಟ್ ಹಾಡುಗಳು)',
    nextUp: '7S Top 10 Countdown',
    viewers: '4.9M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8',
  },
  {
    id: 'l_tv9_kn',
    name: 'TV9 Kannada Live (ಟಿವಿ9 ಕನ್ನಡ)',
    category: 'Kannada News & Music',
    logo: 'https://img.youtube.com/vi/jdJoOhqCipA/hqdefault.jpg',
    nowPlaying: 'TV9 Kannada Live 24x7 News & Cultural Specials',
    nextUp: 'Prime Time Special Bulletin',
    viewers: '5.4M',
    isLive: true,
    backdrop: 'https://img.youtube.com/vi/jdJoOhqCipA/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=jdJoOhqCipA',
  },
  {
    id: 'l_dd_chandana_kn',
    name: 'DD Chandana (ಡಿಡಿ ಚಂದನ)',
    category: 'Kannada Live DD',
    logo: 'https://mumbai-edge.smartplaytv.in/DDChandana/logo.png',
    nowPlaying: 'DD Chandana Live Doordarshan Kannada Broadcast',
    nextUp: 'Kannada Sangeetha Special',
    viewers: '2.8M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/FL1ZcMOhDD8?autoplay=1',
  },
  {
    id: 'l_aaryaa_tv_kn',
    name: 'Aaryaa TV Live (ಆರ್ಯಾ ಟಿವಿ 24x7)',
    category: 'Kannada & South Entertainment Live',
    logo: 'https://stream.ottlive.co.in/aryatvtamil/logo.png',
    nowPlaying: 'Aaryaa TV Live Kannada Music & Entertainment (ಆರ್ಯಾ ಟಿವಿ)',
    nextUp: 'Aaryaa Prime Blockbuster Express',
    viewers: '3.6M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://stream.ottlive.co.in/aryatvtamil/index.m3u8',
  },
  {
    id: 't_katv_kn',
    name: 'Ka TV Live (ಕ TV HD)',
    category: 'Kannada Live Original',
    logo: '/uploads/hero_banner.png',
    nowPlaying: 'ನಮ್ಮ ಕಥೆಗಳು ನಮ್ಮ ಕನ್ನಡ (Live Blockbuster HD)',
    nextUp: 'Ka TV Prime Cinema',
    viewers: '4.8M',
    isLive: true,
    backdrop: '/uploads/hero_banner.png',
    videoUrl: '/uploads/video_1785327490474_422.mp4',
  },
];

export const KANNADA_LIVE_CHANNELS: LiveChannel[] = [
  ...KANNADA_MUSIC_CHANNELS,
  {
    id: 'l_aajtak',
    name: 'Aaj Tak HD (IPTV-org)',
    category: 'News',
    logo: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_AAJ_TAK/images/LOGO_HD/image.png',
    nowPlaying: 'Aaj Tak Live HD Prime News',
    nextUp: 'Super 100 Bulletin',
    viewers: '3.4M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8',
  },
];

export const MUSIC_LIVE_CHANNELS: LiveChannel[] = [
  {
    id: 'l_7s_music',
    name: '7S Music Live (7S ಮ್ಯೂಸಿಕ್ 24x7)',
    category: 'Music Live',
    logo: 'https://i.imgur.com/zDiIhdN.png',
    nowPlaying: '7S Live Beat & Melody Express (Non-Stop Songs)',
    nextUp: '7S Night Mood Songs',
    viewers: '4.9M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8',
  },
  {
    id: 'l_9xm_music',
    name: '9XM Non-Stop Music HD',
    category: 'Music Live',
    logo: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9XM/images/LOGO_HD/image.png',
    nowPlaying: '9XM Smash Hits Hour & New Songs 2026',
    nextUp: '9XM Top 10 Countdown',
    viewers: '3.6M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://9xjio.wiseplayout.com/9XM/master.m3u8',
  },
  {
    id: 'l_9x_jalwa',
    name: '9X Jalwa Classic Songs',
    category: 'Music Live',
    logo: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_JALWA/images/LOGO_HD/image.png',
    nowPlaying: 'Evergreen 90s & 2000s Hits Non-Stop',
    nextUp: 'Jalwa Golden Era Melodies',
    viewers: '2.8M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8',
  },
  {
    id: 'l_9x_tashan',
    name: '9X Tashan Punjabi Songs',
    category: 'Music Live',
    logo: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_TASHAN/images/LOGO_HD/image.png',
    nowPlaying: '9X Tashan Punjabi Party Beats',
    nextUp: 'Bhangra Special Hour',
    viewers: '2.2M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://amg01281-9xmediapvtltd-9xtashan-samsungin-xz1sd.amagi.tv/playlist/amg01281-9xmediapvtltd-9xtashan-samsungin/playlist.m3u8',
  },
  {
    id: 'l_b4u_music',
    name: 'B4U Music Hits 24x7',
    category: 'Music Live',
    logo: 'https://dtil.tmsimg.com/assets/s90012_ld_h15_aa.png?lock=720x540',
    nowPlaying: 'B4U Aawaz De Kahan Hai Non-stop',
    nextUp: 'B4U First Look & Hits',
    viewers: '1.9M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://amg00778-b4unetworksltd-b4umusic-samsungin-cl2cs.amagi.tv/playlist/amg00778-b4unetworksltd-b4umusic-samsungin/playlist.m3u8',
  },
];

export const MOVIE_LIVE_CHANNELS: LiveChannel[] = [
  {
    id: 'l_andpictures',
    name: '&pictures HD Movies',
    category: 'Movies Live',
    logo: 'https://dtil.tmsimg.com/assets/GNLZZGG0022J67R.png?lock=720x540',
    nowPlaying: '&pictures Live Blockbuster Hindi Cinema',
    nextUp: 'Prime Time Action Film',
    viewers: '4.5M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://trs1.aynaott.com/andpictureshd/index.m3u8',
  },
  {
    id: 'l_alltimemovies',
    name: 'All Time Movies HD',
    category: 'Movies Live',
    logo: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALL_TIME_MOVIES/images/LOGO_HD/image.png',
    nowPlaying: 'All Time Movies 24x7 Non-stop Cinema',
    nextUp: 'Midnight Superhit Movie',
    viewers: '3.1M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://mumt03.tangotv.in/Dsly5z3HALLTIMEMOVIES/index.m3u8',
  },
  {
    id: 'l_b4u_movies',
    name: 'B4U Movies 24x7',
    category: 'Movies Live',
    logo: 'https://dtil.tmsimg.com/assets/s90012_ld_h15_aa.png?lock=720x540',
    nowPlaying: 'B4U Star Gold Hits & Action Movies',
    nextUp: 'Superstar Cinema Hour',
    viewers: '2.9M',
    isLive: true,
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://amg00778-b4unetworksltd-b4umovies-samsungin-co2cs.amagi.tv/playlist/amg00778-b4unetworksltd-b4umovies-samsungin/playlist.m3u8',
  },
];

export const IPTV_PRESETS: IPTVSource[] = [
  {
    id: 'english_live_api',
    name: 'English Live Streams (🇬🇧 24x7)',
    url: 'internal:english',
    description: 'DW News, France 24, Red Bull TV, NASA TV Space, Bloomberg TV',
    type: 'english',
    badge: '🇬🇧 English 24x7',
  },
  {
    id: 'kannada_music_live_api',
    name: '7S Music & Kannada Live (7S ಮ್ಯೂಸಿಕ್)',
    url: 'internal:kannada_music',
    description: '7S Music Live, TV9 Kannada, DD Chandana, Aaryaa TV, Ka TV HD 24x7',
    type: 'kannada_music',
    badge: '🎶 7S & Kannada Songs',
  },
  {
    id: 'music_live_api',
    name: 'Free Songs & Music APIs (ಉಚಿತ ಮ್ಯೂಸಿಕ್ 24x7)',
    url: 'internal:music',
    description: '7S Music, 9XM Music, 9X Jalwa, 9X Tashan, B4U Music',
    type: 'music',
    badge: '🎵 All Music Hits',
  },
  {
    id: 'movies_live_api',
    name: 'Movies Live Channels (ಸಿನಿಮಾ ಲೈವ್)',
    url: 'internal:movies',
    description: '&pictures, All Time Movies, B4U Movies',
    type: 'movies',
    badge: '🎬 Movies 24x7',
  },
  {
    id: 'kannada_live_api',
    name: 'Kannada Live TV APIs (ಕನ್ನಡ ಲೈವ್)',
    url: 'internal:kannada',
    description: '7S Music, TV9 Kannada, DD Chandana, Aaryaa TV, Ka TV',
    type: 'kannada',
    badge: '💛❤️ Kannada Live',
  },
  {
    id: 'iptv_org_in',
    name: 'IPTV-org (India)',
    url: 'https://iptv-org.github.io/iptv/countries/in.m3u',
    description: 'Free & Legal Live TV Channels from India',
    type: 'm3u',
    badge: '🇮🇳 India Free',
  },
  {
    id: 'iptv_org_global',
    name: 'IPTV-org (Global Index)',
    url: 'https://iptv-org.github.io/iptv/index.m3u',
    description: 'Worldwide collection of 8000+ public live channels',
    type: 'm3u',
    badge: '🌍 Global Index',
  },
  {
    id: 'free_tv',
    name: 'Free-TV Playlist',
    url: 'https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8',
    description: 'Curated free TV channels from around the world',
    type: 'm3u',
    badge: '📺 Free-TV Legal',
  },
];

export function parseM3U(m3uContent: string, defaultCategory = 'Free Live'): LiveChannel[] {
  const lines = m3uContent.split(/\r?\n/);
  const channels: LiveChannel[] = [];
  
  let currentExtInf: {
    logo?: string;
    group?: string;
    name?: string;
    tvgId?: string;
  } | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith('#EXTINF:')) {
      // Extract tvg-logo
      const logoMatch = line.match(/tvg-logo="([^"]+)"/i);
      const logo = logoMatch ? logoMatch[1] : undefined;

      // Extract group-title
      const groupMatch = line.match(/group-title="([^"]+)"/i);
      const group = groupMatch ? groupMatch[1] : defaultCategory;

      // Extract tvg-id
      const tvgIdMatch = line.match(/tvg-id="([^"]+)"/i);
      const tvgId = tvgIdMatch ? tvgIdMatch[1] : undefined;

      // Extract channel name (comma separated at the end)
      const commaIdx = line.lastIndexOf(',');
      const name = commaIdx !== -1 ? line.substring(commaIdx + 1).trim() : 'Live Channel';

      currentExtInf = { logo, group, name, tvgId };
    } else if (line.startsWith('http://') || line.startsWith('https://')) {
      const url = line;
      const channelName = currentExtInf?.name || 'Live Channel';
      const category = currentExtInf?.group || defaultCategory;
      const logoUrl = currentExtInf?.logo;

      const id = 'l_iptv_' + Math.random().toString(36).substring(2, 9);
      channels.push({
        id,
        name: channelName,
        category: category,
        logo: logoUrl ? logoUrl : '📡',
        nowPlaying: `Live 24x7 Broadcast (${category})`,
        nextUp: 'Continuous Free Live Stream',
        viewers: (Math.floor(Math.random() * 450) + 50) + 'K',
        isLive: true,
        backdrop: logoUrl && logoUrl.startsWith('http') 
          ? logoUrl 
          : 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&auto=format&fit=crop&q=80',
        videoUrl: url,
      });

      currentExtInf = null;
    }
  }

  return channels;
}
