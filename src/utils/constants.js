export const GOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const buttons = 
["All", "Roasts", "News", "Podcasts", "Music", "Comedy clubs", "Satire", "Dark comedy", "Dramedy", "Web series", "Mixes","Debates","Live"];

export const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=`+GOGLE_API_KEY;

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_MOST_WATCHED = `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=`+GOGLE_API_KEY;