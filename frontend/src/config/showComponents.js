export function canDisplayUserProfile(location) {
  if (
    location.includes('/isticmaale/galid') ||
    location.includes('/isticmaale/diwaan')
  )
    return false;
  return true;
}
