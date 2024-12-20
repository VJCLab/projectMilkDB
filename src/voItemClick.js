/**
 *
 * @param {Event} ev
 * @param {string} k audioId
 */
export default function voItemClick(audioElement, k) {
  audioElement.src = `./voice/${k.split("_VO")[0]}.mp3`;
  audioElement.load();
}
