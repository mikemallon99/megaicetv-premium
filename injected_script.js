function modRichItemRenderer(video) {
    if (video.richItemRenderer?.content.videoRenderer) {
	video.richItemRenderer.content.videoRenderer.videoId = "7XkOMJ3cJcs";
	video.richItemRenderer.content.videoRenderer.title.runs[0].text = "Unknown Creature Infiltrates the Stu(dio)";
	video.richItemRenderer.content.videoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url = "/watch?v=7XkOMJ3cJcs";
	video.richItemRenderer.content.videoRenderer.navigationEndpoint.watchEndpoint.videoId = "7XkOMJ3cJcs";
	if (video.richItemRenderer.content.videoRenderer.inlinePlaybackEndpoint) {
	    video.richItemRenderer.content.videoRenderer.inlinePlaybackEndpoint.commandMetadata.webCommandMetadata.url = "/watch?v=7XkOMJ3cJcs=YAHIAQE=%3D";
	    video.richItemRenderer.content.videoRenderer.inlinePlaybackEndpoint.watchEndpoint.videoId = "7XkOMJ3cJcs";
	}
	video.richItemRenderer.content.videoRenderer.thumbnail.thumbnails[0].url = "https://i.ytimg.com/vi/7XkOMJ3cJcs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0A7SwQS7Mum-LrDGgEqrmsR85Ew";
	if (video.richItemRenderer.content.videoRenderer.thumbnail.thumbnails[1]) {
	    video.richItemRenderer.content.videoRenderer.thumbnail.thumbnails[1].url = "https://i.ytimg.com/vi/7XkOMJ3cJcs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYXlCgO3ILJYv_gE3jYLGK9OFPDg";
	}
    }
}

// Override the fetch function to intercept POST responses
const originalFetch = window.fetch;
window.fetch = async function(...args) {
    try {
        const response = await originalFetch(...args);
	const contentType = response.headers.get('Content-Type') || '';
	if (!contentType.includes('application/json')) {
	    return response;
	}

        // Clone the response to be able to modify it
        const clonedResponse = response.clone();

        // Parse and modify the response body before returning it
        const data = await clonedResponse.json();

        if (data && data.onResponseReceivedActions) {
            console.log('Modifying onResponseReceivedActions...');

            if (data.onResponseReceivedActions[0]?.appendContinuationItemsAction) {
                const videoList = data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems;
                videoList.forEach(video => {
		    modRichItemRenderer(video);
                });

                // Log the modified data
                console.log("Modified video list:", videoList);

                // Return the modified response
                return new Response(JSON.stringify(data), {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                });
            }
        }

        // Return the original response if no modifications are needed
        return response;
    } catch (err) {
	console.error('Error in custom fetch handler:', err);
        return response;
    }
};
