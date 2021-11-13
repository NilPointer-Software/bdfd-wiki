# Image Links Troubleshooting
**My `$image`/`$thumbnail`/`$authorIcon`/`$footerIcon` is not loading! Why?**

You should not use GIFs and other media files in your code if they don't have a extension (e.g. `.gif` for GIFs, `.png`/`.jpeg`/`.jpg` for images, etc). This is because the link probably goes to the site, not the media itself. Adding the extension to the link won't change that, most of the time. As such, you must use media files that already have a extension.\
Best Practice: Download the necessary media file and send it in Discord, then copy it's link (media URL, not message URL) and use it in your code.\
If the image still doesn't load, then it could be because of a bad internet connection, the website itself, or Discord being slow. There is nothing we can do in these cases.