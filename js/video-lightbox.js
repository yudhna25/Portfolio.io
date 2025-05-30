document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.createElement('div');
  overlay.id = 'videoOverlay';
  overlay.style = 'display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:#000a; z-index:9999; justify-content:center; align-items:center;';
  overlay.innerHTML = '<video id="videoPlayer" controls autoplay style="max-width:90%; max-height:90%; border:4px solid white; border-radius:10px;"></video>';
  document.body.appendChild(overlay);

  const videoPlayer = document.getElementById('videoPlayer');

  document.body.addEventListener('click', function(e) {
    if (e.target.matches('video.video-lightbox')) {
      const src = e.target.getAttribute('src');
      if (src) {
        videoPlayer.src = src;
        overlay.style.display = 'flex';
        videoPlayer.play();
      }
    }
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      videoPlayer.pause();
      videoPlayer.src = '';
      overlay.style.display = 'none';
    }
  });
});

