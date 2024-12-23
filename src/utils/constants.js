const GOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const buttons = 
["All", "Roasts", "News", "Podcasts", "Music", "Comedy clubs", "Satire", "Dark comedy", "Dramedy", "Web series", "Mixes","Debates","Live"];

export const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=`+GOGLE_API_KEY;

