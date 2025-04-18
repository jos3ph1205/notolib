export default function preventDuplicate(domain, name, callback) {
   if (!window.location.href.includes(domain)) {
      alert(`This script can only be run on ${domain}.com`);
      return
   }
   const storageKey = `${name.toLowerCase()}_executed`;
   if (localStorage.getItem(storageKey)) {
      console.log(`${name} script already executed`);
      return;
   }

   callback();
   localStorage.setItem(storageKey, 'true');
}