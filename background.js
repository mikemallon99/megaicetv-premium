function createVideo(title, videoId) {
    return {
        title: title,
        videoId: videoId
    };
}

const megaiceVideos = [
    createVideo("They Dug The World's Deepest Hole (SOMEBODY DIES)", "PmdGaVY5N70"),
    createVideo("Kings of the Club", "pwBd-oKz9rM"),
    createVideo("MegaIceTV The Movie (Trailer)", "FNx-IpoC3x4"),
    createVideo("COPS: Ghost Cop", "hsXeAtALwrw"),
    createVideo("Study Room", "0emb74bovcY"),
    createVideo("The Office: Episode 7 \"Shirley Returns\"", "xEl1b6T0jqM"),
    createVideo("McDonalds ASMR *WARNING* EXTRA CRISPY *GONE WRONG*", "oyRZ93s3RPc"),
    createVideo("Unknown Creature Infiltrates the Stu(dio)", "7XkOMJ3cJcs"),
    createVideo("MTV Cribs: The Stu(dio)", "DXJE0Nq_W5w"),
    createVideo("Granite Cowboys (Lost Episodes)", "O8Y9Y-bKJyU"),
    createVideo("COPS: The Rock Edition (Ft. The Rock)", "GmTtDFZRgn8"),
    createVideo("MPR: Little Table Desk Concert (ft. The Brown Boyz)", "T2YPNHCzK4U"),
    createVideo("MegaIceTV Live Stream", "H2s4A-2z6E8"),
    createVideo("COPS: Kentucky PD", "8XBs28P1n50"),
    createVideo("Breaking Ice: The Bird Wife", "TtVjYznvqnE"),
    createVideo("Fat Guys: Da Big One", "1mrmSwDFkFc"),
    createVideo("Special Announcement", "6E_0AEgyP-g"),
    createVideo("GARAGE BARAGE", "bq4QbAUR8P4"),
    createVideo("WrestleMania 74 (Papi Chulo y Taco Loco)", "D_RolBqMZiU"),
    createVideo("COPS: Summer Patrol", "J-D2iJljAdY"),
    createVideo("COPS: El Beeper Edition", "Wy09ppOKu4c"),
    createVideo("Cooking with the Bois: Trumpos Tacos", "vvoIhhxaRqY"),
    createVideo("Battle of the Blue Woodchip", "YSvMSnLfUlA"),
    createVideo("Cooking with the Bois: Chicken Parmesan", "MJnNoLAEEH4"),
    createVideo("Homerun Swing (Forensic Files)", "h5MGfTdlA4M"),
    createVideo("Sporty Dudes", "lmqyRLdel10"),
    createVideo("VID_CLOWN.mp4", "KCNriXlpf4Q"),
    createVideo("Germany Trailer", "Kk6_nDOXu40"),
    createVideo("Lemon Wipe Out 4 (Trailer)", "0XFingVaQyY"),
    createVideo("MegaIceTV: The Movie", "7ckFvLU7KDY"),
    createVideo("Pizza Delivery", "W_JhpXm5e4g"),
    createVideo("Corporate Downsizing", "YWR6Z3h1u-o"),
    createVideo("Justice For Harambe (2016 Documentary)", "sepK3BKTXPU"),
    createVideo("Happy Camper", "2PgzmNoNtYY"),
    createVideo("Sad Dad", "c8s4MyEEceM"),
    createVideo("RICH GUY", "06IJNAaRo1Q"),
    createVideo("Law and Schmorder", "R0R5f5egpWs"),
    createVideo("MegaIceTV Sells Out", "-YQ1Bl1KdmM"),
    createVideo("Shoes", "Zt8sTtHGQOw"),
    createVideo("Foreigner Concert (2008)", "fHbATxFItI0"),
    createVideo("El Chapo: A Love Story", "tIfkFOR3pIU"),
    createVideo("Sponsored Video", "WtJ7jv_wflk"),
    createVideo("COPS Reloaded: Episode 1", "g1jztYTLGsw"),
    createVideo("Money Matters", "NZKkUXK776M"),
    createVideo("Love Has No Borders", "M9dHjCfddug"),
    createVideo("RKO PRANK GONE WRONG", "kTUeYRw-pZM"),
    createVideo("El Chapo Caught! Dancing!!!!", "QrQNaGFaL90"),
    createVideo("The Long Haul", "9mvarA74QHc"),
    createVideo("Relaxing Car Ride", "Qwe5GBXNez0"),
    createVideo("\"Thats So Danny\"™", "oxpdUNkWuqQ"),
    createVideo("Drake and Josh Theme Song (2005)", "O8JsVt-hN8c"),
    createVideo("Double Trouble: Priest Basketball", "MJUJNGNrACk"),
    createVideo("Sporty Dude: The Movie (Official Trailer 2012)", "lhyWQCx-q5M"),
    createVideo("Ode to Odeh (Lost Episodes)", "ztAa21Lq0ps"),
    createVideo("Cops Episode 5 (Lost Episodes)", "pFV3KKRx0e0"),
    createVideo("Soul Train with DJ Mike (Lost Episodes)", "pD6XnWfwPZs"),
    createVideo("The Office: Episode 6 \"After Hours\"", "GZ3yj2_ADYg"),
    createVideo("The Office: Episode 5 \"Surprises\"", "-4wzUg10I74"),
    createVideo("The Office: Episode 4 \"Office Edition\"", "vPUSvfokRRs"),
    createVideo("The Office: Episode 2 \"Storytime\"", "IuOtCD5ZYPE"),
    createVideo("The Office: Episode 1 \"Meet the Boss\"", "yCoNn9SgOBQ"),
    createVideo("A Very MegaIce Christmas", "HtJEV8LF5BE"),
    createVideo("Space Patio", "pXO1FRY1iPw"),
    createVideo("New House, Old Man", "PxHYXZhvJ5M"),
    createVideo("Official Talk Show: Featuring the Police Officer", "_hTkSPn5l5E"),
    createVideo("Lemon Wipe-Out", "h_vcpA03evY"),
    createVideo("The Tell Tale Heart", "JI1Zuge8Sz8"),
    createVideo("El Soltero y La Soltera", "xvqcdD213K0"),
    createVideo("Overly Overdue Election Day Special!", "1VVS5q2_mhQ"),
    createVideo("Bruce Sanchez 5 o clock News", "v23JQAcvEc0"),
    createVideo("COPS: Episode 3", "8J-NN-B4uuI"),
    createVideo("Credit Card Insurance", "ZEz3FbGXzDk"),
    createVideo("Paul Konerko: His Life", "LHp_ls5CY5c"),
    createVideo("The Van and the Man", "LhUhkt1yb40"),
    createVideo("The Documentary of A Bartender", "BLWjAn5fJg0"),
    createVideo("COPS: Christmas Edition", "EI9jiW9fezs"),
    createVideo("The Marker", "-qoypzyEiZY"),
    createVideo("The Death", "MbImN6Egrww"),
    createVideo("The Greeting", "9YAaQbJRDoo"),
    createVideo("SAN DIEGO NEWS", "tt2TsGaYlcQ"),
    createVideo("The old times", "MAEkivnbDyo"),
    createVideo("The Evoulution of the Earth", "5Pm7nmvFwnI"),
    createVideo("John teaches you how to dougie", "5C8q-bSvxEA"),
    createVideo("Background Generator Guy", "19yAOmdnjtU"),
    createVideo("Hank does his thing", "PTEq3leOwSU"),
    createVideo("Day 5", "J9YHEhb4Q-w"),
    createVideo("Day 4", "macTY6_zkwQ"),
    createVideo("Day 3", "mT5JT0s5dUo"),
    createVideo("Day 2", "KxGZXZuZSU8"),
    createVideo("Day 1", "nF0rR9cjPrc"),
    createVideo("COPS Episode 1", "S-458yNSkts"),
    createVideo("Egg Soup", "BJg4KwEhmtY"),
    createVideo("Inception 2.000000 Trailer", "mKLvBcbUbEM"),
]

