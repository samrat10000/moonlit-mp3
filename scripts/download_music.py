#!/usr/bin/env python3
"""
Download music from YouTube for the MoonLit Player.
Requires: yt-dlp, ffmpeg
"""
import yt_dlp
import os

# YouTube URLs
SONGS = {
    "the_pool": "https://www.youtube.com/watch?v=fvWG3bPJTkU",
    "be_more": "https://www.youtube.com/watch?v=hGvl2rfJBU0"
}

OUTPUT_DIR = "public/music"

def download_songs():
    """Download songs from YouTube as MP3 files."""
    # Ensure output directory exists
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'quiet': False,
        'no_warnings': False,
    }
    
    for filename, url in SONGS.items():
        print(f"\n📥 Downloading: {filename}...")
        opts = ydl_opts.copy()
        opts['outtmpl'] = f'{OUTPUT_DIR}/{filename}.%(ext)s'
        
        try:
            with yt_dlp.YoutubeDL(opts) as ydl:
                ydl.download([url])
            print(f"✅ Downloaded: {filename}.mp3")
        except Exception as e:
            print(f"❌ Failed to download {filename}: {e}")

if __name__ == "__main__":
    print("🎵 MoonLit Music Downloader")
    print("=" * 40)
    download_songs()
    print("\n✨ Download complete! Check public/music/")
