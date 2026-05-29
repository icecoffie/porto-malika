import { useEffect, useState } from 'react';

interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export default function NowPlaying() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, using mock data
    // To implement real Spotify API, you'll need to:
    // 1. Create a Spotify App at https://developer.spotify.com/dashboard
    // 2. Get your Client ID and Client Secret
    // 3. Set up OAuth flow
    // 4. Use the /v1/me/player/currently-playing endpoint
    
    const fetchNowPlaying = async () => {
      try {
        // Mock data for demonstration
        // Replace this with actual API call
        const mockTrack: SpotifyTrack = {
          isPlaying: true,
          title: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
          songUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
        };
        
        setTrack(mockTrack);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching now playing:', error);
        setLoading(false);
      }
    };

    fetchNowPlaying();
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#ffffff10] animate-pulse">
        <div className="w-12 h-12 bg-[#ffffff10] rounded-lg"></div>
        <div className="flex-1">
          <div className="h-4 bg-[#ffffff10] rounded w-32 mb-2"></div>
          <div className="h-3 bg-[#ffffff10] rounded w-24"></div>
        </div>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#ffffff10]">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.7237 16.3188C16.5237 16.6313 16.1412 16.7313 15.8287 16.5313C13.3412 15.0188 10.2537 14.6813 6.71619 15.5063C6.36619 15.5813 6.01619 15.3688 5.94119 15.0188C5.86619 14.6688 6.07869 14.3188 6.42869 14.2438C10.2787 13.3438 13.6787 13.7313 16.4662 15.4188C16.7787 15.6063 16.8787 16.0063 16.7237 16.3188ZM18.0787 13.4063C17.8287 13.7938 17.3537 13.9188 16.9662 13.6688C14.1412 11.9313 9.89619 11.4813 6.41619 12.5063C5.97869 12.6313 5.52869 12.3688 5.40369 11.9313C5.27869 11.4938 5.54119 11.0438 5.97869 10.9188C9.92869 9.76877 14.6037 10.2688 17.8537 12.2688C18.2412 12.5063 18.3537 13.0188 18.0787 13.4063ZM18.2037 10.5063C14.8787 8.51877 9.09619 8.31877 6.26619 9.31877C5.74119 9.48127 5.17869 9.18127 5.01619 8.65627C4.85369 8.13127 5.15369 7.56877 5.67869 7.40627C9.00369 6.26877 15.3787 6.49377 19.2287 8.81877C19.6912 9.08127 19.8412 9.68127 19.5787 10.1313C19.3162 10.5938 18.7037 10.7563 18.2037 10.5063Z"/>
        </svg>
        <div className="flex-1">
          <p className="text-sm text-[var(--white-icon)]">Not playing</p>
          <p className="text-xs text-[var(--white-icon)]/60">Last played recently</p>
        </div>
      </div>
    );
  }

  return (
    <a 
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#ffffff10] hover:border-[#1DB954] transition-all duration-300 group"
    >
      {/* Album Art */}
      <div className="relative flex-shrink-0">
        <img 
          src={track.albumImageUrl} 
          alt={track.album}
          className="w-12 h-12 rounded-lg"
        />
        {track.isPlaying && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1DB954] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.7237 16.3188C16.5237 16.6313 16.1412 16.7313 15.8287 16.5313C13.3412 15.0188 10.2537 14.6813 6.71619 15.5063C6.36619 15.5813 6.01619 15.3688 5.94119 15.0188C5.86619 14.6688 6.07869 14.3188 6.42869 14.2438C10.2787 13.3438 13.6787 13.7313 16.4662 15.4188C16.7787 15.6063 16.8787 16.0063 16.7237 16.3188ZM18.0787 13.4063C17.8287 13.7938 17.3537 13.9188 16.9662 13.6688C14.1412 11.9313 9.89619 11.4813 6.41619 12.5063C5.97869 12.6313 5.52869 12.3688 5.40369 11.9313C5.27869 11.4938 5.54119 11.0438 5.97869 10.9188C9.92869 9.76877 14.6037 10.2688 17.8537 12.2688C18.2412 12.5063 18.3537 13.0188 18.0787 13.4063ZM18.2037 10.5063C14.8787 8.51877 9.09619 8.31877 6.26619 9.31877C5.74119 9.48127 5.17869 9.18127 5.01619 8.65627C4.85369 8.13127 5.15369 7.56877 5.67869 7.40627C9.00369 6.26877 15.3787 6.49377 19.2287 8.81877C19.6912 9.08127 19.8412 9.68127 19.5787 10.1313C19.3162 10.5938 18.7037 10.7563 18.2037 10.5063Z"/>
          </svg>
          <span className="text-xs text-[#1DB954] font-medium">
            {track.isPlaying ? 'Now Playing' : 'Last Played'}
          </span>
        </div>
        <p className="text-sm font-medium text-white truncate group-hover:text-[#1DB954] transition-colors">
          {track.title}
        </p>
        <p className="text-xs text-[var(--white-icon)] truncate">
          {track.artist}
        </p>
      </div>

      {/* Play Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--white-icon)] group-hover:text-[#1DB954] transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"/>
      </svg>
    </a>
  );
}