// Helper functions to decode/encode the response body
function decodeBody(buffer) {
    return new TextDecoder("utf-8").decode(buffer);
}

function encodeBody(str) {
    return new TextEncoder().encode(str);
}

function modRichItemRenderer(video) {
    if (video.richItemRenderer?.content?.videoRenderer) {
        modVideoRenderer(video.richItemRenderer.content.videoRenderer);
    }
}

function modVideoRenderer(video) {
    let randomIndex = Math.floor(Math.random() * megaiceVideos.length);
    let megaiceVid = megaiceVideos[randomIndex];
    video.videoId = megaiceVid.videoId;
    if (video.title.runs) {
        video.title.runs[0].text = megaiceVid.title;
    }
    if (video.owner?.runs) {
        video.owner.runs[0].text = "MegaIceTV";
    }
    if (video.shortBylineText?.runs) {
        video.shortBylineText.runs[0].text = "MegaIceTV";
    }
    if (video.title.simpleText) {
        video.title.simpleText = megaiceVid.title;
    }
    if (video.navigationEndpoint) {
        video.navigationEndpoint.commandMetadata.webCommandMetadata.url = `/watch?v=${megaiceVid.videoId}`;
        video.navigationEndpoint.watchEndpoint.videoId = megaiceVid.videoId;
    }
    if (video.inlinePlaybackEndpoint) {
        video.inlinePlaybackEndpoint.commandMetadata.webCommandMetadata.url = `/watch?v=${megaiceVid.videoId}=YAHIAQE=%3D`;
        video.inlinePlaybackEndpoint.watchEndpoint.videoId = megaiceVid.videoId;
    }
    if (video.avatar?.avatarViewModel?.image?.sources?.[0]?.url) {
        video.avatar.avatarViewModel.image.sources[0].url = `https://yt3.ggpht.com/ytc/AIdro_n7HBrfsHzZB09xfp7mto7Cc7OHP3OnCx0Y-4d2XEh_ehI=s48-c-k-c0x00ffffff-no-rj`;
    }
    if (video.avatar?.decoratedAvatarViewModel?.avatar?.avatarViewModel?.image?.sources?.[0]?.url) {
        video.avatar.decoratedAvatarViewModel.avatar.avatarViewModel.image.sources[0].url = `https://yt3.ggpht.com/ytc/AIdro_n7HBrfsHzZB09xfp7mto7Cc7OHP3OnCx0Y-4d2XEh_ehI=s48-c-k-c0x00ffffff-no-rj`;
    }
    //video.thumbnail.thumbnails[0].url = `https://i.ytimg.com/vi/${megaiceVid.videoId}/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0A7SwQS7Mum-LrDGgEqrmsR85Ew`;
    video.thumbnail.thumbnails[0].url = `https://i.ytimg.com/vi/${megaiceVid.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxUhkj3LAzuDid3kDUmiyMeOUGtQ`
    if (video.thumbnail.thumbnails[1]) {
        // video.thumbnail.thumbnails[1].url = `https://i.ytimg.com/vi/${megaiceVid.videoId}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYXlCgO3ILJYv_gE3jYLGK9OFPDg`;
         video.thumbnail.thumbnails[1].url = `https://i.ytimg.com/vi/${megaiceVid.videoId}/hqdefault.jpg`
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
			    if (ytInitialData.contents?.twoColumnWatchNextResults?.secondaryResults?.secondaryResults?.results?.[1]?.itemSectionRenderer?.contents) {
				ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results[1].itemSectionRenderer.contents.forEach(video => {
				    let contents = video.compactVideoRenderer;
				    if (contents) {
				        modVideoRenderer(contents);
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

