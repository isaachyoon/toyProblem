/*
I wrote a crawler that visits web pages, stores a few keywords in a database, and
follows links to other web pages. I noticed that my crawler was wasting a lot of time
visiting the same pages over and over, so I made a hash table visited where I'm
storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already
been visited.
Thing is, the crawler is running on my old desktop computer in my parents' basement
(where I totally don't live anymore), and it keeps running out of memory because
visited is getting so huge.
How can I trim down the amount of space taken up by visited?


webcrawler visits websites that has not been visited by the hash table but the hash table is getting too big. Write a function that provides a shelf (exp) life. Maybe creating additional hash table that that uses timestamp as the key value. So that when the time comes, we can do a constant access and find the location of that hash table and delete accordingly.

ex.
visited = {
	uniqueURL: someInfo
}

expiration = {
	timeStamp = uniqueURL,
	timeStamp = uniqueURL
}

if(expiration[new date()]) {
	delete visited[expiration[new data()]]
}

/////////////////////this is actually creating extra storage ///////////////////////////////




*/
