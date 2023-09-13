export function formatToUTC(release_date) {
    if (!release_date) return "";
  const releaseDate = new Date(release_date);
  const utcReleaseDate = releaseDate.toISOString();
  return utcReleaseDate;
}
