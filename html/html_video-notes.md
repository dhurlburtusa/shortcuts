# HTML Video Notes


## Browser Support

There are 3 supported video formats: MP4, WebM, and Ogg.

| Browser           | MP4 | WebM | Ogg |
| ----------------- | --- | ---- | --- |
| Internet Explorer | YES | NO   | NO  |
| Chrome            | YES | YES  | YES |
| Firefox           | YES | YES  | YES |
| Safari            | YES | NO   | NO  |
| Opera             | YES (from Opera 25) | YES  | YES |


## Media Types

| File Format | Media Type |
| ----------- | ---------- |
| MP4         | video/mp4  |
| WebM        | video/webm |
| Ogg         | video/ogg  |


## Example

```html
...
<video id="vid" width="320" height="240" autoplay controls>
  <!-- The autoplay attribute does not work in mobile devices like iPad and iPhone. -->
  <source type="video/ogg" src="movie.ogg">
  <source type="video/mp4" src="movie.mp4">
  <track kind="subtitles" label="English" src="subtitles_en.vtt" srclang="en">
  <track kind="subtitles" label="Norwegian" src="subtitles_no.vtt" srclang="no">
  Your browser does not support the video tag.
</video>
...
<script>
  (function () {
    var vidElmt = document.querySelector('#vid')
    
    if (vidElmt.canPlayType('video/ogg')) {
      // ...
    }
  
    vidElmt.load()
  
    vidElmt.play().then(() => {
      // ...
    }).catch((errName) => {
      // ...
    })
  
    vidElmt.pause()
  
    console.dir(vidElmt.audioTracks)
    console.dir(vidElmt.videoTracks)
    console.dir(vidElmt.textTracks)
  
    if (vidElmt.autoplay) {
      console.log('It will autoplay')
    }
  
    if (!vidElmt.controls) {
      vidElmt.controls = true
    }
  
    switch (vidElmt.readyState) {
      case HTMLMediaElement.HAVE_NOTHING:
        console.log('No information yet.')
        break
      case HTMLMediaElement.HAVE_METADATA:
        console.log('Metadata for audio/video is ready.')
        break
      case HTMLMediaElement.HAVE_CURRENT_DATA:
        console.log('Data for the current playback position is available, but not enough data to play next frame/millisecond.')
        break
      case HTMLMediaElement.HAVE_FUTURE_DATA:
        console.log('Data for the cHAVE_METADATAurrent and at least the next frame is available.')
        break
      case HTMLMediaElement.HAVE_ENOUGH_DATA:
        console.log('Enough data is available to start playing.')
        break
    }
  
    if (vidElmt.paused) {
      // ...
    }
  
    if (vidElmt.ended) {
      // ...
    }
  
    if (vidElmt.loop) {
      vidElmt.loop = false
    }
  
    if (vidElmt.muted) {
      vidElmt.muted = false
    }
  })()
</script>
```
