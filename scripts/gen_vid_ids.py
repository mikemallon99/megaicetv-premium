import os
import googleapiclient.discovery

# Set your API key here
API_KEY = "AIzaSyC5I8hMbsCHWdSuQ5HUKNHY1yEWFpAAI-Q"

# Set the channel ID (you can get this from your YouTube channel URL)
CHANNEL_ID = "UC38wy8I4pO6xVDZiWxxeeng"

def get_videos_from_channel(api_key, channel_id):
    # Initialize the YouTube API client
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    # First, retrieve the upload playlist ID (each channel has an upload playlist)
    request = youtube.channels().list(
        part="contentDetails",
        id=channel_id
    )
    response = request.execute()

    upload_playlist_id = response["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]

    # Now, retrieve videos from the upload playlist
    videos = []
    next_page_token = None

    while True:
        # Get the list of videos from the playlist
        playlist_request = youtube.playlistItems().list(
            part="snippet",
            playlistId=upload_playlist_id,
            maxResults=50,  # The max number of results per page (50 is the max allowed)
            pageToken=next_page_token
        )
        playlist_response = playlist_request.execute()

        for item in playlist_response["items"]:
            video_title = item["snippet"]["title"]
            video_id = item["snippet"]["resourceId"]["videoId"]
            videos.append({"title": video_title, "videoId": video_id})

        next_page_token = playlist_response.get("nextPageToken")
        if not next_page_token:
            break

    return videos

if __name__ == "__main__":
    # Fetch all videos
    videos = get_videos_from_channel(API_KEY, CHANNEL_ID)

    # Print video title and ID
    print("const megaiceVideos = [")
    for video in videos:
        print(f'    createVideo("{video["title"]}", "{video["videoId"]}"),')
    print("]")

