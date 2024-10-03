// Helper functions to decode/encode the response body
function decodeBody(buffer) {
    return new TextDecoder("utf-8").decode(buffer);
}

function encodeBody(str) {
    return new TextEncoder().encode(str);
}

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

// Listen for web requests and intercept the response
browser.webRequest.onBeforeRequest.addListener(
    function(details) {
	try {
		const filter = browser.webRequest.filterResponseData(details.requestId);

		let data = [];
		filter.ondata = event => {
		    data.push(new Uint8Array(event.data));
		};

		filter.onstop = () => {
		    let body = new Uint8Array(data.reduce((acc, curr) => acc.concat(...curr), []));

		    let bodyString = decodeBody(body);

		    // Check if the response contains ytInitialData
		    if (bodyString.includes('ytInitialData')) {
			console.log('Intercepted ytInitialData in response');

			// Extract ytInitialData from the response body using regex
			let jsonMatch = bodyString.match(/ytInitialData\s*=\s*({.*?});/);

			if (jsonMatch && jsonMatch[1]) {
			    let ytInitialData = JSON.parse(jsonMatch[1]);

			    // Modify ytInitialData here
			    console.log("Original ytInitialData:", ytInitialData);

			    // Example modification: Change video titles in ytInitialData
			    if (ytInitialData.contents?.twoColumnBrowseResultsRenderer?.tabs) {
				ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs.forEach(tab => {
				    let contents = tab.tabRenderer?.content?.richGridRenderer?.contents;
				    if (contents) {
					contents.forEach(section => {
					    modRichItemRenderer(section);
					});
				    }
				});
			    }

			    console.log("Modified ytInitialData:", ytInitialData);

			    // Replace ytInitialData in the response body with modified data
			    bodyString = bodyString.replace(jsonMatch[1], JSON.stringify(ytInitialData));
			}
		    }

		    // Send the modified body back to the browser
		    filter.write(encodeBody(bodyString));
		    filter.disconnect();
	    } 
        } catch (err) {
		console.log(err);
        }
    },
    { urls: ["*://*.youtube.com/*"] },
    ["blocking"]
);

