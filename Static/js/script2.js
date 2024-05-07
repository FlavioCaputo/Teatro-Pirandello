const panoramaImage = new PANOLENS.ImagePanorama('foyer.jpg');
const imageContainer = document.getElementById('panorama');

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);