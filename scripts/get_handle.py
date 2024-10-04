import googleapiclient.discovery

# Set your API key here
API_KEY = "AIzaSyC5I8hMbsCHWdSuQ5HUKNHY1yEWFpAAI-Q"

# Set the channel handle here
CHANNEL_HANDLE = "@MegaIceTV"

def get_channel_id_by_handle(api_key, channel_handle):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    # Search for the channel using the handle
    request = youtube.search().list(
        part="snippet",
        q=channel_handle,
        type="channel",
        maxResults=1
    )
    response = request.execute()

    # Extract channel ID from the response
    if response["items"]:
        return response["items"][0]["snippet"]["channelId"]
    else:
        return None

if __name__ == "__main__":
    channel_id = get_channel_id_by_handle(API_KEY, CHANNEL_HANDLE)

    if channel_id:
        print(f"Channel ID for {CHANNEL_HANDLE}: {channel_id}")
    else:
        print(f"Channel handle {CHANNEL_HANDLE} not found.")

